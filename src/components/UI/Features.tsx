import {
    GitBranch, Figma, Hash, Search, Bell, Settings,
    Globe, Database, Shield, Code, Layers, Monitor
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { useState, useEffect, useRef } from "react";
import { cn } from "../../utils/utils";

interface CollaborationIcon {
    icon: any;
}

const collaborationIcons: CollaborationIcon[] = [
    { icon: GitBranch }, { icon: Globe }, { icon: Database },
    { icon: Shield }, { icon: Code }, { icon: Layers },
    { icon: Monitor }, { icon: Search }, { icon: Settings },
    { icon: Hash }, { icon: Bell }, { icon: Figma }
];

const scalabilityData = [40, 70, 45, 90, 65, 80, 50, 95];

const deploymentMetrics = [
    { label: "BUILD_STATUS", value: "SUCCESS" },
    { label: "AI_MODEL_SYNC", value: "ACTIVE" },
    { label: "LATENCY_EST", value: "14MS" }
];

const Features = () => {
    const [isVisible, setIsVisible] = useState(false);

    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const fadeIn = (delay: string) => cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        delay
    );

    return (
        <section
            ref={sectionRef}
            className="bg-black text-white py-24 overflow-hidden border-t border-white/5"
        >
            <div className="container mx-auto px-6 max-w-7xl">

                <SectionHeader
                    subtitle="Core Capabilities"
                    title={<>ENGINEERING <br /> <span className="text-neutral-600">BEYOND CODE.</span></>}
                    description="Our specialized 3-member units deploy production-grade systems that prioritize security, speed, and architectural integrity."
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10 mb-12">

                    <div className={cn(
                        "p-10 border-white/10 border-b lg:border-b-0 lg:border-r hover:bg-neutral-900/30 transition-colors group",
                        fadeIn("delay-400")
                    )}>
                        <span className="text-[10px] font-mono text-neutral-600 mb-6 block">
                            01 // ELASTICITY
                        </span>
                        <h3 className="text-xl font-bold uppercase mb-4">
                            Scalable Architecture
                        </h3>
                        <p className="text-neutral-500 text-sm font-light mb-10 leading-relaxed group-hover:text-neutral-400 transition-colors">
                            Automated scaling protocols built on Next.js 15 to handle traffic spikes without latency.
                        </p>

                        <div className="h-24 flex items-end gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                            {scalabilityData.map((height, i) => (
                                <div
                                    key={i}
                                    className="flex-1 bg-white transition-all"
                                    style={{
                                        height: isVisible ? `${height}%` : '0%',
                                        transitionDuration: '1s',
                                        transitionDelay: `${i * 100}ms`,
                                        transitionTimingFunction: 'ease-out'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={cn(
                        "p-10 border-white/10 border-b lg:border-b-0 lg:border-r hover:bg-neutral-900/30 transition-colors group",
                        fadeIn("delay-500")
                    )}>
                        <span className="text-[10px] font-mono text-neutral-600 mb-6 block">
                            02 // VELOCITY
                        </span>
                        <h3 className="text-xl font-bold uppercase mb-4">
                            Rapid Deployment
                        </h3>
                        <p className="text-neutral-500 text-sm font-light mb-10 leading-relaxed group-hover:text-neutral-400 transition-colors">
                            Advanced CI/CD pipelines ensuring most technical updates are deployed in under 24 hours.
                        </p>

                        <div className="space-y-2 font-mono text-[10px] text-neutral-600 group-hover:text-neutral-400 transition-colors">
                            {deploymentMetrics.map((metric, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between border-b border-white/5 pb-1"
                                >
                                    <span>{metric.label}</span>
                                    <span className="text-white">{metric.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={cn(
                        "p-10 border-white/10 hover:bg-neutral-900/30 transition-colors group",
                        fadeIn("delay-600")
                    )}>
                        <span className="text-[10px] font-mono text-neutral-600 mb-6 block">
                            03 // SYNERGY
                        </span>
                        <h3 className="text-xl font-bold uppercase mb-4">
                            Direct Communication
                        </h3>
                        <p className="text-neutral-500 text-sm font-light mb-10 leading-relaxed group-hover:text-neutral-400 transition-colors">
                            Direct access to our 3-member engineering team via dedicated Slack channels. No managers.
                        </p>

                        <div className="space-y-3">
                            <div className="w-2/3 h-8 bg-neutral-900 border border-white/10 rounded-none flex items-center px-3 text-[10px] text-neutral-500 italic">
                                Pushing AI update to prod...
                            </div>
                            <div className="w-2/3 h-8 bg-white border border-white ml-auto flex items-center px-3 text-[10px] text-black font-bold">
                                Update live. Verify 01.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cn(
                    "border border-white/10 p-10 lg:p-14 hover:bg-neutral-900/20 transition-colors group",
                    fadeIn("delay-700")
                )}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <div className="space-y-6">
                            <span className="text-[10px] font-mono text-neutral-600 block tracking-[0.3em]">
                                04 // ECOSYSTEM
                            </span>
                            <h3 className="text-3xl font-bold tracking-tighter uppercase">
                                Integrated <br /> Technical Stack.
                            </h3>
                            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm font-light">
                                We don't work in silos. Our team integrates seamlessly with your existing tools, from Figma prototypes to GitHub repositories and cloud infrastructure.
                            </p>
                        </div>

                        <div className="space-y-4 relative">
                            {[1, -1].map((direction, rowIdx) => (
                                <div key={rowIdx} className="overflow-hidden relative h-16 flex items-center">
                                    <div className={cn(
                                        "flex gap-4 absolute whitespace-nowrap",
                                        direction === 1 ? "animate-scroll-fast" : "animate-scroll-fast-reverse"
                                    )}>
                                        {collaborationIcons.map((item, i) => (
                                            <div
                                                key={i}
                                                className="w-14 h-14 border border-white/10 bg-neutral-950 flex items-center justify-center grayscale opacity-30 hover:opacity-100 hover:border-white transition-all cursor-crosshair"
                                            >
                                                <item.icon size={20} strokeWidth={1} />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes scroll-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-fast-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-fast { 
          animation: scroll-fast 20s linear infinite; 
        }
        .animate-scroll-fast-reverse { 
          animation: scroll-fast-reverse 20s linear infinite; 
        }
      `}</style>
        </section>
    );
};

export default Features;