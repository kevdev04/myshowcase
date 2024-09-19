"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { FileText, Linkedin, Menu, Play, SkipBack, SkipForward } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Project {
  title: string;
  description: string;
  type: 'small' | 'medium' | 'large';
}

const projects: Project[] = [
  { title: "PRISM", description: "Unlock 25 million songs with endless possibilities.", type: "large" },
  { title: "Space Grotesk", description: "Our signature font", type: "small" },
  { title: "Color Palette", description: "Vibrant and energetic", type: "small" },
  { title: "Featured Artist", description: "Discover new talent", type: "medium" },
  { title: "Now Playing", description: "Los Angeles - The Midnight", type: "small" },
  { title: "25M", description: "Try Prism and unlock 25 million songs with endless possibilities.", type: "medium" },
]

const colors = ["red", "yellow", "green", "blue"];

type ColorCircleProps = {
  color: string;
}

const ColorCircle: React.FC<ColorCircleProps> = ({ color }) => (
  <div className={`w-6 h-6 rounded-full bg-${color}-400`}></div>
)

export default function Projects() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#E8EEF2] text-gray-800 overflow-hidden">
      <header className="bg-[#0084C7] text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="opacity-70 hover:opacity-100">About Me</Link>
            <Link href="/projects" className="font-bold">Projects</Link>
            <Link href="/journey" className="opacity-70 hover:opacity-100">Journey</Link>
          </div>
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/">About Me</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/projects">Projects</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/journey">Journey</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex space-x-2">
            <Button variant="secondary" size="sm" className="bg-white text-[#0084C7]">
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <Button variant="secondary" size="sm" className="bg-white text-[#0084C7]">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </nav>
      </header>
      <main className="flex-grow p-4 overflow-auto">
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:z-10 ${
                project.type === 'large' ? 'col-span-2 row-span-2' :
                project.type === 'medium' ? 'col-span-2' : ''
              }`}
            >
              {index === 0 && (
                <>
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 text-transparent bg-clip-text">Testing chavales</h2>
                  <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4"></div>
                  <p>{project.description}</p>
                </>
              )}
              {index === 1 && (
                <>
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-4xl font-bold">Aa Bb Cc</p>
                </>
              )}
              {index === 2 && (
                <>
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <div className="flex space-x-2">
                    {colors.map((color, i) => (
                      <ColorCircle key={i} color={color} />
                    ))}
                  </div>
                </>
              )}
              {index === 3 && (
                <>
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <div className="w-full h-40 bg-gray-200 rounded-lg mb-2"></div>
                  <p>{project.description}</p>
                </>
              )}
              {index === 4 && (
                <>
                  <h2 className="text-sm font-bold mb-1">{project.title}</h2>
                  <p className="text-xs mb-2">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <SkipBack className="w-4 h-4" />
                    <Play className="w-6 h-6" />
                    <SkipForward className="w-4 h-4" />
                  </div>
                </>
              )}
              {index === 5 && (
                <>
                  <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="w-16 h-16 bg-gray-200 rounded-full mt-4"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}