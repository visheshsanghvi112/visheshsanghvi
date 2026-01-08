import React from "react";
import { cn } from "@/lib/utils";

interface BorderMagicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    borderClassName?: string;
    duration?: string;
    as?: React.ElementType;
    href?: string;
}

export const BorderMagicButton = React.forwardRef<HTMLButtonElement, BorderMagicButtonProps>(
    (
        {
            children,
            className,
            containerClassName,
            borderClassName,
            duration = "2s",
            as: Component = "button",
            href,
            ...props
        },
        ref
    ) => {
        const Comp = href ? "a" : Component;

        return (
            <Comp
                ref={ref as any}
                href={href}
                className={cn(
                    "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
                    containerClassName
                )}
                {...(href ? {} : props)}
            >
                <span
                    className={cn(
                        "absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
                        borderClassName
                    )}
                    style={{
                        animation: `spin ${duration} linear infinite`,
                    }}
                />
                <span
                    className={cn(
                        "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 py-1 text-sm font-medium text-foreground backdrop-blur-3xl",
                        className
                    )}
                >
                    {children}
                </span>
            </Comp>
        );
    }
);

BorderMagicButton.displayName = "BorderMagicButton";
