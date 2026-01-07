import React from "react";
import { Button } from "../common/Button";
import { Zap, ArrowRight } from "lucide-react";

const description = "Our specialized units are ready to engineer your next MERN + AI infrastructure. Secure your slot for the next development sprint.";

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

const CTA: React.FC = () => {
    return (
        <section className="relative py-24 bg-black overflow-hidden border-t border-white/10">

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-10">

                    <div className="flex justify-center">
                        <div className="inline-flex items-center gap-3 border-l border-white/30 pl-4">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold">
                                Deployment
                            </span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
                        Ready to
                        <span className="text-neutral-600"> Scale Up ?</span>
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

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto px-12 h-16 text-sm rounded-none border-2 border-white"
                        >
                            <a href={ctaButtons.secondary.href} className="flex items-center gap-2">
                                {ctaButtons.secondary.text}
                                <ctaButtons.secondary.icon size={16} fill="currentColor" />
                            </a>
                        </Button>
                    </div >
                </div >
            </div >
        </section >
    );
};

export default CTA;