
export default function Profile() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-8 h-8">
        <img
          src="/pfp.webp"
          alt="Profile"
          className="rounded-full"
          width="32"
          height="32"
          style={{ aspectRatio: "1/1", objectFit: "cover" }}
        />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-[1.5px] border-white"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center space-x-1">
          <h1 className="text-xs font-semibold">Kevin Garcia Cristobal</h1>
          
        </div>
        <p className="text-[10px] text-muted-foreground text-white">Sophomore Software Engineer Student</p>
      </div>
    </div>
  )
}