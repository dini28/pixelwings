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

const terminalLines = [
    "> initializing MERN stack...",
    "> connecting to mongoose...",
    "> loading tensorflow models...",
    "> optimizing neural nets...",
    "> system ready. awaiting input."
];

const HeroHome = () => {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLElement>(null);
    const [terminalLine, setTerminalLine] = useState(0);

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
        >
            <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-15 relative z-10 h-full">

                {/* left section */}
                <div className="space-y-6 md:space-y-8 w-full lg:w-auto">
                    <div className={fadeIn("delay-100")}>
                        <div className="inline-flex items-center gap-3 border-l border-white/30 pl-4">
                            <div className="w-2 h-2 bg-white animate-pulse rounded-full"></div>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
                                PixelWings | System Online
                            </span>
                        </div>
                    </div>

                    <h1 className={cn(
                        "text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold text-white tracking-tighter leading-tight md:leading-[0.9]",
                        fadeIn("delay-300")
                    )}>
                        Designing Unique, <br />
                        <span className="text-neutral-500">Smart Platforms.</span>
                    </h1>

                    <p className={cn(
                        "text-base md:text-lg text-neutral-400 max-w-md leading-relaxed font-light",
                        fadeIn("delay-500")
                    )}>
                        We fuse scalable MERN architectures with cutting-edge AI models to build digital products that think, adapt, and outperform.
                    </p>

                    <div className={cn("flex flex-wrap gap-3 md:gap-4 pt-4 md:pt-6", fadeIn("delay-700"))}>
                        <Button asChild size="lg" variant="default" className="rounded-none px-6 md:px-8 text-sm md:text-base">
                            <a href="/contact">
                                Initiate Project
                                <Zap size={16} className="ml-2" />
                            </a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-none px-6 md:px-8 text-sm md:text-base">
                            <a href="/services">Explore Stack</a>
                        </Button>
                    </div>
                </div>

                {/* right section */}
                <div className={cn(
                    "relative flex w-full lg:w-auto min-h-[500px] md:min-h-[550px] lg:h-[500px] items-center justify-center mt-8 lg:mt-0",
                    fadeIn("delay-500")
                )}>
                    <div className="relative w-full h-full border border-white/10 bg-neutral-950/80 backdrop-blur-xl p-4 md:p-6 lg:p-8 overflow-hidden">

                        <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/60" />
                        <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/60" />
                        <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/60" />
                        <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/60" />

                        <div className="relative z-10 h-full flex flex-col justify-between py-2">

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-500 font-mono pb-4 border-b border-neutral-800">
                                <span className="whitespace-nowrap">Deployment: v2.5.0</span>
                                <span className="flex items-center gap-2 whitespace-nowrap">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    Live Nodes: 3
                                </span>
                            </div>

                            <div className="flex-1 relative flex items-center py-6 md:py-8">
                                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 z-10">
                                    <TechNode
                                        icon={Globe}
                                        title="UI"
                                        subtitle="React/Next.js"
                                        position="left"
                                        isVisible={isVisible}
                                        delay="delay-700"
                                    />

                                    <TechNode
                                        icon={Database}
                                        title="Infrastructure"
                                        subtitle="Node/Mongo"
                                        position="center"
                                        isActive={true}
                                        isVisible={isVisible}
                                        delay="delay-800"
                                    />

                                    <TechNode
                                        icon={Cpu}
                                        title="AI"
                                        subtitle="Python"
                                        position="right"
                                        isVisible={isVisible}
                                        delay="delay-900"
                                    />
                                </div>
                            </div>

                            <div className="p-3 md:p-4 bg-black/60 border border-white/10 font-mono text-[10px] md:text-xs text-neutral-400 relative">
                                <div className="flex items-center gap-2 text-white mb-2 border-b border-white/10 pb-2">
                                    <Terminal size={12} />
                                    <span>Output Log</span>
                                </div>
                                <div className="flex flex-col max-h-20 md:max-h-24">
                                    {terminalLines.map((line, index) => (
                                        <p
                                            key={index}
                                            className={cn(
                                                "transition-opacity duration-300 truncate",
                                                terminalLine === index ? "opacity-100 text-white" : "opacity-30"
                                            )}
                                        >
                                            {line}
                                        </p>
                                    ))}
                                </div>
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
        left: "items-center md:items-start text-center md:text-left",
        center: "items-center text-center",
        right: "items-center md:items-end text-center md:text-right"
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
                    "relative z-10 w-6 h-6 md:w-8 md:h-8 transition-colors",
                    isActive ? "text-white" : "text-neutral-400 group-hover:text-white"
                )} />
            </div>

            <div>
                <h3 className="text-white font-bold uppercase text-xs tracking-widest">{title}</h3>
                <p className="text-neutral-500 text-[10px] uppercase tracking-wider font-mono mt-1">{subtitle}</p>
            </div>
        </div>
    );
};