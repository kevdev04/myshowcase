'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { X, Loader2, Upload } from 'lucide-react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  orderBy, 
  query, 
  DocumentData 
} from 'firebase/firestore';
import { app, FirebaseApp } from '@/lib/firebase';

interface Photo extends DocumentData {
  id: string;
  src: string;
  alt: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  createdAt: string;
}

const storage = getStorage(app as FirebaseApp);
const db = getFirestore(app as FirebaseApp);

const SECURITY_QUESTION = "Cual es mi comida favorita?";
const SECURITY_ANSWER = "enchiladas";

const ImageGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [uploadKey, setUploadKey] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const photosRef = collection(db, 'photos');
      const q = query(photosRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const fetchedPhotos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Photo[];
      
      setPhotos(fetchedPhotos);
    } catch (err) {
      console.error('Error fetching photos:', err);
      setError('Error loading gallery');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (securityAnswer.toLowerCase() === SECURITY_ANSWER.toLowerCase()) {
      setIsAuthenticated(true);
      setIsAuthDialogOpen(false);
      setSecurityAnswer('');
      setError(null);
      setTimeout(() => {
        fileInputRef.current?.click();
      }, 100);
    } else {
      setError('Respuesta Incorrecta');
    }
  };

  const handleUploadClick = () => {
    if (!isAuthenticated) {
      setIsAuthDialogOpen(true);
    } else {
      fileInputRef.current?.click();
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      setError('La foto tiene que ser menor a 10MB');
      setUploadKey(prev => prev + 1);
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      const storageRef = ref(storage, `gallery/${Date.now()}-${file.name}`);
      const uploadResult = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(uploadResult.ref);

      const aspectRatio = await new Promise<Photo['aspectRatio']>((resolve) => {
        const img = new window.Image();
        img.onload = () => {
          if (img.width > img.height) {
            resolve('landscape');
          } else if (img.height > img.width) {
            resolve('portrait');
          } else {
            resolve('square');
          }
        };
        img.onerror = () => resolve('square');
        img.src = url;
      });

      await addDoc(collection(db, 'photos'), {
        src: url,
        alt: file.name,
        aspectRatio,
        createdAt: new Date().toISOString()
      });

      await fetchPhotos();
    } catch (err) {
      console.error('Error uploading image:', err);
      setError('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
      setUploadKey(prev => prev + 1);
    }
  };

  // Create columns with proper distribution
  const columns = photos.reduce<Photo[][]>(
    (acc, photo, index) => {
      acc[index % 2].push(photo);
      return acc;
    },
    [[], []]
  );

  return (
    <div className="min-h-screen bg-black">
      <header className="p-4 text-white fixed w-full z-10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Kev Gallery</h1>
          <button
            onClick={handleUploadClick}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Upload image"
          >
            <Upload size={24} />
          </button>
        </div>
      </header>
      
      <main className="pt-20 px-4 max-w-6xl mx-auto">
        {isLoading ? (
          <div className="text-center text-gray-400 mt-8">
            <Loader2 className="animate-spin mx-auto" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {columns.map((columnPhotos, columnIndex) => (
              <div key={columnIndex} className="space-y-4">
                {columnPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => {
                      setSelectedPhoto(photo);
                      setIsOpen(true);
                    }}
                    className="relative cursor-pointer group"
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={photo.src}
                        alt={photo.alt || 'Gallery image'}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        <Dialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen}>
          <DialogContent className="bg-white rounded-lg p-6 max-w-sm mx-auto">
            <DialogTitle className="text-xl font-bold mb-4">Solo amigos pueden subir una foto</DialogTitle>
            <form onSubmit={handleAuthSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  {SECURITY_QUESTION}
                </label>
                <input
                  type="password"
                  value={securityAnswer}
                  onChange={(e) => setSecurityAnswer(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
              >
                Subir foto
              </button>
            </form>
          </DialogContent>
        </Dialog>

        <input
          key={uploadKey}
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
          id="image-upload"
        />

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
            {selectedPhoto && (
              <div className="relative bg-black">
                <div className="relative w-full h-[90vh]">
                  <Image
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt || 'Selected image'}
                    fill
                    className="object-contain"
                  />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                  aria-label="Close dialog"
                >
                  <X size={24} />
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default ImageGallery;

//testing deployment