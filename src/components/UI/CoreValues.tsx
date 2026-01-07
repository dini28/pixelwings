import { useEffect, useRef, useState } from 'react';
import { Target, Rocket, Shield } from 'lucide-react';

const VALUES = [
    {
        icon: Rocket,
        title: "Future Protocol",
        desc: "Our mission is to bridge the gap between abstract AI research and production-grade software applications.",
        detail: "01 // MISSION"
    },
    {
        icon: Target,
        title: "Precision Logic",
        desc: "We engineer systems that don't just work, but scale effortlessly while maintaining absolute data integrity.",
        detail: "02 // VISION"
    },
    {
        icon: Shield,
        title: "Security Core",
        desc: "Building trust through transparent AI audits and enterprise-level encryption protocols in every byte of code.",
        detail: "03 // PRINCIPLES"
    }
];

export const CoreValues = () => {
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
        `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${delay}`;

    return (
        <section ref={sectionRef} className="py-24 bg-black relative" style={{ fontFamily: 'Tomorrow, sans-serif' }}>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {VALUES.map((value, idx) => (
                        <div key={idx} className={`space-y-6 ${fadeIn(`delay-[${idx * 200}ms]`)}`}>
                            <div className="text-[10px] font-mono tracking-[0.3em] text-neutral-600 border-b border-white/10 pb-4">
                                {value.detail}
                            </div>
                            <div className="w-12 h-12 border border-white/20 flex items-center justify-center bg-white/5">
                                <value.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-widest uppercase">
                                {value.title}
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed font-light">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
