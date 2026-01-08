"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

export const AnimatedTestimonials = ({
    testimonials,
    autoplay = true,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index: number) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay, active]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };

    return (
        <div className="w-full max-w-7xl mx-auto antialiased font-sans px-4 md:px-8 py-10 md:py-20">
            {/* Mobile: Stack layout */}
            <div className="md:hidden flex flex-col gap-8">
                <div className="relative h-80 w-full max-w-sm mx-auto">
                    <AnimatePresence>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.src}
                                initial={{
                                    opacity: 0,
                                    scale: 0.9,
                                }}
                                animate={{
                                    opacity: isActive(index) ? 1 : 0,
                                    scale: isActive(index) ? 1 : 0.95,
                                    zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.9,
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={testimonial.src}
                                    alt={testimonial.name}
                                    className="h-full w-full rounded-3xl object-cover object-center shadow-xl"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="flex flex-col">
                    <motion.div
                        key={active}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="text-center"
                    >
                        <h3 className="text-xl font-bold dark:text-white text-foreground mb-1">
                            {testimonials[active].name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            {testimonials[active].designation}
                        </p>
                        <p className="text-base text-foreground/80 leading-relaxed px-4">
                            "{testimonials[active].quote}"
                        </p>
                    </motion.div>

                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={handlePrev}
                            className="h-10 w-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft className="h-5 w-5 text-foreground" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-10 w-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight className="h-5 w-5 text-foreground" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop: Side-by-side layout */}
            <div className="hidden md:grid grid-cols-2 gap-20">
                <div>
                    <div className="relative h-96 w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : randomRotateY(),
                                        zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <img
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                        className="h-full w-full rounded-3xl object-cover object-center shadow-2xl"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="flex justify-between flex-col py-4">
                    <motion.div
                        key={active}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <h3 className="text-3xl font-bold dark:text-white text-foreground mb-2">
                            {testimonials[active].name}
                        </h3>
                        <p className="text-base text-muted-foreground mb-6">
                            {testimonials[active].designation}
                        </p>
                        <motion.p className="text-lg text-foreground/80 leading-relaxed">
                            {testimonials[active].quote.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{
                                        filter: "blur(10px)",
                                        opacity: 0,
                                        y: 5,
                                    }}
                                    animate={{
                                        filter: "blur(0px)",
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.02 * index,
                                    }}
                                    className="inline-block"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>

                    <div className="flex gap-4 pt-12">
                        <button
                            onClick={handlePrev}
                            className="h-12 w-12 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-all hover:scale-110"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft className="h-5 w-5 text-foreground" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-12 w-12 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-all hover:scale-110"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight className="h-5 w-5 text-foreground" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
