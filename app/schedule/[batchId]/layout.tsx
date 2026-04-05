import Link from "next/link";

export default function ScheduleLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <section className="w-screen flex flex-1 flex-col border-2 border-dashed border-gray-400 items-center justify-center">
            {children}

            <h2 className="text-2xl">Schedule Layout</h2>
            <p>This is a layout for the schedule page</p>
            <p>Check out schedules of other classes</p>
            <Link href="/schedule/214">214</Link>
            <Link href="/schedule/215">215</Link>
            <Link href="/schedule/216">216</Link>
            <Link href="/schedule/217">217</Link>
        </section>
    );
}