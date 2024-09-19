"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const journeySteps = [
  { year: 2022, title: "Starting the Journey", description: "Beginning my journey in software engineering" },
  { year: 2023, title: "Learning and Growing", description: "Expanding my knowledge and skills" },
  { year: 2024, title: "Future Aspirations", description: "Setting goals for the future" },
]

export default function JourneyPage() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      const progress = scrollPosition / (docHeight - windowHeight)
      const step = Math.floor(progress * journeySteps.length)

      setActiveStep(Math.min(step, journeySteps.length - 1))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-500 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Journey</h1>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-200">About Me</Link>
            <Link href="/projects" className="hover:text-blue-200">Projects</Link>
            <Link href="/journey" className="hover:text-blue-200">Journey</Link>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
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
      </nav>
      <div className="container mx-auto p-4">
        <div className="flex">
          <div className="w-1/4 sticky top-20 h-[calc(100vh-5rem)]">
            <div className="h-full flex flex-col items-center">
              <div className="h-full w-1 bg-gray-300 relative">
                {journeySteps.map((step, index) => (
                  <div
                    key={index}
                    className={`absolute w-4 h-4 rounded-full -left-1.5 transition-all duration-500 ${
                      index <= activeStep ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    style={{ top: `${(index / (journeySteps.length - 1)) * 100}%` }}
                  >
                    <div className="absolute left-6 -top-2 whitespace-nowrap">{step.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-3/4">
            {journeySteps.map((step, index) => (
              <div key={index} className="mb-32 h-screen flex items-center">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
                  <p>{step.description}</p>
                  <div className="mt-4">
                    {index === 0 && (
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
                        🚀
                      </div>
                    )}
                    {index === 1 && (
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl animate-bounce">
                        🚀
                      </div>
                    )}
                    {index === 2 && (
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl animate-pulse">
                        🚀
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}