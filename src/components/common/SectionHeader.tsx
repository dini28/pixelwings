import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../../utils/utils";

interface SectionHeaderProps {
    subtitle: string;
    title: ReactNode;
    description?: string;
    className?: string;
    descriptionClassName?: string;
}

export const SectionHeader = ({
    subtitle,
    title,
    description,
    className,
    descriptionClassName
}: SectionHeaderProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const current = headerRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (current) observer.observe(current);
        return () => observer.disconnect();
    }, []);

    const fadeIn = (delay: string) => cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        delay
    );

    // For center alignment, we stack everything vertically. For left/right, we might want the side-by-side layout 
    // commonly seen in WhyChooseUs/Features (Title on left, Description on right). 
    // However, to make this truly reusable, we need to handle that layout split.

    // Pattern A (Side by Side - Default for Left): 
    // Left: Subtitle + Title 
    // Right: Description

    // Pattern B (Stacked - Default for Center):
    // Top: Subtitle 
    // Middle: Title
    // Bottom: Description

    return (
        <div ref={headerRef} className={cn("flex flex-col md:flex-row md:items-end mb-20 gap-8 justify-between md:items-end", className)}>
            <div className={cn(fadeIn("delay-100"), "max-w-3xl")}>
                <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 font-bold border-l border-white/30 pl-4 block mb-4">
                    {subtitle}
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-4 text-white uppercase">
                    {title}
                </h2>
            </div>
            {description && (
                <p className={cn("text-neutral-500 max-w-sm text-sm leading-relaxed font-light", fadeIn("delay-300"), descriptionClassName)}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
