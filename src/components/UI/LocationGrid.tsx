import { useEffect, useRef, useState } from 'react';
import { MapPin, Globe, Radio } from 'lucide-react';

const NODES = [
    {
        city: "GURUGRAM",
        country: "INDIA",
        coord: "28.4595° N, 77.0266° E",
        type: "CENTRAL_CORE",
        status: "ONLINE",
        icon: MapPin
    },
    {
        city: "BANGALORE",
        country: "INDIA",
        coord: "12.9716° N, 77.5946° E",
        type: "R&D_LAB",
        status: "ONLINE",
        icon: Globe
    },
    {
        city: "PUNE",
        country: "INDIA",
        coord: "18.5204° N, 73.8567° E",
        type: "NEURAL_NODE",
        status: "ACTIVE",
        icon: Radio
    }
];

export const LocationGrid = () => {
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
                <div className="max-w-4xl mb-16 space-y-6">
                    <div className={`inline-flex items-center gap-3 border-l border-white/30 pl-4 ${fadeIn("delay-0")}`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
                            Global Distribution
                        </span>
                    </div>
                    <h2 className={`text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase ${fadeIn("delay-100")}`}>
                        ESTABLISHED <span className="text-neutral-500">NODES.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {NODES.map((node, idx) => (
                        <div key={idx} className={`group relative p-8 border border-white/10 bg-neutral-950/50 hover:border-white transition-all duration-500 overflow-hidden ${fadeIn(`delay-[${idx * 200}ms]`)}`}>
                            {/* Decorative scanline */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent translate-y-[-10px] group-hover:translate-y-[300px] transition-all duration-[3s] ease-linear" />

                            <div className="flex justify-between items-start mb-12">
                                <node.icon className="w-8 h-8 text-neutral-500 group-hover:text-white transition-colors" />
                                <div className="flex items-center gap-2">
                                    <div className={`w-1.5 h-1.5 rounded-full ${node.status === 'ONLINE' ? 'bg-green-500' : 'bg-blue-500'} animate-pulse`} />
                                    <span className="text-[10px] font-mono text-neutral-500 tracking-widest">{node.status}</span>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="text-[8px] font-mono text-neutral-600 tracking-[0.3em]">{node.type}</div>
                                <h3 className="text-2xl font-bold text-white tracking-widest uppercase">{node.city}</h3>
                                <p className="text-[10px] text-neutral-500 font-mono tracking-wider">{node.country}</p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5">
                                <p className="text-[9px] text-neutral-600 font-mono tracking-tighter transition-colors group-hover:text-neutral-400">
                                    {node.coord}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
