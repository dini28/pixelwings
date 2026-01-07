import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../common/Button";
import { cn } from "../../utils/utils";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const activePath = location.pathname;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/about", label: "About Us" }
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
                isScrolled
                    ? "bg-black/80 backdrop-blur-md border-white/10 py-3"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6">
                <nav className="flex items-center justify-between">
                    <Link
                        to="/"
                        className="text-xl font-bold tracking-tighter text-white hover:opacity-70 transition-opacity"
                        style={{ fontFamily: 'Pixelify Sans, monospace' }}
                    >
                        PixelWings
                    </Link>

                    <div className="hidden md:flex items-center space-x-10">
                        {navItems.map(({ href, label }) => (
                            <Link
                                key={href}
                                to={href}
                                className={cn(
                                    "text-[11px] uppercase tracking-[0.2em] transition-colors duration-300",
                                    activePath === href
                                        ? "text-white"
                                        : "text-neutral-500 hover:text-white"
                                )}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-white/20 hover:border-white"
                        >
                            <Link to="/contact">Get in Touch</Link>
                        </Button>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-1"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </nav>
            </div>

            <div
                className={cn(
                    "fixed inset-x-0 top-[100%] bg-black border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden md:hidden",
                    isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="flex flex-col p-8 space-y-6">
                    {navItems.map(({ href, label }) => (
                        <Link
                            key={href}
                            to={href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg font-bold tracking-tight text-white border-b border-white/5 pb-2"
                        >
                            {label}
                        </Link>
                    ))}
                    <Button asChild className="w-full mt-4">
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                            Contact us
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};
export default Header;