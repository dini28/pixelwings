import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../utils/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-bold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
    {
        variants: {
            variant: {
                default: "bg-white text-black hover:bg-neutral-200 border border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95",

                destructive: "bg-red-600 text-white hover:bg-red-700 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] active:scale-95",

                outline: "border-2 border-white bg-transparent text-white hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95",

                secondary: "bg-neutral-900 text-white border border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 active:scale-95",

                ghost: "text-white hover:bg-white/10 active:bg-white/20",

                link: "text-white underline-offset-4 hover:underline p-0 h-auto",

                glass: "bg-white/5 backdrop-blur-sm text-white border border-white/10 hover:bg-white/10 hover:border-white/20",

                shine: "bg-white text-black border border-white before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 px-4 text-[10px]",
                lg: "h-14 px-10 text-sm",
                xl: "h-16 px-12 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={disabled || loading}
                {...props}
            >
                {loading ? (
                    <>
                        <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        <span>Loading...</span>
                    </>
                ) : (
                    children
                )}
            </Comp>
        )
    }
)

Button.displayName = "Button"

export { Button, buttonVariants }