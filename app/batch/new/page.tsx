"use client";

import { createBatch } from "@/actions/batch";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export default function NewBatchPage() {
    const [timings, setTimings] = useState([{ day: "Monday", time: "19:00" }]);

    const addTiming = () => {
        setTimings([...timings, { day: "Monday", time: "19:00" }]);
    };

    const removeTiming = (index: number) => {
        setTimings(timings.filter((_, i) => i !== index));
    };

    const updateTiming = (index: number, field: "day" | "time", value: string) => {
        const newTimings = [...timings];
        newTimings[index][field] = value;
        setTimings(newTimings);
    };

    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Create New Batch</h1>
                <p className="text-gray-500 dark:text-gray-400">Fill in the details to register a new training batch.</p>
            </div>

            <form action={createBatch} className="space-y-8 bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <BatchFormInput
                        type="number"
                        label="Batch ID"
                        name="batchId"
                        placeholder="e.g. 225"
                    />
                    <BatchFormInput
                        type="text"
                        label="Batch Name"
                        name="name"
                        placeholder="e.g. MERN Stack Development Batch 225"
                    />
                    <div className="md:col-span-2">
                        <BatchFormInput
                            type="text"
                            label="Current Topic"
                            name="currentTopic"
                            placeholder="e.g. Advanced State Management"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-zinc-200">Batch Timings</h3>
                        <button
                            type="button"
                            onClick={addTiming}
                            className="flex items-center gap-2 text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors"
                        >
                            <Plus size={16} /> Add Timing
                        </button>
                    </div>

                    <div className="space-y-3">
                        {timings.map((timing, index) => (
                            <div key={index} className="flex items-end gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                <div className="flex-[2]">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-zinc-400 mb-1">Day</label>
                                    <select
                                        value={timing.day}
                                        onChange={(e) => updateTiming(index, "day", e.target.value)}
                                        className="w-full bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg p-2.5 focus:ring-2 focus:ring-rose-500 outline-none transition-all"
                                    >
                                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
                                            <option key={day} value={day}>{day}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="flex-[2]">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-zinc-400 mb-1">Time</label>
                                    <input
                                        type="time"
                                        value={timing.time}
                                        onChange={(e) => updateTiming(index, "time", e.target.value)}
                                        className="w-full bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg p-2.5 focus:ring-2 focus:ring-rose-500 outline-none transition-all"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => removeTiming(index)}
                                    disabled={timings.length === 1}
                                    className="p-2.5 text-gray-400 hover:text-rose-500 disabled:opacity-30 disabled:hover:text-gray-400 transition-colors flex-shrink-0"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hidden input to send timings as JSON */}
                <input type="hidden" name="timings" value={JSON.stringify(timings)} />

                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-rose-500/20 transition-all active:scale-[0.98]"
                    >
                        Create Batch
                    </button>
                </div>
            </form>
        </div>
    );
}

function BatchFormInput({
    type, label, name, placeholder
}: {
    type: string, label: string, name: string, placeholder: string
}) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={"nb-" + name} className="text-sm font-medium text-gray-700 dark:text-zinc-400">{label}</label>
            <input
                id={"nb-" + name}
                type={type}
                name={name}
                className="bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg p-3 focus:ring-2 focus:ring-rose-500 outline-none transition-all placeholder:text-gray-400"
                placeholder={placeholder}
                required
            />
        </div>
    );
}