import React from "react";
import { Button } from "../common/Button";
import { Zap, ArrowRight } from "lucide-react";

interface StatusIndicator {
    label: string;
    icon?: 'pulse' | 'none';
}

const sectionLabel = {
    code: "05",
    title: "FINAL DEPLOYMENT"
};

const heading = {
    line1: "READY TO",
    line2: "SCALE UP?",
    line2Color: "text-neutral-600"
};

const description = "Our 3-member specialized units are ready to engineer your next MERN + AI infrastructure. Secure your slot for the next development sprint.";

const ctaButtons = {
    primary: {
        href: "/contact",
        text: "INITIATE PROJECT",
        icon: Zap
    },
    secondary: {
        href: "/services",
        text: "Our Process",
        icon: ArrowRight
    }
};

const statusIndicators: StatusIndicator[] = [
    { label: "System Operational", icon: 'pulse' },
    { label: "Est. Delivery: 48h", icon: 'none' }
];

const backgroundText = "PIXELWINGS";

const CTA: React.FC = () => {
    return (
        <section className="relative py-24 bg-black overflow-hidden border-t border-white/10">
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="absolute -bottom-10 -right-10 select-none pointer-events-none opacity-[0.03]">
                <span className="text-[20rem] font-bold text-white tracking-tighter">
                    {backgroundText}
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-3 border-l border-white/30 pl-4">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold">
                                {sectionLabel.code}
                            </span>
                        </div>
                    </div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
                        {heading.line1} <br />
                        <span className={heading.line2Color}>{heading.line2}</span>
                    </h2>

                    <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                        <Button
                            asChild
                            size="lg"
                            variant="default"
                            className="w-full sm:w-auto px-12 h-16 text-sm rounded-none border-2 border-white"
                        >
                            <a href={ctaButtons.primary.href} className="flex items-center gap-2">
                                {ctaButtons.primary.text}
                                <ctaButtons.primary.icon size={16} fill="currentColor" />
                            </a>
                        </Button>

                        <a
                            href={ctaButtons.secondary.href}
                            className="text-xs uppercase tracking-[0.3em] font-bold text-white hover:text-neutral-400 transition-colors flex items-center gap-2 group"
                        >
                            {ctaButtons.secondary.text}
                            <ctaButtons.secondary.icon
                                size={14}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                    </div >

                    <div className="pt-16 flex justify-center items-center gap-8 opacity-20 grayscale">
                        {statusIndicators.map((status, index) => (
                            <React.Fragment key={index}>
                                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white font-mono">
                                    {status.icon === 'pulse' && (
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    )}
                                    {status.label}
                                </div>
                                {index < statusIndicators.length - 1 && (
                                    <div className="w-[1px] h-4 bg-white/30" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div >
            </div >
        </section >
    );
};

export default CTA;