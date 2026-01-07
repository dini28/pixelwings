import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES_PREVIEW as services } from '../../constants/data';

interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    icon: any;
    tags: string[];
}

const ServicesItem = () => {
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
        <section ref={sectionRef} className="py-24 bg-black overflow-hidden relative" style={{ fontFamily: 'Tomorrow, sans-serif' }}>
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-12">
                    {services.map((service: Service, index: number) => {
                        const IconComponent = service.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={service.id}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                            >
                                {/* Content Side */}
                                <div className={`flex-1 space-y-8 ${fadeIn('delay-300')}`}>
                                    <div className="inline-flex items-center gap-4">
                                        <div className="w-12 h-12 border border-white/20 flex items-center justify-center bg-white/5">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="h-[1px] w-12 bg-white/30" />
                                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold">
                                            Module: {service.id.toUpperCase()}
                                        </span>
                                    </div>

                                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[0.95] uppercase">
                                        {service.title.split(' ')[0]}
                                        <br />
                                        <span className="text-neutral-500">{service.title.split(' ').slice(1).join(' ')}</span>
                                    </h2>

                                    <p className="text-neutral-400 text-lg leading-relaxed max-w-xl font-light">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3">
                                        {service.tags.map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 border border-white/10 bg-neutral-900/50 text-[10px] uppercase tracking-wider text-neutral-400 font-mono"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="inline-flex items-center gap-4 group text-white">
                                        <span className="text-sm font-bold uppercase tracking-widest border-b border-white/30 group-hover:border-white transition-all pb-1">
                                            Initialize Protocol
                                        </span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                    </button>
                                </div>

                                {/* Image Side */}
                                <div className={`flex-1 relative group w-full ${fadeIn('delay-500')}`}>
                                    <div className="relative border border-white/10 bg-neutral-950 p-4 overflow-hidden">
                                        {/* Scanning Line Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent h-1/2 w-full animate-[scan_3s_ease-in-out_infinite] pointer-events-none z-20" />

                                        {/* Decorative Corners */}
                                        <span className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/40 z-30" />
                                        <span className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/40 z-30" />
                                        <span className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/40 z-30" />
                                        <span className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/40 z-30" />

                                        <div className="aspect-[4/3] relative overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.imageAlt}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                                            />
                                            {/* Data Overlay Effect */}
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                                        </div>
                                    </div>

                                    {/* Tech Metadata Box */}
                                    <div className={`absolute ${isEven ? '-right-6' : '-left-6'} -bottom-6 bg-white text-black p-6 hidden md:block z-40`}>
                                        <div className="text-[10px] font-mono tracking-tighter uppercase mb-2 opacity-60">Status: Optimized</div>
                                        <div className="text-xl font-bold tracking-tighter uppercase whitespace-nowrap">Production Ready</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesItem;
