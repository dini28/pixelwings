import { Check, Zap } from "lucide-react";
import { Button } from "../common/Button";
import { cn } from "../../utils/utils";
import SectionHeader from "../common/SectionHeader";

interface PricingPlan {
    id: string;
    title: string;
    description: string;
    price: string;
    features: string[];
    featured?: boolean;
}

interface PricingCardProps {
    plan: PricingPlan;
    isLast: boolean;
}

const plans: PricingPlan[] = [
    {
        id: "01",
        title: "Core Interface",
        description: "High-performance MERN landing pages and brand sites.",
        price: "₹29,999",
        features: [
            "React / Next.js 15 Architecture",
            "SEO & Performance Optimization",
            "Responsive UI Development",
            "3 Months Technical Support",
            "CMS Integration"
        ]
    },
    {
        id: "02",
        title: "Scalable Platform",
        description: "Full-stack applications with custom backend logic.",
        price: "₹79,999",
        features: [
            "Everything in Core Interface",
            "Node / Express Backend",
            "MongoDB Database Design",
            "Advanced User Authentication",
            "API Architecture & Docs"
        ],
        featured: true
    },
    {
        id: "03",
        title: "AI Integration",
        description: "Production-ready apps with custom AI/ML layers.",
        price: "CUSTOM",
        features: [
            "Everything in Scalable Platform",
            "Python / FastAPI Microservices",
            "Custom ML Model Integration",
            "Automated Data Workflows",
            "DevOps & Cloud Deployment"
        ]
    }
];

const Pricing = () => {
    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="container mx-auto px-6">
                <SectionHeader
                    subtitle="Investment // Tiers"
                    title={<>SERVICE <span className="text-neutral-600">PACKAGES.</span></>}
                    description="Transparent engineering costs for projects that require precision, scale, and intelligence."
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/10">
                    {plans.map((plan, index) => (
                        <PricingCard
                            key={plan.id}
                            plan={plan}
                            isLast={index === plans.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};




const PricingCard = ({ plan, isLast }: PricingCardProps) => {
    return (
        <div
            className={cn(
                "relative p-10 lg:p-14 flex flex-col transition-all duration-500 group",
                plan.featured
                    ? "bg-white text-black"
                    : "bg-transparent text-white hover:bg-neutral-900/40",
                !isLast ? "lg:border-r border-b lg:border-b-0 border-white/10" : "border-b lg:border-b-0 border-white/10"
            )}
        >
            <span className={cn(
                "text-[10px] font-mono mb-8 block tracking-widest uppercase",
                plan.featured ? "text-black/40" : "text-neutral-600"
            )}>
                {plan.id} // {plan.featured ? "PRIORITY DEPLOYMENT" : "STANDARD"}
            </span>

            <div className="mb-8">
                <h3 className="text-2xl font-bold uppercase tracking-tighter mb-4">
                    {plan.title}
                </h3>
                <p className={cn(
                    "text-sm font-light leading-relaxed",
                    plan.featured ? "text-black/70" : "text-neutral-500"
                )}>
                    {plan.description}
                </p>
            </div>

            <div className="mb-12">
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold tracking-tighter">
                        {plan.price}
                    </span>
                    {plan.price !== "CUSTOM" && (
                        <span className={cn(
                            "text-[10px] font-mono uppercase tracking-widest",
                            plan.featured ? "text-black/50" : "text-neutral-600"
                        )}>
                            / start
                        </span>
                    )}
                </div>
            </div>

            <div className="flex-1 space-y-4 mb-12">
                {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                        <Check
                            size={14}
                            className={plan.featured ? "text-black" : "text-neutral-600"}
                        />
                        <span className={cn(
                            "text-xs uppercase tracking-wider font-medium",
                            plan.featured ? "text-black/80" : "text-neutral-400"
                        )}>
                            {feature}
                        </span>
                    </div>
                ))}
            </div>

            <Button
                asChild
                variant={plan.featured ? "outline" : "default"}
                className={cn(
                    "w-full rounded-none border-2",
                    plan.featured
                        ? "border-black text-black hover:bg-black hover:text-white"
                        : "border-white text-black bg-white hover:bg-neutral-200"
                )}
            >
                <a href="/contact" className="flex items-center justify-center gap-2">
                    Initiate {plan.featured && <Zap size={14} fill="currentColor" />}
                </a>
            </Button>
        </div>
    );
};

export default Pricing;