import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Image from "next/image";

const avatarVariants = cva(
  "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        default: "h-10 w-10",
        sm: "h-8 w-8",
        lg: "h-16 w-16",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({ className, size, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(avatarVariants({ size }), className)} {...props} />
  )
})
Avatar.displayName = "Avatar"

function AvatarImage({ className, alt = "avatar", ...props }: React.ComponentProps<typeof Image>) {
  return <Image className={cn("aspect-square h-full w-full", className)} alt={alt} {...props} height={160} width={400}/>;
}

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarImage, AvatarFallback } 