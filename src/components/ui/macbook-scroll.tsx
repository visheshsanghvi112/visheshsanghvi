import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const MacbookScroll = ({
    src,
    showGradient,
    title,
    badge,
    video,
}: {
    src?: string;
    showGradient?: boolean;
    title?: string | React.ReactNode;
    badge?: React.ReactNode;
    video?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window && window.innerWidth < 768) {
            setIsMobile(true);
        }
    }, []);

    const scaleX = useTransform(
        scrollYProgress,
        [0, 0.3],
        [1.2, isMobile ? 1 : 1.5]
    );
    const scaleY = useTransform(
        scrollYProgress,
        [0, 0.3],
        [0.6, isMobile ? 1 : 1.5]
    );
    const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
    const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
    const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div
            ref={ref}
            className="min-h-[100vh] md:min-h-[200vh] relative flex flex-col items-center py-10 md:py-80 justify-start flex-shrink-0 [perspective:800px] overflow-hidden"
        >
            <motion.h2
                style={{
                    translateY: textTransform,
                    opacity: textOpacity,
                }}
                className="dark:text-white text-neutral-800 text-2xl md:text-3xl font-bold mb-10 md:mb-20 text-center px-4"
            >
                {title || (
                    <span>
                        This Macbook is built with Tailwindcss. <br /> No kidding.
                    </span>
                )}
            </motion.h2>

            {/* Scaled Wrapper for Mobile - Centered */}
            <div className="transform scale-[0.5] sm:scale-75 md:scale-100 origin-top flex flex-col items-center justify-center">
                {/* Lid */}
                <Lid
                    src={src}
                    video={video}
                    scaleX={scaleX}
                    scaleY={scaleY}
                    rotate={rotate}
                    translate={translate}
                />
                {/* Base area */}
                <div className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10">
                    {/* above keyboard bar */}
                    <div className="h-10 w-full relative">
                        <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
                    </div>
                    <div className="flex relative">
                        <div className="mx-auto w-[10%] overflow-hidden h-full">
                            <SpeakerGrid />
                        </div>
                        <div className="mx-auto w-[80%] h-full">
                            <Keypad />
                        </div>
                        <div className="mx-auto w-[10%] overflow-hidden  h-full">
                            <SpeakerGrid />
                        </div>
                    </div>
                    <Trackpad />
                    <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
                    {showGradient && (
                        <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t dark:from-black from-white via-white dark:via-black to-transparent z-50"></div>
                    )}
                    {badge && <div className="absolute bottom-10 left-10">{badge}</div>}
                </div>
            </div>
        </div>
    );
};

export const Lid = ({
    scaleX,
    scaleY,
    rotate,
    translate,
    src,
    video,
}: {
    scaleX: any;
    scaleY: any;
    rotate: any;
    translate: any;
    src?: string;
    video?: string;
}) => {
    return (
        <div className="relative [perspective:800px]">
            <div
                style={{
                    transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
                    transformOrigin: "bottom",
                    transformStyle: "preserve-3d",
                }}
                className="h-[18rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
            >
                <div
                    style={{
                        boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
                    }}
                    className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
                >
                    <span className="text-white">
                        <AceternityLogo />
                    </span>
                </div>
            </div>
            <motion.div
                style={{
                    scaleX: scaleX,
                    scaleY: scaleY,
                    rotateX: rotate,
                    translateY: translate,
                    transformStyle: "preserve-3d",
                    transformOrigin: "top center",
                }}
                className="h-[18rem] w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
            >
                {/* Screen Content - Set to relative to respect parent padding (bezel) */}
                {video ? (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="relative w-full h-full rounded-lg bg-black object-cover"
                    />
                ) : (
                    <img
                        src={src}
                        alt="macbook"
                        className="relative w-full h-full rounded-lg bg-black"
                        style={{ objectFit: "fill" }}
                    />
                )}
            </motion.div>
        </div>
    );
};

