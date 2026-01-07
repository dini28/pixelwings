import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, Tag } from 'lucide-react';
import { Button } from '../common/Button';

export const ContactUI = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const fadeIn = (delay: string) =>
        `transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${delay}`;

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center bg-black overflow-hidden pt-32 pb-20"
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
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className={fadeIn("delay-100")}>
                        <div className="inline-flex items-center gap-3 border-l border-white/30 pl-4 mb-8">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-bold">
                                Contact Interface
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-16 uppercase">
                            LET'S START A <br />
                            <span className="text-neutral-500">CONVERSATION.</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Contact Info */}
                        <div className={`lg:col-span-5 space-y-12 ${fadeIn("delay-300")}`}>
                            <div className="space-y-8">
                                <ContactMethod
                                    icon={Mail}
                                    title="Email"
                                    value="hello@pixelwings.com"
                                    href="mailto:hello@pixelwings.com"
                                />
                                <ContactMethod
                                    icon={Phone}
                                    title="Protocol"
                                    value="+91 123 456 7890"
                                    href="tel:+911234567890"
                                />
                                <ContactMethod
                                    icon={MapPin}
                                    title="Node Location"
                                    value="Cyber Hub, Gurugram, India"
                                />
                            </div>

                            {/* Status Terminal */}
                            <div className="border border-white/10 bg-neutral-950/50 p-6 relative overflow-hidden group">
                                <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/40" />
                                <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/40" />
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">System Status: Ready</span>
                                </div>
                                <p className="text-xs text-neutral-500 font-mono leading-relaxed">
                                    Our typical response latency is &lt; 24 hours. Connect with our engineering core to discuss your next deployment.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={`lg:col-span-7 ${fadeIn("delay-500")}`}>
                            <div className="relative border border-white/10 bg-neutral-950/50 backdrop-blur-xl p-8 md:p-12 min-h-[500px] flex flex-col justify-center">
                                {/* Corner Accents */}
                                <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/40" />
                                <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/40" />
                                <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/40" />
                                <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/40" />

                                {isSubmitted ? (
                                    <div className="text-center space-y-8 py-12 animate-in fade-in zoom-in duration-500">
                                        <div className="w-20 h-20 border border-white bg-white text-black flex items-center justify-center mx-auto mb-8">
                                            <Send size={32} />
                                        </div>
                                        <div>
                                            <div className="inline-flex items-center gap-3 border-l border-white/30 pl-4 mb-4">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-[10px] uppercase tracking-[0.4em] text-green-500 font-bold">
                                                    Transmission Successful
                                                </span>
                                            </div>
                                            <h2 className="text-3xl font-bold text-white tracking-tighter uppercase mb-4">
                                                SIGNAL RECEIVED.
                                            </h2>
                                            <p className="text-neutral-400 text-sm font-mono max-w-sm mx-auto leading-relaxed">
                                                Your transmission has been encrypted and routed to our technical core. Expect a feedback signal within 24 hours.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
                                        >
                                            Initiate New Transmission
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <InputField
                                                icon={User}
                                                label="Full Name"
                                                placeholder="Identification"
                                                type="text"
                                                required
                                            />
                                            <InputField
                                                icon={Mail}
                                                label="Email Address"
                                                placeholder="endpoint@domain.com"
                                                type="email"
                                                required
                                            />
                                        </div>

                                        <InputField
                                            icon={Tag}
                                            label="Subject"
                                            placeholder="Deployment Type"
                                            type="text"
                                            required
                                        />

                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono ml-1 flex items-center gap-2">
                                                <MessageSquare size={12} />
                                                Detailed Requirement
                                            </label>
                                            <textarea
                                                required
                                                className="w-full bg-black/50 border border-white/10 p-4 text-white text-sm focus:outline-none focus:border-white/40 transition-colors min-h-[150px] font-mono resize-none"
                                                placeholder="Describe the objective..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full h-14 bg-white text-black hover:bg-neutral-200 transition-all font-bold uppercase tracking-widest group rounded-none"
                                        >
                                            <span className="flex items-center gap-3">
                                                Transmit Message
                                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </span>
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface ContactMethodProps {
    icon: React.ElementType;
    title: string;
    value: string;
    href?: string;
}

const ContactMethod = ({ icon: Icon, title, value, href }: ContactMethodProps) => (
    <div className="flex gap-6 group">
        <div className="w-12 h-12 border border-white/10 bg-neutral-950 flex items-center justify-center flex-shrink-0 group-hover:border-white/30 transition-colors">
            <Icon size={20} className="text-neutral-500 group-hover:text-white transition-colors" />
        </div>
        <div className="space-y-1">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono">{title}</h4>
            {href ? (
                <a href={href} className="text-lg text-white hover:text-neutral-300 transition-colors block">
                    {value}
                </a>
            ) : (
                <span className="text-lg text-white block">{value}</span>
            )}
        </div>
    </div>
);

interface InputFieldProps {
    icon: React.ElementType;
    label: string;
    placeholder: string;
    type: string;
    required: boolean;
}

const InputField = ({ icon: Icon, label, placeholder, type, required }: InputFieldProps) => (
    <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono ml-1 flex items-center gap-2">
            <Icon size={12} />
            {label}
        </label>
        <input
            required={required}
            type={type}
            className="w-full h-12 bg-black/50 border border-white/10 px-4 text-white text-sm focus:outline-none focus:border-white/40 transition-colors font-mono"
            placeholder={placeholder}
        />
    </div>
);

export default ContactUI;