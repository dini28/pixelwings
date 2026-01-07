import { useEffect, useRef, useState } from 'react';
import { Building2, Users, Target, TrendingUp } from 'lucide-react';


export const AboutHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);

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

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const fadeIn = (delay) =>
        `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${delay}`;

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20"
            style={{ fontFamily: 'Tomorrow, sans-serif' }}
        >
            {/* Grid Background */}
            <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header Badge */}
                    <div className={fadeIn("delay-100")}>
                        <div className="inline-flex items-center gap-3 border-l border-white/30 pl-4 mb-12">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
                                Who We Are
                            </span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className={`text-5xl md:text-7xl xl:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-12 ${fadeIn("delay-200")}`}>
                        ENGINEERING
                        <br />
                        <span className="text-neutral-500">EXCELLENCE</span>
                        <br />
                        AT SCALE.
                    </h1>

                    {/* Mission Statement */}
                    <div className={`max-w-3xl mb-16 ${fadeIn("delay-400")}`}>
                        <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                            PixelWings is a technology solutions firm specializing in enterprise-grade web applications and intelligent systems.
                        </p>
                        <p className="text-lg text-neutral-400 leading-relaxed">
                            We architect and deploy scalable digital infrastructure using modern MERN stack technologies, integrated with advanced machine learning capabilities to deliver measurable business outcomes.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 ${fadeIn("delay-600")}`}>
                        <StatCard
                            icon={Building2}
                            value="50+"
                            label="Projects Delivered"
                            isVisible={isVisible}
                            delay="delay-700"
                        />
                        <StatCard
                            icon={Users}
                            value="30+"
                            label="Enterprise Clients"
                            isVisible={isVisible}
                            delay="delay-800"
                        />
                        <StatCard
                            icon={Target}
                            value="99.9%"
                            label="Uptime SLA"
                            isVisible={isVisible}
                            delay="delay-900"
                        />
                        <StatCard
                            icon={TrendingUp}
                            value="3x"
                            label="Avg. Performance Gain"
                            isVisible={isVisible}
                            delay="delay-1000"
                        />
                    </div>

                    {/* Core Values */}
                    <div className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 ${fadeIn("delay-800")}`}>
                        <ValueCard
                            title="Technical Excellence"
                            description="Leveraging cutting-edge frameworks and best practices to build robust, maintainable systems."
                            isVisible={isVisible}
                            delay="delay-1100"
                        />
                        <ValueCard
                            title="Scalable Solutions"
                            description="Architecture designed for growth, handling increasing complexity without compromising performance."
                            isVisible={isVisible}
                            delay="delay-1200"
                        />
                        <ValueCard
                            title="Data-Driven Results"
                            description="Every decision backed by analytics, every feature validated by measurable business impact."
                            isVisible={isVisible}
                            delay="delay-1300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatCard = ({ icon: Icon, value, label, isVisible, delay }) => {
    return (
        <div className={`relative group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out ${delay}`}>
            <div className="relative border border-white/10 bg-neutral-950/50 backdrop-blur-xl p-6 hover:border-white/30 transition-all duration-300">
                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/40" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/40" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/40" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/40" />

                <Icon className="w-6 h-6 text-neutral-500 mb-4 group-hover:text-white transition-colors" />
                <div className="text-3xl font-bold text-white mb-2">{value}</div>
                <div className="text-xs uppercase tracking-wider text-neutral-400 font-mono">{label}</div>
            </div>
        </div>
    );
};

const ValueCard = ({ title, description, isVisible, delay }) => {
    return (
        <div className={`relative group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out ${delay}`}>
            <div className="border-l border-white/20 pl-6 group-hover:border-white/50 transition-all duration-300">
                <h3 className="text-white font-bold text-lg mb-3 tracking-tight">{title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default AboutHero;