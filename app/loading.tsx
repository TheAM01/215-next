export default function Loading() {
    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-10">
            <div className="w-full max-w-lg border border-white/[0.07] bg-neutral-900">

                {/* Top bar */}
                <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/[0.06]">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/20">
                        SYS <span className="text-white/35">#LOAD</span>
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse" />
                </div>

                {/* Body */}
                <div className="px-6 pt-8 pb-7 space-y-8">

                    {/* Title skeleton */}
                    <div className="space-y-3">
                        <div className="h-5 w-3/4 bg-white/[0.04] animate-pulse" />
                        <div className="h-5 w-1/2 bg-white/[0.03] animate-pulse" />
                    </div>

                    {/* Topic skeleton */}
                    <div className="space-y-2">
                        <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/20">
                            Loading
                        </p>
                        <div className="border-l border-white/10 pl-3 space-y-2">
                            <div className="h-3 w-full bg-white/[0.04] animate-pulse" />
                            <div className="h-3 w-2/3 bg-white/[0.03] animate-pulse" />
                        </div>
                    </div>

                    {/* Block grid skeleton — mirrors the day grid */}
                    <div className="space-y-4">
                        <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/20">
                            Progress
                        </p>
                        <div className="flex items-end gap-1.5">
                            {[28, 44, 20, 36, 16, 40, 24].map((h, i) => (
                                <div key={i} className="flex flex-col items-center gap-1.5">
                                    <div
                                        className="w-7 border border-white/10 animate-pulse"
                                        style={{
                                            height: `${h}px`,
                                            animationDelay: `${i * 120}ms`,
                                            opacity: 0.3 + i * 0.05,
                                        }}
                                    />
                                    <div
                                        className="w-4 h-1.5 bg-white/[0.04] animate-pulse"
                                        style={{ animationDelay: `${i * 120}ms` }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-between px-6 py-3.5 border-t border-white/[0.06]">
                    <span className="font-mono text-[10px] tracking-[0.1em] text-white/20 flex items-center gap-2">
                        <span className="text-white/35 animate-pulse">—</span> fetching data
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.15em] text-white/15 animate-pulse">
                        WAIT
                    </span>
                </div>

            </div>
        </div>
    );
}