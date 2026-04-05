export default function NotFound() {
    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-10">
            <div className="w-full max-w-lg border border-white/[0.07] bg-neutral-900 hover:border-white/13 transition-colors duration-300">

                {/* Top bar */}
                <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/6">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/20">
                        ERROR <span className="text-white/35">#404</span>
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>

                {/* Body */}
                <div className="px-6 pt-8 pb-7 space-y-8">

                    {/* Large 404 */}
                    <div className="flex items-end gap-4 border-b border-white/6 pb-8">
                        {["4", "0", "4"].map((digit, i) => (
                            <span
                                key={i}
                                className="font-bold text-white/6 select-none leading-none"
                                style={{ fontSize: "96px", letterSpacing: "-0.05em" }}
                            >
                                {digit}
                            </span>
                        ))}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/20">
                            Status
                        </p>
                        <h1 className="text-white text-xl font-bold tracking-tight leading-snug">
                            Page Not Found
                        </h1>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/20">
                            Detail
                        </p>
                        <p className="font-mono text-sm text-white/50 leading-relaxed border-l border-white/10 pl-3 italic">
                            The resource you&apos;re looking for doesn&apos;t exist or has been moved.
                        </p>
                    </div>

                    {/* Day-grid-style path display */}
                    <div className="space-y-4">
                        <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/20">
                            Requested Path
                        </p>
                        <div className="flex items-center gap-0">
                            {"/not-found".split("").map((char, i) => (
                                <div key={i} className="flex flex-col items-center gap-1.5">
                                    <div
                                        className={`border transition-all duration-200 ${char === "/"
                                                ? "bg-white border-white w-4 h-4"
                                                : "bg-transparent border-white/10 w-4 h-2"
                                            }`}
                                    />
                                    <span className="font-mono text-[9px] text-white/20">{char}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-between px-6 py-3.5 border-t border-white/[0.06]">
                    <span className="font-mono text-[10px] tracking-widest text-white/20">
                        <span className="text-white/35">0</span> results found
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.15em] text-white/15">
                        DEAD END
                    </span>
                </div>

            </div>
        </div>
    );
}