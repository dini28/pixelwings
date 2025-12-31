// Build Data Object
import SectionHeader from "../common/SectionHeader";
const expertises = [
    { name: "MERN Stack", code: "01 service" },
    { name: "AI/ML Logic", code: "02 service" },
    { name: "Next.js 15", code: "03 service" },
    { name: "Cloud Architecture", code: "04 service" },
    { name: "UI Architecture", code: "05 service" },
    { name: "Data Systems", code: "06 service" },
    { name: "Neural Networks", code: "07 service" }
];

const Build = () => {
    const ExpertiseItem = ({ item }: { item: { name: string; code: string } }) => {
        return (
            <div className="shrink-0 flex items-center justify-center px-8 lg:px-16 h-32 group cursor-default">
                <div className="flex flex-col items-start gap-1">
                    <span className="text-[10px] font-mono text-neutral-600 tracking-tighter group-hover:text-white transition-colors">
                        {item.code}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-500 uppercase tracking-tighter group-hover:text-white transition-all duration-500">
                        {item.name}
                    </h3>
                    <div className="w-0 group-hover:w-full h-[1px] bg-white transition-all duration-700 ease-in-out" />
                </div>
            </div>
        );
    };

    return (
        <section className="py-16 bg-black border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <SectionHeader
                    subtitle="PixelWings Expertise"
                    title={<>CORE TECHNOLOGIES<span className="text-neutral-600">.</span></>}
                    description="Optimized systems built for high-scale digital production and intelligence."
                />
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div className="overflow-hidden whitespace-nowrap">
                    <div className="flex animate-scroll-brand py-4">
                        {[0, 1, 2, 3].map(setIndex => (
                            <div key={setIndex} className="flex">
                                {expertises.map((item, index) => (
                                    <ExpertiseItem
                                        key={`${setIndex}-${index}`}
                                        item={item}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <style>{`
                @keyframes scroll-brand {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-25%); }
                }
                
                .animate-scroll-brand {
                    animation: scroll-brand 30s linear infinite;
                    will-change: transform;
                }
                

                .animate-scroll-brand:hover {
                    animation-play-state: paused;
                }


                @media (max-width: 768px) {
                    .animate-scroll-brand { 
                        animation-duration: 20s; 
                    }
                }
            `}</style>
        </section>
    );
};

export default Build;