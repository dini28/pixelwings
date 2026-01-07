import { Layers, Workflow, Zap } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { useState, useEffect, useRef } from "react";
import { cn } from "../../utils/utils";

const reasons = [
    {
        icon: Layers,
        label: "01 // DESIGN",
        title: "Architectural Precision",
        description: "We don't just 'design'—we architect user interfaces with a focus on hierarchy, whitespace, and conversion."
    },
    {
        icon: Workflow,
        label: "02 // STACK",
        title: "Engineered Scalability",
        description: "Leveraging the MERN stack and Next.js 15 to ensure your platform handles growth without technical debt."
    },
    {
        icon: Zap,
        label: "03 // INTELLIGENCE",
        title: "AI-Native Solutions",
        description: "Seamlessly integrating custom AI models and automation into your existing business workflows."
    }
];

const WhyChooseUs: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const current = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (current) observer.observe(current);
        return () => observer.disconnect();
    }, []);



    return (
        <section
            ref={sectionRef}
            className="py-24 bg-black text-white overflow-hidden border-t border-white/5"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <SectionHeader
                    subtitle="Strategic Value"
                    title={<>WHY PARTNER <br /> WITH <span className="text-neutral-600">PIXELWINGS.</span></>}
                    description="We move beyond traditional agency models by operating as your dedicated technical partners, focusing on code quality and business intelligence."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group p-10 lg:p-14 border-white/10 transition-colors duration-500 hover:bg-neutral-900/40",
                                index !== reasons.length - 1 ? "md:border-r border-b md:border-b-0" : "border-b md:border-b-0",
                                "transition-all duration-1000 ease-out",
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                                `delay-${(index + 2) * 200}`
                            )}
                        >
                            <div className="mb-10 text-neutral-600 group-hover:text-white transition-colors duration-500">
                                <reason.icon size={32} strokeWidth={1} />
                            </div>

                            <div className="space-y-4">
                                <span className="text-[10px] font-mono text-neutral-600 tracking-widest block uppercase">
                                    {reason.label}
                                </span>
                                <h3 className="text-xl font-bold uppercase tracking-tight">
                                    {reason.title}
                                </h3>
                                <p className="text-neutral-500 text-sm leading-relaxed font-light group-hover:text-neutral-400 transition-colors">
                                    {reason.description}
                                </p>
                            </div>

                            <div className="mt-8 w-8 group-hover:w-full h-[1px] bg-white/20 group-hover:bg-white transition-all duration-700 ease-in-out" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;