export const Trackpad = () => {
    return (
        <div
            className="w-[40%] mx-auto h-32  rounded-xl my-1"
            style={{
                boxShadow: "0px 0px 1px 1px #00000020 inset",
            }}
        ></div>
    );
};

export const Keypad = () => {
    return (
        <div className="h-full rounded-md bg-[#050505] mx-1 p-1">
            {/* First Row */}
            <Row>
                <KBtn
                    className="w-10 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    esc
                </KBtn>
                <KBtn>
                    <IconBrightnessDown className="h-[6px] w-[6px]" />
                </KBtn>
                <KBtn>
                    <IconBrightnessUp className="h-[6px] w-[6px]" />
                </KBtn>
                <KBtn>
                    <IconTable className="h-[6px] w-[6px]" />
                </KBtn>
                <KBtn>
                    <IconSearch className="h-[6px] w-[6px]" />
                </KBtn>
                <KBtn>
                    <IconMicrophone className="h-[6px] w-[6px]" />
                </KBtn>
                <KBtn>
                    <IconMoon className="h-[6px] w-[6px]" />
                </KBtn>
                <KBtn>
                    <IconPlayerStop className="h-[6px] w-[6px]" />
                </KBtn>
                <KBtn>
                    <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
                </KBtn>
                <KBtn>
                    <IconPlayerSkipForward className="h-[6px] w-[6px]" />
                </KBtn>
                <KBtn>
                    <IconVolume3 className="h-[6px] w-[6px]" />
                </KBtn>
                <KBtn>
                    <IconVolume2 className="h-[6px] w-[6px]" />
                </KBtn>
                <KBtn>
                    <IconVolume className="h-[6px] w-[6px]" />
                </KBtn>
                <KBtn>
                    <div className="h-4 w-4 rounded-full  bg-gradient-to-b from-gray-200 from-20% via-gray-400 via-50% to-gray-600 to-95% p-px">
                        <div className="bg-gray-800 h-full w-full rounded-full" />
                    </div>
                </KBtn>
            </Row>

            {/* Second row */}
            <Row>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">~</p>
                    <p className="text-[5px]">`</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">!</p>
                    <p className="text-[5px]">1</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">@</p>
                    <p className="text-[5px]">2</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">#</p>
                    <p className="text-[5px]">3</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">$</p>
                    <p className="text-[5px]">4</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">%</p>
                    <p className="text-[5px]">5</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">^</p>
                    <p className="text-[5px]">6</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">&</p>
                    <p className="text-[5px]">7</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">*</p>
                    <p className="text-[5px]">8</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">(</p>
                    <p className="text-[5px]">9</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">)</p>
                    <p className="text-[5px]">0</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">_</p>
                    <p className="text-[5px]">-</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">+</p>
                    <p className="text-[5px]">=</p>
                </KBtn>
                <KBtn
                    className="w-10 items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end"
                >
                    delete
                </KBtn>
            </Row>

            {/* Third row */}
            <Row>
                <KBtn
                    className="w-10 items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    tab
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">Q</p>
                </KBtn>

                <KBtn>
                    <p className="text-[6px]">W</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">E</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">R</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">T</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">Y</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">U</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">I</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">O</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">P</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">{"{"}</p>
                    <p className="text-[5px]">[</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">{"}"}</p>
                    <p className="text-[5px]">]</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">|</p>
                    <p className="text-[5px]">\</p>
                </KBtn>
            </Row>

            {/* Fourth Row */}
            <Row>
                <KBtn
                    className="w-[2.8rem] items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    caps lock
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">A</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">S</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">D</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">F</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">G</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">H</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">J</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">K</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">L</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">:</p>
                    <p className="text-[5px]">;</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">&quot;</p>
                    <p className="text-[5px]">&apos;</p>
                </KBtn>
                <KBtn
                    className="w-[2.85rem] items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end"
                >
                    return
                </KBtn>
            </Row>

            {/* Fifth Row */}
            <Row>
                <KBtn
                    className="w-[3.65rem] items-end justify-start pl-[4px] pb-[2px]"
                    childrenClassName="items-start"
                >
                    shift
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">Z</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">X</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">C</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">V</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">B</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">N</p>
                </KBtn>
                <KBtn>
                    <p className="text-[6px]">M</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">&lt;</p>
                    <p className="text-[5px]">,</p>
                </KBtn>
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">&gt;</p>
                    <p className="text-[5px]">.</p>
                </KBtn>{" "}
                <KBtn>
                    <p className="text-[5px] w-full flex justify-end mr-[2px]">?</p>
                    <p className="text-[5px]">/</p>
                </KBtn>
                <KBtn
                    className="w-[3.65rem] items-end justify-end pr-[4px] pb-[2px]"
                    childrenClassName="items-end"
                >
                    shift
                </KBtn>
            </Row>

            {/* Sixth Row */}
            <Row>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-end w-full pr-1">
                        <span className="text-[4px]">fn</span>
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <IconWorld className="h-[6px] w-[6px]" />
                    </div>
                </KBtn>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-end w-full pr-1">
                        <IconChevronUp className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="text-[4px]">control</span>
                    </div>
                </KBtn>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-end w-full pr-1">
                        <OptionKey className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="text-[4px]">option</span>
                    </div>
                </KBtn>
                <KBtn
                    className="w-8"
                    childrenClassName="h-full justify-between py-[4px]"
                >
                    <div className="flex justify-end w-full pr-1">
                        <IconCommand className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="text-[4px]">command</span>
                    </div>
                </KBtn>
                <KBtn className="w-[8.2rem]"></KBtn>
                <KBtn
                    className="w-8"
                    childrenClassName="h-full justify-between py-[4px]"
                >
                    <div className="flex justify-start w-full pl-1">
                        <IconCommand className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="text-[4px]">command</span>
                    </div>
                </KBtn>
                <KBtn className="" childrenClassName="h-full justify-between py-[4px]">
                    <div className="flex justify-start w-full pl-1">
                        <OptionKey className="h-[6px] w-[6px]" />
                    </div>
                    <div className="flex justify-start w-full pl-1">
                        <span className="text-[4px]">option</span>
                    </div>
                </KBtn>
                <div className="w-[4.9rem] mt-[2px] h-6 p-[0.5px] rounded-[4px] flex flex-col justify-end items-center">
                    <KBtn className="w-6 h-3">
                        <IconCaretUpFilled className="h-[6px] w-[6px]" />
                    </KBtn>
                    <div className="flex">
                        <KBtn className="w-6 h-3">
                            <IconCaretLeftFilled className="h-[6px] w-[6px]" />
                        </KBtn>
                        <KBtn className="w-6 h-3">
                            <IconCaretDownFilled className="h-[6px] w-[6px]" />
                        </KBtn>
                        <KBtn className="w-6 h-3">
                            <IconCaretRightFilled className="h-[6px] w-[6px]" />
                        </KBtn>
                    </div>
                </div>
            </Row>
        </div>
    );
};
export const KBtn = ({
    className,
    children,
    childrenClassName,
    backlit = true,
}: {
    className?: string;
    children?: React.ReactNode;
    childrenClassName?: string;
    backlit?: boolean;
}) => {
    return (
        <div
            className={cn(
                "p-[0.5px] rounded-[4px]",
                backlit && "bg-white/[0.2] shadow-xl shadow-white"
            )}
        >
            <div
                className={cn(
                    "h-6 w-6 bg-[#0A090D] rounded-[3.5px] flex items-center justify-center",
                    className
                )}
                style={{
                    boxShadow:
                        "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset",
                }}
            >
                <div
                    className={cn(
                        "text-neutral-200 text-[5px] w-full flex justify-center items-center flex-col",
                        childrenClassName,
                        backlit && "text-white"
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export const Row = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex gap-[2px] mb-[2px] w-full flex-shrink-0">
            {children}
        </div>
    );
};

export const SpeakerGrid = () => {
    return (
        <div
            className="flex px-[0.5px] gap-[2px] mt-2 h-40"
            style={{
                backgroundImage:
                    "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
                backgroundSize: "3px 3px",
            }}
        ></div>
    );
};

export const OptionKey = ({ className }: { className?: string }) => {
    return (
        <svg
            fill="none"
            version="1.1"
            id="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className={className}
        >
            <rect
                stroke="currentColor"
                style={{ strokeWidth: 2 }}
                x="18"
                y="5"
                width="10"
                height="2"
            />
            <polygon
                stroke="currentColor"
                style={{ strokeWidth: 2 }}
                points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 "
            />
            <rect
                id="_Transparent_Rectangle_"
                className="st0"
                width="32"
                height="32"
                stroke="none"
            />
        </svg>
    );
};

export const AceternityLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            width="66"
            height="65"
            viewBox="0 0 66 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="currentColor"
                style={{ strokeWidth: 15, mixBlendMode: "darken" }}
                strokeMiterlimit="3.86874"
                strokeLinecap="round"
            />
        </svg>
    );
};

// Icons
const IconBrightnessDown = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 2.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5zM13.071 2.929a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 1 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0zM13.5 8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5zM11.657 11.657a.5.5 0 0 1 0 .707l-.707.707a.5.5 0 0 1-.707-.707l.707-.707a.5.5 0 0 1 .707 0zM8 14.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5zM5.05 12.364a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 .707-.707l.707.707a.5.5 0 0 1 0 .707zM3 8.5H2a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1zM5.05 4.343a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 1 1 .707-.707l.707.707a.5.5 0 0 1 0 .707zM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
);

const IconBrightnessUp = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
    </svg>
);

const IconTable = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm1 0v2h14V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1zm14 3H1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6z" />
    </svg>
);

const IconSearch = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
);

const IconMicrophone = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
    </svg>
);

const IconMoon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
    </svg>
);

const IconPlayerStop = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M5 3.5 h6 a1.5 1.5 0 0 1 1.5 1.5 v6 a1.5 1.5 0 0 1 -1.5 1.5 h-6 a1.5 1.5 0 0 1 -1.5 -1.5 v-6 a1.5 1.5 0 0 1 1.5 -1.5z" />
    </svg>
);

const IconPlayerTrackPrev = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M.5 3.5A.5.5 0 0 1 1 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
        <path d="M6.804 8 14.196 4.5a.67.67 0 0 1 .804.632v6.736a.67.67 0 0 1-.804.632L6.804 9z" />
    </svg>
);

const IconPlayerSkipForward = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
        <path d="M9.196 8 1.804 4.5a.67.67 0 0 0-.804.632v6.736a.67.67 0 0 0 .804.632L9.196 9v.5a.67.67 0 0 0 .804-.632V5.132A.67.67 0 0 0 9.196 8.5V8z" />
    </svg>
);

const IconVolume3 = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
        <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
    </svg>
);

const IconVolume2 = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
    </svg>
);

const IconVolume = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM8.708 11.182l.707.707A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182l-.707.707A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z" />
    </svg>
);

const IconWorld = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
    </svg>
);

const IconChevronUp = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
    </svg>
);

const IconCommand = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="M3.5 2A1.5 1.5 0 0 1 5 3.5V5H3.5a1.5 1.5 0 1 1 0-3zM6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5H6zm4 1v4H6V6h4zm1-1V3.5A1.5 1.5 0 1 1 12.5 5H11zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5V11zm-6 0v1.5A1.5 1.5 0 1 1 3.5 11H5z" />
    </svg>
);

const IconCaretUpFilled = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
    </svg>
);

const IconCaretLeftFilled = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
    </svg>
);

const IconCaretDownFilled = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="m7.247 11.14 4.796-5.481c.566-.647.106-1.659-.753-1.659H1.698a1 1 0 0 0-.753 1.659l4.796 5.48a1 1 0 0 0 1.506 0z" />
    </svg>
);

const IconCaretRightFilled = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16">
        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
    </svg>
);



