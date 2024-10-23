'use client'

import React from "react"
import { Button } from "@/components/ui/button"
import { FileText, Linkedin, Menu, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SizeIcon } from "@radix-ui/react-icons"

const projects = [
  {
    image: '/f.svg',
    Size:{
      width: 133,
      height: 196
    },
    title: 'Financial education platform', 
    technologies: ['Next.js', 'TypeScript', 'Tailwind']
  },
  {
    image: '/portfolio.webp',
    title: 'Machine Learning Chatbot About Me',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'TensorFlow', 'Python', 'ChatterBot', 'Django','Heroku']
  },
  {
    image: '/project-3.jpg',
    title: 'Project 3',
    technologies: ['Vue.js', 'Vuex', 'Sass']
  },
  {
    image: '/project-4.jpg',
    title: 'Project 4',
    technologies: ['Angular', 'RxJS', 'NgRx']
  },
  {
    image: '/project-5.jpg',
    title: 'Project 5',
    technologies: ['Gatsby', 'Contentful', 'Emotion']
  },
  {
    image: '/project-6.jpg',
    title: 'Project 6',
    technologies: ['Svelte', 'Sapper', 'Rollup']
  },
  {
    image: '/edu.png',
    title: 'EducAR',
    technologies: ['Remix', 'Cloudflare Workers', 'Prisma']
  },
  {
    image: '/project-8.jpg',
    title: 'Project 8',
    technologies: ['Astro', 'Sanity', 'Cypress']
  },
  {
    image: '/project-9.jpg',
    title: 'Project 9',
    technologies: ['Nuxt.js', 'Vuex', 'Jest']
  }
];

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0084C7] text-white">
      <header className="bg-[#0084C7] text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="opacity-70 hover:opacity-100">
              About Me
            </Link>
            <Link href="/projects" className="font-bold">
              Projects
            </Link>
            <Link href="/journey" className="opacity-70 hover:opacity-100">
              Journey
            </Link>
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
          <div className="flex space-x-3">
            <Link href="https://github.com/kevdev04">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-[#0084C7]"
              >
                <Github className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Github</span>
              </Button>
            </Link>
            <Link href="google.com">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-[#0084C7]"
              >
                <FileText className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Resume</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/kevingael/" target="blank">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-[#0084C7]"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow p-4 bg-[#0084C7]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:grid-rows-4 gap-4 h-[calc(100vh-8rem)] relative">
          {projects.map((project, index) => (
            <div key={index} className={`bg-[#006699] rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#005580] flex flex-col justify-between overflow-hidden ${
              index === 0 ? 'lg:row-span-2' : 
              index === 1 ? 'lg:col-span-2 lg:row-span-2' : 
              index === 3 ? 'lg:col-start-1 lg:row-start-4' :
              index === 4 ? 'lg:col-start-1 lg:row-start-3' :
              index === 5 ? 'lg:row-span-2 lg:col-start-4' :
              index === 6 || index === 7 ? 'lg:row-span-2' : ''
            }`}>
              <div className="relative h-full">
                <Image src={project.image} alt={project.title} layout="fill"  className=" object-cover object-center w-full h-full" />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-0"></div>
                <div className="absolute bottom-0 left-0 p-4 bg">
                  <h3 className={` mb-2 text-3xl font-bold bg-gradient-to-tr from-sky-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent ${
                    index === 1 ? 'text-3xl' :
                    index === 0 ? 'text-xl' :
                    'text-lg'
                  }`}>{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-[#0084C7] px-2 py-1 rounded text-white">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}