"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Linkedin, Menu, Github } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardLayout() {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = (e: { preventDefault: () => void }) => {
    if (!isSpinning) {
      e.preventDefault();
      setIsSpinning(true);
      setTimeout(() => {
        setIsSpinning(false);
        window.open("https://github.com/kevdev04", "_blank");
      }, 600);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0084C7] text-white">
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
      <main className="flex-grow p-4 bg-[#0084C7]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:grid-rows-4 gap-4 h-[calc(100vh-8rem)] relative">
          <div className="bg-[#006699] rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#005580] flex items-center justify-center lg:row-span-2">
            <div>Project Content for 1, 4</div>
          </div>

          <div className="bg-[#006699] rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#005580] flex items-center justify-center lg:col-span-2 lg:row-span-2">
            <div>Project Content for 2, 3, 6, 7</div>
          </div>

          <div className="bg-[#006699] rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#005580] flex items-center justify-center">
            <div>Project Content for 5</div>
          </div>

          <div className="bg-[#006699] rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#005580] flex items-center justify-center lg:col-start-1 lg:row-start-4">
            <div>Project Content for 8</div>
          </div>
          <div className="bg-[#006699] rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#005580] flex items-center justify-center lg:col-start-1 lg:row-start-3">
            <div>Project Content for 8</div>
          </div>

          <div className="bg-[#006699] rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#005580] flex items-center justify-center lg:row-span-2 lg:col-start-4">
            <div>Project Content for 9, 13</div>
          </div>

          <div className="bg-[#006699] rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#005580] flex items-center justify-center lg:row-span-2">
            <div>Project Content for 6, 10</div>
          </div>

          <div className="bg-[#006699] rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#005580] flex items-center justify-center lg:row-span-2">
            <div>Project Content for 7, 11</div>
          </div>

          <div className="bg-[#006699] rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#005580] flex items-center justify-center">
            <div>Project Content for 12</div>
          </div>

          <Link 
            href="https://github.com/kevdev04" 
            target="_blank"
            onClick={handleClick}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <Button 
              variant="secondary" 
              size="icon" 
              className="border-14 shadow-none border-customBlue p-4 rounded-full w-32 h-32 bg-white text-[#0084C7] hover:bg-[#f0f0f0] hover:text-[#006699] transition-all duration-300 ease-in-out"
            >
              <Github className={`w-16 h-16 ${isSpinning ? 'animate-spin' : ''}`} />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}