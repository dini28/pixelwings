import { FontAwesomeIcon, type FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faXTwitter, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ArrowUp } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

type SocialLink = {
    href: string;
    icon: FontAwesomeIconProps['icon'];
    label: string;
};

type Link = {
    href: string;
    label: string;
};

type SocialLinkProps = {
    href: string;
    icon: FontAwesomeIconProps['icon'];
    label: string;
};

type FooterLinkProps = {
    href: string;
    children: React.ReactNode;
};

const socialLinks: SocialLink[] = [
    { href: "#", icon: faXTwitter, label: "Twitter" },
    { href: "#", icon: faInstagram, label: "Instagram" },
    { href: "#", icon: faGithub, label: "GitHub" },
    { href: "#", icon: faLinkedin, label: "LinkedIn" },
];

const companyLinks: Link[] = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const resourcesLinks: Link[] = [
    { href: "/blog", label: "Blog" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/careers", label: "Careers" },
    { href: "/support", label: "Support" },
];

const legalLinks: Link[] = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
];

const Footer = () => {
    const currentYear: number = new Date().getFullYear();

    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-black text-white overflow-hidden border-t border-white">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

            <div className="relative container mx-auto px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

                    <div className="md:col-span-4 space-y-6">
                        <Link to="/" className="inline-block group">
                            <h2
                                className="text-3xl font-bold tracking-tight hover:text-white/80 transition-colors"
                                style={{ fontFamily: 'Pixelify Sans, monospace' }}
                            >
                                PixelWings
                            </h2>
                        </Link>

                        <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                            Crafting digital experiences with precision and creativity. We turn ideas into reality.
                        </p>

                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((link) => (
                                <SocialLink key={link.label} {...link} />
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                            Company
                        </h4>
                        <nav className="flex flex-col gap-3">
                            {companyLinks.map((link) => (
                                <FooterLink key={link.label} href={link.href}>
                                    {link.label}
                                </FooterLink>
                            ))}
                        </nav>
                    </div>

                    <div className="md:col-span-2 space-y-5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                            Resources
                        </h4>
                        <nav className="flex flex-col gap-3">
                            {resourcesLinks.map((link) => (
                                <FooterLink key={link.label} href={link.href}>
                                    {link.label}
                                </FooterLink>
                            ))}
                        </nav>
                    </div>

                    <div className="md:col-span-2 space-y-5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                            Legal
                        </h4>
                        <nav className="flex flex-col gap-3">
                            {legalLinks.map((link) => (
                                <FooterLink key={link.label} href={link.href}>
                                    {link.label}
                                </FooterLink>
                            ))}
                        </nav>
                    </div>

                    <div className="md:col-span-2 space-y-5">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                            Contact
                        </h4>
                        <div className="flex flex-col gap-3 text-sm text-white/60">
                            <a href="mailto:hello@pixelwings.com" className="hover:text-white transition-colors">
                                hello@pixelwings.com
                            </a>
                            <a href="tel:+911234567890" className="hover:text-white transition-colors">
                                +91 123 456 7890
                            </a>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <div className="flex flex-wrap items-center gap-4 md:gap-6">
                        <p>© {currentYear} PixelWings Solutions</p>
                        <div className="flex gap-4">
                            <Link to="/privacy" className="hover:text-white/70 transition-colors">
                                Privacy
                            </Link>
                            <Link to="/terms" className="hover:text-white/70 transition-colors">
                                Terms
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Made in India
                        </span>
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-white hover:text-white/70 transition-all duration-300 group"
                        >
                            <span>Back to top</span>
                            <span className="w-6 h-6 flex items-center justify-center bg-white rounded group-hover:-translate-y-1 transition-transform duration-300">
                                <ArrowUp className="w-3 h-3 text-black" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
    <a
        href={href}
        aria-label={label}
        className="group relative p-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
    >
        <FontAwesomeIcon icon={Icon} className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-200" />
    </a>
);

const FooterLink = ({ href, children }: FooterLinkProps) => (
    <Link
        to={href}
        className="text-sm text-white/60 hover:text-white transition-colors duration-200 w-fit relative group"
    >
        {children}
    </Link>
);

export default Footer;