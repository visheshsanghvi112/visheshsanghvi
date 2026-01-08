"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

interface EncryptedTextProps {
    text: string;
    encryptedClassName?: string;
    revealedClassName?: string;
    revealDelayMs?: number;
    className?: string;
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
    text,
    encryptedClassName = "text-neutral-500",
    revealedClassName = "dark:text-white text-black",
    revealDelayMs = 50,
    className,
}) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex >= text.length) {
            setDisplayText(text);
            return;
        }

        const interval = setInterval(() => {
            setDisplayText((prev) => {
                const revealed = text.substring(0, currentIndex + 1);
                const encrypted = Array.from({ length: text.length - currentIndex - 1 })
                    .map(() => characters[Math.floor(Math.random() * characters.length)])
                    .join("");
                return revealed + encrypted;
            });
        }, 50);

        const revealTimeout = setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
        }, revealDelayMs);

        return () => {
            clearInterval(interval);
            clearTimeout(revealTimeout);
        };
    }, [currentIndex, text, revealDelayMs]);

    return (
        <motion.span
            className={cn("font-mono", className)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {displayText.split("").map((char, index) => (
                <span
                    key={index}
                    className={cn(
                        "transition-colors duration-300",
                        index < currentIndex ? revealedClassName : encryptedClassName
                    )}
                >
                    {char}
                </span>
            ))}
        </motion.span>
    );
};
