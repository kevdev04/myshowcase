import { Badge } from "@/components/ui/badge"
import { IconProps } from "@radix-ui/react-icons/dist/types"

export default function Component() {
  return (
    <div className="flex flex-col items-center space-y-2 pb-4">
      <div className="relative w-20 h-20 mt-4">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQG6o3BmnuZVVA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724384039724?e=1732147200&v=beta&t=zh1sa6QOryf9WaBBxlslnnR_Qcu7XJCK8IoFB1X30zU"
          alt="Profile"
          className="rounded-full"
          width="80"
          height="80"
          style={{ aspectRatio: "80/80", objectFit: "cover" }}
        />
      </div>
      <h1 className="text-xl font-bold">Kevin Garcia Cristobal</h1>
      <p className="text-muted-foreground text-sm">Sophomore Software Engineer Student</p>
      <div className="flex flex-wrap justify-center gap-1">
        <Badge variant="secondary">FrontEnd</Badge>
        <Badge variant="secondary">Mobile Development</Badge>
        <Badge variant="secondary">UI/UX Design</Badge>
        <Badge variant="secondary">Design System</Badge>
        <Badge variant="secondary">BackEnd</Badge>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {/* Icon components go here */}
      </div>
    </div>
  )
}