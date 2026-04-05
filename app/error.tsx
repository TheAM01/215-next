"use client";


export default function Error({ error, reset }: { error: Error; reset: () => void; }) {
    return (
        <div className="flex flex-col">
            <div className="text-2xl bg-red-800/40 text-red-500">Something went wrong!</div>
            <div className="text-gray-500">{error.message}</div>

            <button
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    )
}