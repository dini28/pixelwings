import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const TEAM = [
    {
        name: "DR. ARJUN VARMA",
        role: "AI ARCHITECT",
        tag: "LOGIC_CORE",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "SARAH CHEN",
        role: "SYSTEMS ENGINEER",
        tag: "INFRA_STRUCTURE",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
    },
    {
        name: "MARCUS THORNE",
        role: "DATA SCIENTIST",
        tag: "NEURAL_SYNC",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    }
];

export const TeamCore = () => {
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

    const fadeIn = (delay: string) =>
        `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${delay}`;

    return (
        <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden" style={{ fontFamily: 'Tomorrow, sans-serif' }}>
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mb-20 space-y-6">
                    <div className={`inline-flex items-center gap-3 border-l border-white/30 pl-4 ${fadeIn("delay-0")}`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
                            Core Intelligence
                        </span>
                    </div>
                    <h2 className={`text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase ${fadeIn("delay-100")}`}>
                        THE HUMAN <span className="text-neutral-500">MODELS.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TEAM.map((member, idx) => (
                        <div key={idx} className={`group relative ${fadeIn(`delay-[${idx * 200}ms]`)}`}>
                            {/* Member Card */}
                            <div className="relative border border-white/10 bg-neutral-950 p-6 overflow-hidden transition-all duration-500 hover:border-white/30">
                                {/* Decorative elements */}
                                <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/40" />
                                <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="text-[8px] font-mono tracking-[0.3em] text-neutral-600 mb-1">
                                            {member.tag}
                                        </div>
                                        <h3 className="text-xl font-bold text-white tracking-widest">{member.name}</h3>
                                        <p className="text-xs text-neutral-400 tracking-[0.2em] font-mono">{member.role}</p>
                                    </div>

                                    <div className="flex gap-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                        <Twitter size={14} className="text-neutral-500 hover:text-white cursor-pointer" />
                                        <Linkedin size={14} className="text-neutral-500 hover:text-white cursor-pointer" />
                                        <Github size={14} className="text-neutral-500 hover:text-white cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
