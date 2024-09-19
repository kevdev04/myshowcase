"use client"

import { Button } from "@/components/ui/button"
import { FileText, Linkedin, Menu } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const projects = [
  { title: "Project 1", description: "Description of Project 1" },
  { title: "Project 2", description: "Description of Project 2" },
  { title: "Project 3", description: "Description of Project 3" },
  { title: "Project 4", description: "Description of Project 4" },
  { title: "Project 5", description: "Description of Project 5" },
  { title: "Project 6", description: "Description of Project 6" },
]

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-[#E8EEF2]">
      <div className="bg-[#0084C7] text-white p-4">
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
      </div>
      <div className="flex-grow p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}