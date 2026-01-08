"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
        video?: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [1, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-[250vh] md:h-[300vh] py-20 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-black"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="mt-20"
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20 mb-10 md:mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-10 md:mb-20 space-x-4 md:space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-50">
            <h1 className="text-3xl md:text-7xl font-bold dark:text-white text-white">
                Vishesh's <br /> Project Showcase
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 text-neutral-200">
                Explore a collection of cutting-edge applications and designs.
                Building digital experiences with modern technologies.
            </p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
        video?: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-48 w-[14rem] md:h-96 md:w-[30rem] relative flex-shrink-0 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden"
        >
            <a
                href={product.link}
                className="block group-hover/product:shadow-2xl h-full w-full"
            >
                {product.video ? (
                    <video
                        src={product.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover object-left-top absolute h-full w-full inset-0 opacity-100"
                    />
                ) : (
                    <img
                        src={product.thumbnail}
                        height="600"
                        width="600"
                        className="object-cover object-left-top absolute h-full w-full inset-0 opacity-100"
                        alt={product.title}
                    />
                )}
            </a>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
            <h2 className="absolute bottom-4 left-4 text-white font-bold text-xl px-2">
                {product.title}
            </h2>
        </motion.div>
    );
};
