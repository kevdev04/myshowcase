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
  { q: "Who are you?", a: "Hello! I am a freshman swe student focused in my goals and commited to achieve them." },
  { q: "What are you doing to achieve your goals?", a: "Well. My career is just starting but I'm aware that big achievements requires big sacrifices, I am constantly challenging myself to learn more, share more and achieve more." },
  { q: "What's next for you?", a: "Land an Internship!" },
  { q: "What's your mindset?", a: "I believe my mindset will take me there! I'm determined to succeed and always looking for new opportunities to grow." },
  { q: "Tell me about your journey.", a: "My journey is just beginning. As a freshman, I'm excited to explore the world of software engineering, tackle challenging projects, and build a strong foundation for my future career." },
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

export default function Home() {
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
        const answer = qa.find((item) => item.q.toLowerCase() === inputValue.toLowerCase())?.a || "I'm still learning about that aspect of my journey. Is there anything else you'd like to know?"
        addMessage(answer, false)
      }, 500)
    }
  }

  const handleSuggestedQuestion = (question: string) => {
    addMessage(question, true)
    setIsTyping(true)
    setTimeout(() => {
      const answer = qa.find((item) => item.q === question)?.a || "I'm still learning about that aspect of my journey. Is there anything else you'd like to know?"
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
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]') as HTMLElement;
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
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
          <div className="flex space-x-2">
          <Link href="google.com">
            <Button variant="secondary" size="sm" className="bg-white text-[#0084C7]">
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/kevingael/" target="blank">
            <Button variant="secondary" size="sm" className="bg-white text-[#0084C7]">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            </Link>
          </div>
        </nav>
      </div>
      <div className="flex-grow p-4 overflow-hidden">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 h-full flex flex-col">
          <Profile />
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
                      src="/placeholder.svg?height=40&width=40"
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
                      src="/placeholder.svg?height=40&width=40"
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
            <div className="flex flex-wrap gap-2 mb-2">
              {qa.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestedQuestion(item.q)}
                  className="text-xs"
                >
                  {item.q}
                </Button>
              ))}
            </div>
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