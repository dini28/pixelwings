import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Code2, Database, Zap } from 'lucide-react';
import about from '../../assets/about.png'

export const Story = () => {
    const [isVisible, setIsVisible] = useState(false);
    const storyRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.2,
                rootMargin: '0px'
            }
        );

        if (storyRef.current) {
            observer.observe(storyRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const fadeIn = (delay: string) =>
        `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${delay}`;

    return (
        <section
            ref={storyRef}
            className="relative py-20 lg:py-32 bg-black overflow-hidden"
            style={{ fontFamily: 'Tomorrow, sans-serif' }}
        >
            {/* Grid Background */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className={fadeIn("delay-100")}>
                        <div className="inline-flex items-center gap-3 border-l border-white/30 pl-4 mb-16">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
                                Our Origin
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Content Section */}
                        <div className="space-y-8 order-2 lg:order-1">
                            <div className={fadeIn("delay-200")}>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-[0.95] mb-6">
                                    ENGINEERED FOR
                                    <br />
                                    <span className="text-neutral-500">PERFORMANCE.</span>
                                </h2>
                            </div>

                            <div className={`space-y-6 ${fadeIn("delay-400")}`}>
                                <div className="border-l-2 border-white/20 pl-6">
                                    <p className="text-neutral-300 text-base leading-relaxed">
                                        Established in 2019, PixelWings was founded on the principle that modern enterprises require more than standard web solutions—they need intelligent, scalable digital infrastructure.
                                    </p>
                                </div>

                                <div className="border-l-2 border-white/20 pl-6">
                                    <p className="text-neutral-300 text-base leading-relaxed">
                                        From initial concept to today's full-stack capability, we've evolved alongside emerging technologies, mastering the MERN ecosystem and integrating machine learning pipelines that transform raw data into strategic advantage.
                                    </p>
                                </div>

                                <div className="border-l-2 border-white/20 pl-6">
                                    <p className="text-neutral-300 text-base leading-relaxed">
                                        Our portfolio spans <span className="text-white font-semibold">300+ enterprise deployments</span>, each architected to handle scale, optimize performance, and deliver measurable ROI.
                                    </p>
                                </div>
                            </div>

                            {/* Technical Highlights */}
                            <div className={`grid grid-cols-3 gap-4 pt-6 ${fadeIn("delay-600")}`}>
                                <TechBadge icon={Code2} label="Full Stack" />
                                <TechBadge icon={Database} label="Cloud Native" />
                                <TechBadge icon={Zap} label="AI Powered" />
                            </div>

                            {/* CTA */}
                            <div className={fadeIn("delay-800")}>
                                <a
                                    href="/services"
                                    className="inline-flex items-center gap-3 text-white hover:text-neutral-300 transition-colors group"
                                >
                                    <span className="text-sm uppercase tracking-wider font-mono">Explore Our Stack</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className={`relative order-1 lg:order-2 ${fadeIn("delay-300")}`}>
                            <div className="relative border border-white/10 bg-neutral-950/50 backdrop-blur-xl overflow-hidden group">
                                {/* Corner Accents */}
                                <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/40 z-20" />
                                <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/40 z-20" />
                                <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/40 z-20" />
                                <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/40 z-20" />

                                {/* Scan Line Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20 animate-[scan_4s_ease-in-out_infinite] z-10" />

                                {/* Image */}
                                <div className="relative aspect-square p-8">
                                    <img
                                        src={about}
                                        alt="PixelWings Engineering"
                                        className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Tech Grid Overlay */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div
                                        className="absolute inset-0 opacity-[0.03]"
                                        style={{
                                            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                                            backgroundSize: '20px 20px'
                                        }}
                                    />
                                </div>

                                {/* Status Indicators */}
                                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-20">
                                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-400 font-mono">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        <span>System Active</span>
                                    </div>
                                    <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono">
                                        v2.5.0
                                    </div>
                                </div>
                            </div>

                            {/* Data Points */}
                            <div className={`absolute -right-4 top-1/4 ${fadeIn("delay-1000")}`}>
                                <div className="border border-white/20 bg-black/80 backdrop-blur-xl px-4 py-2">
                                    <div className="text-xs uppercase tracking-wider text-neutral-500 font-mono">Deployments</div>
                                    <div className="text-2xl font-bold text-white">300+</div>
                                </div>
                            </div>

                            <div className={`absolute -left-4 bottom-1/4 ${fadeIn("delay-1100")}`}>
                                <div className="border border-white/20 bg-black/80 backdrop-blur-xl px-4 py-2">
                                    <div className="text-xs uppercase tracking-wider text-neutral-500 font-mono">Since</div>
                                    <div className="text-2xl font-bold text-white">2019</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface TechBadgeProps {
    icon: React.ElementType;
    label: string;
}

const TechBadge = ({ icon: Icon, label }: TechBadgeProps) => {
    return (
        <div className="border border-white/20 bg-neutral-950/50 p-4 hover:border-white/40 transition-all group">
            <Icon className="w-5 h-5 text-neutral-500 mb-2 group-hover:text-white transition-colors" />
            <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">{label}</div>
        </div>
    );
};

export default Story;