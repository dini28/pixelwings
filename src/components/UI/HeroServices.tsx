import { useEffect, useRef, useState } from 'react';
import { Database, Cpu, Globe, Server, Zap, ArrowRight } from 'lucide-react';

const ServicesHero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const heroRef = useRef<HTMLElement>(null);

    const services = [
        { icon: Globe, label: "Frontend Engineering", tech: "React / Next.js" },
        { icon: Server, label: "Backend Systems", tech: "Node / Express" },
        { icon: Database, label: "Data Architecture", tech: "MongoDB / SQL" },
        { icon: Cpu, label: "AI Integration", tech: "TensorFlow / ML" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (heroRef.current) observer.observe(heroRef.current);

        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % services.length);
        }, 3000);

        return () => {
            observer.disconnect();
            clearInterval(interval);
        };
    }, []);

    const fadeIn = (delay: string) =>
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Header Badge */}
                        <div className={fadeIn("delay-100")}>
                            <div className="inline-flex items-center gap-3 border-l border-white/30 pl-4">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
                                    Our Capabilities
                                </span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h1 className={`text-5xl md:text-7xl xl:text-8xl font-bold text-white tracking-tighter leading-[0.9] ${fadeIn("delay-200")}`}>
                            FULL-STACK
                            <br />
                            <span className="text-neutral-500">SOLUTIONS</span>
                            <br />
                            DELIVERED.
                        </h1>

                        {/* Description */}
                        <div className={fadeIn("delay-400")}>
                            <p className="text-lg text-neutral-300 max-w-2xl leading-relaxed">
                                End-to-end development services powered by modern frameworks, cloud infrastructure, and intelligent automation. We architect, deploy, and scale digital products that drive measurable business outcomes.
                            </p>
                        </div>

                        {/* Key Offerings */}
                        <div className={`grid grid-cols-2 gap-4 pt-4 ${fadeIn("delay-600")}`}>
                            <ServiceBadge
                                title="Rapid Deployment"
                                value="2-4 Weeks"
                                isVisible={isVisible}
                                delay="delay-700"
                            />
                            <ServiceBadge
                                title="Tech Stack"
                                value="MERN + AI"
                                isVisible={isVisible}
                                delay="delay-800"
                            />
                        </div>

                        {/* CTA */}
                        <div className={`flex flex-wrap gap-4 pt-2 ${fadeIn("delay-900")}`}>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-3 border border-white bg-white text-black px-8 py-4 hover:bg-transparent hover:text-white transition-all group"
                            >
                                <span className="text-sm uppercase tracking-wider font-bold">Start Project</span>
                                <Zap className="w-4 h-4" />
                            </a>
                            <a
                                href="#services-detail"
                                className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 hover:border-white transition-all group"
                            >
                                <span className="text-sm uppercase tracking-wider font-bold">View Services</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right - Tech Stack Visualization */}
                    <div className={`lg:col-span-5 ${fadeIn("delay-500")}`}>
                        <div className="relative border border-white/10 bg-neutral-950/80 backdrop-blur-xl p-8 aspect-square">
                            {/* Corner Accents */}
                            <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/40" />
                            <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/40" />
                            <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/40" />
                            <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/40" />

                            {/* Scan Line */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20 animate-[scan_4s_ease-in-out_infinite]" />

                            {/* Header */}
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">
                                    Service Matrix
                                </span>
                                <span className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-400 font-mono">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    Active
                                </span>
                            </div>

                            {/* Service Grid */}
                            <div className="grid grid-cols-2 gap-4 h-[calc(100%-4rem)]">
                                {services.map((service, index) => (
                                    <ServiceCard
                                        key={index}
                                        icon={service.icon}
                                        label={service.label}
                                        tech={service.tech}
                                        isActive={activeService === index}
                                        isVisible={isVisible}
                                        delay={`delay-${700 + index * 100}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-4 mt-6">
                            <StatCard
                                label="Services"
                                value="12+"
                                isVisible={isVisible}
                                delay="delay-1100"
                            />
                            <StatCard
                                label="Frameworks"
                                value="20+"
                                isVisible={isVisible}
                                delay="delay-1200"
                            />
                            <StatCard
                                label="Integrations"
                                value="50+"
                                isVisible={isVisible}
                                delay="delay-1300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface ServiceBadgeProps {
    title: string;
    value: string;
    isVisible: boolean;
    delay: string;
}

const ServiceBadge = ({ title, value, isVisible, delay }: ServiceBadgeProps) => {
    return (
        <div className={`border border-white/20 bg-neutral-950/50 p-4 hover:border-white/40 transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out ${delay}`}>
            <div className="text-xs uppercase tracking-wider text-neutral-500 font-mono mb-1">{title}</div>
            <div className="text-xl font-bold text-white">{value}</div>
        </div>
    );
};

interface ServiceCardProps {
    icon: React.ElementType;
    label: string;
    tech: string;
    isActive: boolean;
    isVisible: boolean;
    delay: string;
}

const ServiceCard = ({ icon: Icon, label, tech, isActive, isVisible, delay }: ServiceCardProps) => {
    return (
        <div className={`relative border group cursor-pointer transition-all duration-500 ${isActive
            ? 'border-white bg-white/5'
            : 'border-white/20 bg-neutral-900/50 hover:border-white/40'
            } p-4 flex flex-col justify-between ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out ${delay}`}>

            {isActive && (
                <div className="absolute inset-0 bg-white/10 blur-xl animate-pulse" />
            )}

            <div className="relative z-10">
                <Icon className={`w-8 h-8 mb-3 transition-colors ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-white'
                    }`} />

                <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-1">
                    {label}
                </h3>
                <p className="text-neutral-400 text-[10px] uppercase tracking-wider font-mono">
                    {tech}
                </p>
            </div>

            {isActive && (
                <div className="relative z-10 flex gap-1 mt-2">
                    <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0ms]"></span>
                    <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:150ms]"></span>
                    <span className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:300ms]"></span>
                </div>
            )}
        </div>
    );
};

interface StatCardProps {
    label: string;
    value: string;
    isVisible: boolean;
    delay: string;
}

const StatCard = ({ label, value, isVisible, delay }: StatCardProps) => {
    return (
        <div className={`border border-white/10 bg-neutral-950/50 backdrop-blur-xl p-3 text-center hover:border-white/30 transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out ${delay}`}>
            <div className="text-2xl font-bold text-white mb-1">{value}</div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">{label}</div>
        </div>
    );
};

export default ServicesHero;