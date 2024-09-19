"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { FileText, Linkedin, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface JourneyStep {
  year: number;
  title: string;
  description: string;
}

const journeySteps: JourneyStep[] = [
  { year: 2022, title: "Starting the Journey", description: "Beginning my journey in software engineering" },
  { year: 2023, title: "Learning and Growing", description: "Expanding my knowledge and skills" },
  { year: 2024, title: "Future Aspirations", description: "Setting goals for the future" },
]

export default function JourneyPage() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      
      for (let i = sectionsRef.current.length - 1; i >= 0; i--) {
        const section = sectionsRef.current[i]
        if (section && scrollPosition > section.offsetTop) {
          setActiveStep(i)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#E8EEF2]">
      <header className="sticky top-0 z-10 bg-[#0084C7] text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="opacity-70 hover:opacity-100">About Me</Link>
            <Link href="/projects" className="opacity-70 hover:opacity-100">Projects</Link>
            <Link href="/journey" className="font-bold">Journey</Link>
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
      <main className="flex-grow container mx-auto p-4">
        
      </main>
    </div>
  )
}