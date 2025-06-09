import * as React from "react"
import { cn } from "@/lib/utils"

export type ButtonVariant = 'default' | 'outline' | 'ghost'
export type ButtonSize = 'default' | 'sm' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-primary text-white hover:bg-primary-dark': variant === 'default',
            'border border-primary text-primary hover:bg-primary/10': variant === 'outline',
            'hover:bg-primary/10': variant === 'ghost',
            'h-10 px-4 py-2': size === 'default',
            'h-9 px-3': size === 'sm',
            'h-11 px-8': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button } 