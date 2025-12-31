/* eslint-disable react-refresh/only-export-components */
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../common/Accordion";
import SectionHeader from "../common/SectionHeader";


interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        id: "01",
        question: "How does the technical subscription model function?",
        answer: "We operate on a transparent partnership basis. You gain access to our full-stack engineering team (MERN + AI) for a set monthly fee, allowing you to scale up or pause development based on your current sprint requirements."
    },
    {
        id: "02",
        question: "Which technology stack do you prioritize?",
        answer: "Our core competency lies in high-performance architectures using Next.js 15, Node.js, and MongoDB. For AI/ML integrations, we deploy custom Python/FastAPI microservices to ensure modularity and speed."
    },
    {
        id: "03",
        question: "How is the 3-member specialized team structured?",
        answer: "Every project is assigned a dedicated Frontend Architect, a Backend/DevOps Engineer, and an AI/ML Logic Specialist. This ensures specialized focus across the entire application lifecycle, from UI to infrastructure."
    },
    {
        id: "04",
        question: "Can you modernize existing legacy systems?",
        answer: "Yes. We specialize in system migration and refactoring. We can bridge your existing brand guidelines with a modern technical stack, improving performance and SEO without losing your established identity."
    }
];

const FAQ = () => {
    return (
        <section className="py-24 bg-black border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative">
                <SectionHeader
                    subtitle="Inquiry // Support"
                    title={<>System <span className="text-neutral-600">Clarification.</span></>}
                    description="Detailed insights into our architecture, partnership model, and deployment strategies."
                />

                <Accordion
                    type="single"
                    collapsible
                    className="space-y-0 border-t border-white/10"
                >
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={faq.id}
                            value={`item-${index}`}
                            className="border-b border-white/10 px-2 transition-all duration-300 hover:bg-neutral-900/30 group"
                        >
                            <AccordionTrigger className="text-left text-white hover:no-underline py-8 flex gap-6">
                                <span className="text-[10px] font-mono text-neutral-600 mt-1 tracking-tighter group-hover:text-white transition-colors">
                                    {faq.id}
                                </span>
                                <span className="text-lg md:text-xl font-bold tracking-tight uppercase group-hover:pl-2 transition-all duration-300">
                                    {faq.question}
                                </span>
                            </AccordionTrigger>

                            <AccordionContent className="text-neutral-400 text-sm md:text-base leading-relaxed pl-14 pb-8 font-light max-w-2xl">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
                    <span className="text-[15rem] font-bold text-white leading-none">?</span>
                </div>
            </div >
        </section >
    );
};

export default FAQ;
