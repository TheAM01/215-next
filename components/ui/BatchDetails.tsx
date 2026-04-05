import { BatchData } from "@/types/batch";

const DAYS = [
    { short: "Mon", full: "Monday" },
    { short: "Tue", full: "Tuesday" },
    { short: "Wed", full: "Wednesday" },
    { short: "Thu", full: "Thursday" },
    { short: "Fri", full: "Friday" },
    { short: "Sat", full: "Saturday" },
    { short: "Sun", full: "Sunday" },
];

function DayGrid({ timings }: { timings: { day: string; time: string; }[]}) {
    return (
        <div className="flex items-end gap-1.5">
            {DAYS.map(({ short, full }) => {
                const match = timings.find((t) => t.day === full);
                return (
                    <div key={short} className="flex flex-col items-center gap-1.5">
                        <div className="flex items-end justify-center" style={{ height: "44px" }}>
                            {match && (
                                <span
                                    className="text-white/40 font-mono tracking-widest"
                                    style={{
                                        fontSize: "8px",
                                        writingMode: "vertical-rl",
                                        transform: "rotate(180deg)",
                                        paddingBottom: "4px",
                                    }}
                                >
                                    {match.time}
                                </span>
                            )}
                        </div>
                        <div
                            className={`w-7 border transition-all duration-200 ${match ? "bg-white border-white h-7" : "bg-transparent border-white/10 h-2.5"
                                }`}
                        />
                        <span
                            className={`font-mono tracking-widest uppercase text-[9px] ${match ? "text-white" : "text-white/20"
                                }`}
                        >
                            {short}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default function BatchDisplay({ batch }: { batch: BatchData}) {
    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-10">
            <div className="w-full max-w-lg border border-white/[0.07] bg-neutral-900 hover:border-white/13 transition-colors duration-300">

                {/* Top bar */}
                <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/6">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/20">
                        BATCH <span className="text-white/35">#{String(batch.id).padStart(3, "0")}</span>
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse" />
                </div>

                {/* Body */}
                <div className="px-6 pt-8 pb-7 space-y-8">

                    {/* Name */}
                    <h1 className="text-white text-xl font-bold tracking-tight leading-snug">
                        {batch.name}
                    </h1>

                    {/* Current topic */}
                    <div className="space-y-2">
                        <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/20">
                            Current Topic
                        </p>
                        <p className="font-mono text-sm text-white/50 leading-relaxed border-l border-white/10 pl-3 italic">
                            {batch.currentTopic}
                        </p>
                    </div>

                    {/* Schedule */}
                    <div className="space-y-4">
                        <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/20">
                            Weekly Schedule
                        </p>
                        <DayGrid timings={batch.timings} />
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="flex items-center justify-between px-6 py-3.5 border-t border-white/6">
                    <span className="font-mono text-[10px] tracking-widest text-white/20">
                        <span className="text-white/35">{batch.timings.length}</span> sessions / week
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.15em] text-white/15">
                        ACTIVE
                    </span>
                </div>

            </div>
        </div>
    );
}