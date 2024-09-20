import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="flex flex-col items-center space-y-1 pb-2 mb-4">
      <div className="relative w-16 h-16 mt-2">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQG6o3BmnuZVVA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724384039724?e=1732147200&v=beta&t=zh1sa6QOryf9WaBBxlslnnR_Qcu7XJCK8IoFB1X30zU"
          alt="Profile"
          className="rounded-full"
          width="64"
          height="64"
          style={{ aspectRatio: "1/1", objectFit: "cover" }}
        />
      </div>
      <h1 className="text-lg font-bold">Kevin Garcia Cristobal</h1>
      <p className="text-muted-foreground text-sm">Sophomore Software Engineer</p>
      <div className="flex flex-wrap justify-center gap-1">
        <Badge variant="secondary" className="text-xs">FrontEnd</Badge>
        <Badge variant="secondary" className="text-xs">Mobile Dev</Badge>
        <Badge variant="secondary" className="text-xs">UI/UX</Badge>
        <Badge variant="secondary" className="text-xs">Design System</Badge>
        <Badge variant="secondary" className="text-xs">BackEnd</Badge>
      </div>
    </div>
  )
}