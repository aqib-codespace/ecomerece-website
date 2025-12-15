import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-primary text-white hover:shadow-glow-blue hover:scale-[1.02] active:scale-[0.98] shadow-lg",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border-2 border-blue-primary bg-transparent text-blue-primary hover:bg-blue-lightest hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-gray-light text-gray-dark hover:bg-gray-medium hover:text-white hover:scale-[1.02] active:scale-[0.98]",
        ghost: "hover:bg-blue-lightest/50 hover:text-blue-primary",
        link: "text-blue-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-primary text-white hover:shadow-glow-blue hover:scale-[1.02] active:scale-[0.98] shadow-lg",
        glass: "glass-button",
        accent:
          "bg-gradient-accent text-white hover:shadow-glow-orange hover:scale-[1.02] active:scale-[0.98] shadow-lg",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
