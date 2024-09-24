"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, FileText, Linkedin, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Profile from "@/components/ui/profile"

const qa = [
  {
    q: "Tell me about your background in software.",
    a: "I am Kevin Garcia, a sophomore Software Engineer student who's passionate about technology. I started coding in high school with HTML and CSS, and now I'm exploring more complex languages like TypeScript, C++ and Dart. I've built a few web applications and I'm currently working on a mobile app for my university's project fair."
  },
  {
    q: "What specific technologies or frameworks are you most excited about right now?",
    a: "I'm really excited about React and Next.js. I've been using them to build web applications and I love how they make front-end development more efficient. I'm also intrigued by machine learning – I've just started a course on Coursera about the basics of AI and I'm eager to apply what I'm learning to real-world problems."
  },
  {
    q: "How do you approach learning new technologies or solving complex problems?",
    a: "When learning something new, I usually start with online tutorials and documentation. Then I try to build small projects to apply what I've learned. For complex problems, I break them down into smaller, manageable parts. Recently, I worked on a group project where we had to create a database system for a school project. We divided the work based on our strengths and used GitHub for collaboration, which was a great learning experience."
  },
  {
    q: "Can you tell me about a significant project or contribution you've made?",
    a: "My most significant project so far has been developing a study group finder app for my fellow students. It allows users to create or join study groups based on courses and schedules. While it's not perfect, it's been exciting to see other students actually use something I've built. I've learned a lot about user experience design and database management through this project."
  },
  {
    q: "What are your career aspirations in the field of software engineering?",
    a: "I'm really interested in becoming a full-stack developer. I love the idea of being able to work on both the front-end and back-end of applications. In the short term, I'm hoping to land an internship where I can gain real-world experience and learn from professionals in the field. Long-term, I'd love to work on projects that have a positive impact on society, maybe in areas like education powered by AI, AR and VR."
  },
]

type Message = {
  text: string
  isUser: boolean
  isTyping: boolean
}

const TypeWriter = ({ text, onComplete }: { text: string; onComplete: () => void }) => {
  const [displayText, setDisplayText] = useState("")
  const index = useRef(0)

  useEffect(() => {
    if (index.current < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, index.current + 1))
        index.current += 1
      }, 30)
      return () => clearTimeout(timer)
    } else if (index.current === text.length) {
      onComplete()
    }
  }, [text, displayText, onComplete])

  return <span>{displayText}</span>
}

export default function Component() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      addMessage("Welcome to my portfolio! Ask something to start.", false)
    }
  }, [])

  const addMessage = (text: string, isUser: boolean) => {
    setMessages((prev) => [...prev, { text, isUser, isTyping: !isUser }])
  }

  const handleSend = () => {
    if (inputValue.trim()) {
      addMessage(inputValue, true)
      setInputValue("")
      setIsTyping(true)
      setTimeout(() => {
        const answer = qa.find((item) => item.q.toLowerCase() === inputValue.toLowerCase())?.a || "I am currently learning how to implement machine learning models to answer custom questions based on my data. Sorry for the inconvenience."
        addMessage(answer, false)
      }, 500)
    }
  }

  const handleSuggestedQuestion = (question: string) => {
    addMessage(question, true)
    setIsTyping(true)
    setTimeout(() => {
      const answer = qa.find((item) => item.q === question)?.a || "I am currently learning how to implement machine learning models to answer custom questions based on my data. Sorry for the inconvenience."
      addMessage(answer, false)
    }, 500)
  }

  const handleTypingComplete = (index: number) => {
    setMessages((prev) =>
      prev.map((msg, i) => (i === index ? { ...msg, isTyping: false } : msg))
    )
    setIsTyping(false)
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight
      }
    }
  }, [messages])

  return (
    <div className="flex flex-col h-screen w-screen bg-[#E8EEF2]">
      <div className="bg-[#0084C7] text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="font-bold">About Me</Link>
            <Link href="/projects" className="opacity-70 hover:opacity-100">Projects</Link>
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
          <Profile />
          <div className="flex space-x-2">
            <Link href="google.com">
              <Button variant="secondary" size="sm" className="bg-white text-[#0084C7]">
                <FileText className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Resume</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/kevingael/" target="blank">
              <Button variant="secondary" size="sm" className="bg-white text-[#0084C7]">
                <Linkedin className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </nav>
      </div>
      <div className="flex-grow p-4 overflow-hidden">
        <div className="bg-white rounded-lg shadow-lg border border-gray-300 h-full flex flex-col">
          <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start mb-4 ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                {!message.isUser && (
                  <div className="flex flex-col items-center mr-2">
                    <Image
                      src="/pfp.webp"
                      alt="Kev"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="text-xs mt-1">Kevin</span>
                  </div>
                )}
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.isUser
                      ? "bg-[#0084C7] text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.isTyping ? (
                    <TypeWriter
                      text={message.text}
                      onComplete={() => handleTypingComplete(index)}
                    />
                  ) : (
                    message.text
                  )}
                </div>
                {message.isUser && (
                  <div className="flex flex-col items-center ml-2">
                    <Image
                      src="/recruiter.webp"
                      alt="Recruiter"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="text-xs mt-1">Recruiter</span>
                  </div>
                )}
              </div>
            ))}
          </ScrollArea>
          <div className="p-4 border-t border-gray-200">
            <ScrollArea className="h-24 mb-2">
              <div className="flex flex-wrap gap-2">
                {qa.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSuggestedQuestion(item.q)}
                    className="text-xs bg-gray-100 md:py-2 md:px-4 py-1 px-2 h-auto whitespace-normal text-left justify-start md:h-9"
                  >
                    {item.q}
                  </Button>
                ))}
              </div>
            </ScrollArea>
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Ask for information about me"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-grow"
              />
              <Button onClick={handleSend} className="bg-[#0084C7] hover:bg-[#0074b3]">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}