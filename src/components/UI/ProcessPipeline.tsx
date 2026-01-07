import { useEffect, useRef, useState } from 'react';

const STEPS = [
    { title: "Discovery", desc: "Technical objective audit and node mapping." },
    { title: "Architecture", desc: "High-performance schema and interface design." },
    { title: "Engineering", desc: "Production-grade development and neural sync." },
    { title: "Verification", desc: "Rigorous QA testing and protocol hardening." },
    { title: "Deployment", desc: "Global cloud broadcast and node optimization." }
];

export const ProcessPipeline = () => {
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
        <section ref={sectionRef} className="py-24 bg-black relative" style={{ fontFamily: 'Tomorrow, sans-serif' }}>
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
                    <div className={`inline-flex items-center gap-3 border-l border-white/30 pl-4 ${fadeIn("delay-0")}`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
                            Engineering Protocol
                        </span>
                    </div>
                    <h2 className={`text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase ${fadeIn("delay-100")}`}>
                        THE DEVELOPMENT <span className="text-neutral-500">PIPELINE.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 border-t border-white/10 pt-12 relative">
                    {/* Continuous pipeline line for desktop */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent hidden md:block" />

                    {STEPS.map((step, idx) => (
                        <div key={idx} className={`relative group p-6 flex flex-col items-center text-center ${fadeIn(`delay-[${idx * 200}ms]`)}`}>
                            {/* Connector Node */}
                            <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-black border border-white/40 rounded-full z-10 hidden md:block group-hover:bg-white group-hover:scale-125 transition-all duration-300" />

                            <div className="text-[10px] font-mono text-neutral-600 mb-8 border border-white/5 px-3 py-1 bg-white/5">
                                STEP_0{idx + 1}
                            </div>

                            <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">{step.title}</h3>
                            <p className="text-[10px] text-neutral-500 font-mono tracking-wider leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
