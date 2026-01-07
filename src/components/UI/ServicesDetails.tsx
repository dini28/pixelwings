import { useState, useEffect } from 'react';
import {
    Check,
    ArrowRight,
    Clock,
    RotateCcw,
    Database,
    Cpu,
    Zap
} from "lucide-react";
import { SERVICES_DATA as services } from '../../constants/data';

const ServicesDetails = () => {
    const [activeService, setActiveService] = useState('web-development');
    const [isVisible, setIsVisible] = useState(false);

    const currentService = services.find((s) => s.id === activeService) || services[0];

    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, [activeService]);

    const ServiceIcon = currentService.icon as React.ElementType;

    return (
        <section
            className="py-20 bg-black text-white relative overflow-hidden"
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
                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-3 border-l border-white/30 pl-4 mb-8">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
                            Service Catalog
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[0.95]">
                        TECHNICAL
                        <br />
                        <span className="text-neutral-500">SPECIFICATIONS.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-3">
                        <div className="relative border border-white/10 bg-neutral-950/80 backdrop-blur-xl p-6 sticky top-20">
                            {/* Corner Accents */}
                            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/40" />
                            <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/40" />
                            <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/40" />
                            <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/40" />

                            <div className="mb-6">
                                <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mb-4">
                                    Service Index
                                </div>
                            </div>

                            <nav className="space-y-2">
                                {services.map((service) => {
                                    const IconComponent = service.icon as React.ElementType;
                                    const isActive = activeService === service.id;

                                    return (
                                        <button
                                            key={service.id}
                                            onClick={() => setActiveService(service.id)}
                                            className={`w-full border transition-all duration-300 ${isActive
                                                ? 'border-white bg-white/10'
                                                : 'border-white/20 bg-neutral-900/50 hover:border-white/40'
                                                }`}
                                        >
                                            <div className="p-4 flex items-start gap-3">
                                                <div className="w-8 h-8 border border-white/20 flex items-center justify-center mt-0.5">
                                                    <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-neutral-400'}`} />
                                                </div>

                                                <div className="text-left flex-1">
                                                    <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mb-1">
                                                        {service.code}
                                                    </div>
                                                    <div className={`text-sm font-bold ${isActive ? 'text-white' : 'text-neutral-400'}`}>
                                                        {service.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </nav>

                            {/* Status */}
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-400 font-mono">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    All Services Active
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-9">
                        <div className="relative border border-white/10 bg-neutral-950/80 backdrop-blur-xl overflow-hidden">
                            {/* Corner Accents */}
                            <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/40 z-20" />
                            <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/40 z-20" />
                            <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/40 z-20" />
                            <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/40 z-20" />

                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={currentService.image}
                                    alt={currentService.name}
                                    className={`w-full h-full object-cover transition-all duration-1000 ${isVisible ? 'scale-100 opacity-20' : 'scale-110 opacity-0'
                                        }`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
                            </div>

                            {/* Scan Line */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20 animate-[scan_4s_ease-in-out_infinite] z-10" />

                            {/* Content */}
                            <div className="relative z-10 p-8">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-8 pb-6 border-b border-white/10">
                                    <div>
                                        <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mb-2">
                                            Service ID: {currentService.code}
                                        </div>
                                        <div className="flex items-center gap-4 mb-3">
                                            <ServiceIcon className="w-8 h-8 text-white" />
                                            <h3 className="text-3xl font-bold text-white tracking-tight">
                                                {currentService.name}
                                            </h3>
                                        </div>
                                        <p className="text-neutral-400 text-sm max-w-2xl">
                                            {currentService.fullDescription}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                        <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">Available</span>
                                    </div>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-4 gap-4 mb-8">
                                    <div className="border border-white/20 bg-black/50 p-4">
                                        <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mb-2">
                                            Delivery
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-neutral-400" />
                                            <span className="text-sm font-bold text-white">{currentService.deliveryTime}</span>
                                        </div>
                                    </div>
                                    <div className="border border-white/20 bg-black/50 p-4">
                                        <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mb-2">
                                            Revisions
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <RotateCcw className="w-4 h-4 text-neutral-400" />
                                            <span className="text-sm font-bold text-white">{currentService.revisions}</span>
                                        </div>
                                    </div>
                                    <div className="border border-white/20 bg-black/50 p-4">
                                        <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mb-2">
                                            Uptime SLA
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Database className="w-4 h-4 text-neutral-400" />
                                            <span className="text-sm font-bold text-white">{currentService.metrics.uptime}</span>
                                        </div>
                                    </div>
                                    <div className="border border-white/20 bg-black/50 p-4">
                                        <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mb-2">
                                            Base Price
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Cpu className="w-4 h-4 text-neutral-400" />
                                            <span className="text-sm font-bold text-white">{currentService.price}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-8">
                                    {/* Features */}
                                    <div>
                                        <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mb-4">
                                            Core Capabilities
                                        </div>
                                        <div className="space-y-2">
                                            {currentService.features.map((feature, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-3 border border-white/10 bg-black/30 p-3"
                                                >
                                                    <div className="w-4 h-4 border border-white/30 flex items-center justify-center mt-0.5">
                                                        <Check className="w-2.5 h-2.5 text-white" />
                                                    </div>
                                                    <span className="text-sm text-neutral-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tech & Process */}
                                    <div className="space-y-6">
                                        {/* Technologies */}
                                        <div>
                                            <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mb-4">
                                                Technology Stack
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {currentService.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-mono text-neutral-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Process */}
                                        <div>
                                            <div className="text-[10px] uppercase tracking-wider text-neutral-500 font-mono mb-4">
                                                Execution Protocol
                                            </div>
                                            <div className="space-y-2">
                                                {currentService.process.map((step, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 border border-white/10 bg-black/30 p-3">
                                                        <div className="w-6 h-6 border border-white/30 flex items-center justify-center text-white font-mono text-xs">
                                                            {idx + 1}
                                                        </div>
                                                        <span className="text-sm text-neutral-300">{step}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-4">
                                    <button className="border border-white bg-white text-black px-8 py-4 hover:bg-transparent hover:text-white transition-all flex items-center gap-3 font-bold text-sm uppercase tracking-wider">
                                        <Zap className="w-4 h-4" />
                                        Initiate Project
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                    <button className="border border-white/30 text-white px-8 py-4 hover:border-white transition-all font-bold text-sm uppercase tracking-wider">
                                        Request Specifications
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesDetails;
