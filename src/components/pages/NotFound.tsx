import { Link } from 'react-router-dom';
import { Terminal, ArrowLeft, WifiOff } from 'lucide-react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const NotFound = () => {
    return (
        <main className="bg-black min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 flex items-center justify-center p-6 relative overflow-hidden" style={{ fontFamily: 'Tomorrow, sans-serif' }}>
                {/* Grid Background */}
                <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="max-w-xl w-full relative z-10 text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="relative p-6 border border-white/10 bg-neutral-900/50">
                            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/40" />
                            <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/40" />
                            <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/40" />
                            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/40" />
                            <WifiOff size={48} className="text-neutral-500 animate-pulse" />
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-3 border-l border-white/30 pl-4 mb-6">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-red-500 font-bold">
                            Error 404 // Connection Reset
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 uppercase">
                        SYSTEM <br />
                        <span className="text-neutral-500">DISCONNECT.</span>
                    </h1>

                    <p className="text-neutral-400 text-sm md:text-base mb-12 max-w-md mx-auto leading-relaxed font-mono">
                        The requested endpoint could not be resolved. The signal may have been intercepted or the node does not exist.
                    </p>

                    <div className="border border-white/10 bg-black/60 p-4 font-mono text-xs text-neutral-500 text-left mb-12 relative overflow-hidden">
                        <div className="flex items-center gap-2 text-white mb-2 border-b border-white/10 pb-2">
                            <Terminal size={12} />
                            <span>Diagnostic Log</span>
                        </div>
                        <p className="opacity-70">&gt; protocol: HTTP/1.1</p>
                        <p className="opacity-70">&gt; status: 404_NOT_FOUND</p>
                        <p className="opacity-70">&gt; trace_id: {Math.random().toString(36).substring(7).toUpperCase()}</p>
                        <p className="text-red-500/80 animate-pulse">&gt; CRITICAL_FAILURE: Node address invalid.</p>

                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
                    </div>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 border border-white bg-white text-black px-8 py-4 hover:bg-transparent hover:text-white transition-all group font-bold uppercase tracking-widest text-sm"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Re-establish Link
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default NotFound;
