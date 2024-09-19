import { Badge } from "@/components/ui/badge"
import { IconProps } from "@radix-ui/react-icons/dist/types"

export default function Component() {
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="relative w-24 h-24 mt-4">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQG6o3BmnuZVVA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724384039724?e=1732147200&v=beta&t=zh1sa6QOryf9WaBBxlslnnR_Qcu7XJCK8IoFB1X30zU"
          alt="Profile"
          className="rounded-full"
          width="96"
          height="96"
          style={{ aspectRatio: "96/96", objectFit: "cover" }}
        />
      </div>
      <h1 className="text-2xl font-bold">Kevin Garcia Cristobal</h1>
      <p className="text-muted-foreground">Freshman Software Engineer</p>
      <div className="flex flex-wrap justify-center gap-1.5">
        <Badge variant="secondary">FrontEnd</Badge>
        <Badge variant="secondary">Mobile Development</Badge>
        <Badge variant="secondary">UI/UX Design</Badge>
        <Badge variant="secondary">Design System</Badge>
        <Badge variant="secondary">BackEnd</Badge>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-3">
        <TypeIcon className="w-8 h-8 p-1.5 bg-muted rounded-md" />
        <CodepenIcon className="w-8 h-8 p-1.5 bg-muted rounded-md" />
        <DatabaseIcon className="w-8 h-8 p-1.5 bg-muted rounded-md" />
        <FigmaIcon className="w-8 h-8 p-1.5 bg-muted rounded-md" />
        <PiIcon className="w-8 h-8 p-1.5 bg-muted rounded-md" />
        <FlowerIcon className="w-8 h-8 p-1.5 bg-muted rounded-md" />
        <CloudIcon className="w-8 h-8 p-1.5 bg-muted rounded-md" />
        <GitlabIcon className="w-8 h-8 p-1.5 bg-muted rounded-md" />
        <TerminalIcon className="w-8 h-8 p-1.5 bg-muted rounded-md" />
      </div>
    </div>
  )
}

function CloudIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}

function CodepenIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}

function DatabaseIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}

function FigmaIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  )
}

function FlowerIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
      <path d="M12 7.5V9" />
      <path d="M7.5 12H9" />
      <path d="M16.5 12H15" />
      <path d="M12 16.5V15" />
      <path d="m8 8 1.88 1.88" />
      <path d="M14.12 9.88 16 8" />
      <path d="m8 16 1.88-1.88" />
      <path d="M14.12 14.12 16 16" />
    </svg>
  )
}

function GitlabIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.15.21L12 12l-6-8a.39.39 0 0 0-.23-.07.38.38 0 0 0-.22.11.42.42 0 0 0-.14.18l-3.33 10a.36.36 0 0 0 .05.37c.09.1.23.16.38.16h6v5.86a.38.38 0 0 0 .38.38h6.12a.38.38 0 0 0 .38-.38v-5.86h6c.15 0 .29-.06.38-.16a.36.36 0 0 0 .05-.37z" />
    </svg>
  )
}

function PiIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 2h14v3H5V2zM5 5v16h14V5H5zM12 14v-5h2v5h-2z" />
    </svg>
  )
}

function TypeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3h8v2H8z" />
      <path d="M8 9h8v2H8z" />
      <path d="M8 15h8v2H8z" />
    </svg>
  )
}

function TerminalIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4h20v16H2V4z" />
      <path d="M7 10l3 3-3 3" />
      <path d="M12 13h6" />
    </svg>
  )
}