import { useEffect, useRef, useState } from 'react';
import {
    Cpu, Code2, Database, Globe, Layers,
    ShieldCheck, Zap, Smartphone, Cloud
} from 'lucide-react';

const TECH_STACK = [
    { name: "React / Next.js", icon: Code2, desc: "Frontend Core" },
    { name: "Node.js / Bun", icon: Zap, desc: "Runtime Engine" },
    { name: "PostgreSQL", icon: Database, desc: "Data Persistence" },
    { name: "TypeScript", icon: ShieldCheck, desc: "Type Security" },
    { name: "AI / ML Models", icon: Cpu, desc: "Intelligent Logic" },
    { name: "AWS / Azure", icon: Cloud, desc: "Infrastructure" },
    { name: "React Native", icon: Smartphone, desc: "Mobile Layers" },
    { name: "Microservices", icon: Layers, desc: "Scalable Nodes" },
    { name: "Global Edge", icon: Globe, desc: "CDN Distribution" }
];

export const TechStack = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const fadeIn = (delay: string) =>
        `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${delay}`;

    return (
        <section ref={sectionRef} className="py-24 bg-black relative" style={{ fontFamily: 'Tomorrow, sans-serif' }}>
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
                    <div className={`inline-flex items-center gap-3 border-l border-white/30 pl-4 ${fadeIn("delay-0")}`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
                            Stack Engineering
                        </span>
                    </div>
                    <h2 className={`text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase ${fadeIn("delay-100")}`}>
                        THE TECH <span className="text-neutral-500">ECOSYSTEM.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 px-4 max-w-5xl mx-auto border border-white/5 bg-white/5">
                    {TECH_STACK.map((tech, idx) => (
                        <div
                            key={idx}
                            className={`group p-8 border border-white/5 bg-black hover:bg-neutral-900 transition-all duration-500 relative overflow-hidden ${fadeIn(`delay-[${idx * 100}ms]`)}`}
                        >
                            <div className="flex items-center gap-4 justify-center relative z-10 space-y-4">
                                <tech.icon className="w-8 h-8 text-neutral-500 group-hover:text-white transition-colors" />
                                <div>
                                    <h3 className="text-white font-bold text-sm tracking-widest uppercase">{tech.name}</h3>
                                    <p className="text-[10px] text-neutral-500 font-mono tracking-wider">{tech.desc}</p>
                                </div>
                            </div>

                            {/* Decorative Grid Pattern for hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none"
                                style={{
                                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                                    backgroundSize: '10px 10px'
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
