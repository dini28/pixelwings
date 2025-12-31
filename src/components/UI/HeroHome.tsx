/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, useState } from 'react';
import { Button } from '../common/Button';
import { cn } from '../../utils/utils';
import { Cpu, Database, Globe, Terminal, Zap } from 'lucide-react';

interface TechNodeProps {
    icon: any;
    title: string;
    subtitle: string;
    position: 'left' | 'center' | 'right';
    isActive?: boolean;
    isVisible: boolean;
    delay: string;
}

const HeroHome = () => {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLElement>(null);
    const [terminalLine, setTerminalLine] = useState(0);

    const terminalLines = [
        "> initializing MERN stack...",
        "> connecting to mongoose...",
        "> loading tensorflow models...",
        "> optimizing neural nets...",
        "> system ready. awaiting input."
    ];

    useEffect(() => {
        const current = heroRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (current) observer.observe(current);

        const interval = setInterval(() => {
            setTerminalLine((prev) => (prev + 1) % terminalLines.length);
        }, 2500);

        return () => {
            observer.disconnect();
            clearInterval(interval);
        };
    }, []);

    const fadeIn = (delay: string) => cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        delay
    );

    return (
        <section
            ref={heroRef}
            className="relative min-h-[90vh] flex items-center bg-black overflow-hidden pt-20"
            style={{ fontFamily: 'Inter, sans-serif' }}
        >
            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 h-full">

                <div className="lg:col-span-7 space-y-8">
                    <div className={fadeIn("delay-100")}>
                        <div className="inline-flex items-center gap-3 border-l border-white/30 pl-4">
                            <div className="w-2 h-2 bg-white animate-pulse rounded-full"></div>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
                                PixelWings / System Online
                            </span>
                        </div>
                    </div>

                    <h1 className={cn(
                        "text-5xl md:text-7xl xl:text-8xl font-bold text-white tracking-tighter leading-[0.9]",
                        fadeIn("delay-300")
                    )}>
                        ENGINEERING <br />
                        <span className="text-neutral-500">INTELLIGENT</span> <br />
                        PLATFORMS.
                    </h1>

                    <p className={cn(
                        "text-lg text-neutral-400 max-w-md leading-relaxed font-light",
                        fadeIn("delay-500")
                    )}>
                        We fuse scalable MERN architectures with cutting-edge AI models to build digital products that think, adapt, and outperform.
                    </p>

                    <div className={cn("flex flex-wrap gap-4 pt-6", fadeIn("delay-700"))}>
                        <Button asChild size="lg" variant="default" className="rounded-none px-8">
                            <a href="/contact">
                                Initiate Project
                                <Zap size={16} className="ml-2" />
                            </a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-none px-8">
                            <a href="/services">Explore Stack</a>
                        </Button>
                    </div>
                </div>

                <div className={cn(
                    "relative hidden lg:flex lg:col-span-5 h-[500px] items-center justify-center",
                    fadeIn("delay-500")
                )}>
                    <div className="relative w-full h-full border border-white/10 bg-neutral-950/80 backdrop-blur-xl p-8 overflow-hidden">

                        <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/40" />
                        <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40" />
                        <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40" />
                        <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/40" />

                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20 animate-[scan_4s_ease-in-out_infinite]" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-neutral-500 font-mono mb-8">
                                <span>Deployment: v2.5.0</span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    Live Nodes: 3
                                </span>
                            </div>

                            <div className="flex-1 relative flex items-center">
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M 80 100 C 150 100, 150 200, 220 200"
                                        stroke="rgba(255,255,255,0.2)"
                                        strokeWidth="1"
                                        fill="none"
                                        strokeDasharray="4 4"
                                        className="animate-[dash_20s_linear_infinite]"
                                    />
                                    <path
                                        d="M 280 200 C 350 200, 350 100, 420 100"
                                        stroke="rgba(255,255,255,0.2)"
                                        strokeWidth="1"
                                        fill="none"
                                        strokeDasharray="4 4"
                                        className="animate-[dash_20s_linear_infinite_reverse]"
                                    />
                                </svg>

                                <div className="w-full grid grid-cols-3 gap-4 z-10">
                                    <TechNode
                                        icon={Globe}
                                        title="Interface"
                                        subtitle="React / Next.js"
                                        position="left"
                                        isVisible={isVisible}
                                        delay="delay-700"
                                    />

                                    <div className="transform translate-y-16">
                                        <TechNode
                                            icon={Database}
                                            title="Infrastructure"
                                            subtitle="Node / Mongo"
                                            position="center"
                                            isActive={true}
                                            isVisible={isVisible}
                                            delay="delay-800"
                                        />
                                    </div>

                                    <TechNode
                                        icon={Cpu}
                                        title="Intelligence"
                                        subtitle="Python / ML"
                                        position="right"
                                        isVisible={isVisible}
                                        delay="delay-900"
                                    />
                                </div>
                            </div>
                            <div className="mt-8 p-4 bg-black/60 border border-white/10 font-mono text-xs text-neutral-400 h-24 overflow-hidden relative">
                                <div className="flex items-center gap-2 text-white mb-2 border-b border-white/10 pb-2">
                                    <Terminal size={12} />
                                    <span>Output Log</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    {terminalLines.map((line, index) => (
                                        <p
                                            key={index}
                                            className={cn(
                                                "transition-opacity duration-300",
                                                terminalLine === index ? "opacity-100 text-white" : "opacity-30"
                                            )}
                                        >
                                            {line}
                                        </p>
                                    ))}
                                </div>
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroHome;

const TechNode = ({
    icon: Icon,
    title,
    subtitle,
    position,
    isActive = false,
    isVisible,
    delay
}: TechNodeProps) => {
    const positionClasses = {
        left: "items-start text-left",
        center: "items-center text-center",
        right: "items-end text-right"
    };

    const fadeInClass = cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        delay
    );

    return (
        <div className={cn("flex flex-col gap-3 group", positionClasses[position], fadeInClass)}>
            <div className={cn(
                "relative p-4 border transition-all duration-500",
                isActive
                    ? "border-white bg-white/10"
                    : "border-white/20 bg-neutral-900/50 group-hover:border-white/50"
            )}>
                {isActive && (
                    <span className="absolute -inset-1 bg-white/20 blur-lg rounded-full z-0 animate-pulse"></span>
                )}

                <Icon className={cn(
                    "relative z-10 w-8 h-8 transition-colors",
                    isActive ? "text-white" : "text-neutral-400 group-hover:text-white"
                )} />

                <div className={cn(
                    "absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}>
                    <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:75ms]"></span>
                    <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:150ms]"></span>
                    <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:300ms]"></span>
                </div>
            </div>

            <div>
                <h3 className="text-white font-bold uppercase text-xs tracking-widest">{title}</h3>
                <p className="text-neutral-500 text-[10px] uppercase tracking-wider font-mono mt-1">{subtitle}</p>
            </div>

        </div>
    );
};