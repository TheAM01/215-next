"use client";


import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="mt-10 flex flex-col items-center justify-center gap-6 bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <div className="text-5xl font-semibold tracking-tight text-white">
                {count}
            </div>

            <button
                onClick={() => setCount((prev: number) => prev + 1)}
                className="px-6 py-3 text-sm text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 rounded-2xl backdrop-blur-md active:scale-95"
            >
                +1
            </button>
        </div>
    );
}
