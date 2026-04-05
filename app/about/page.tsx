import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
    title: "XYZ",
    description: "About page",
    keywords: ["About", "215Demo", "NextDemo", "215Next"],
    authors: [{ name: "John Doe" }],
    creator: "John Doe",
    publisher: "John Doe",
    openGraph: {
        title: "About - 215Demo",
        description: "About page",
        type: "website",
        url: "https://215demo.vercel.app/about",
        siteName: "215Demo",
        images: [
            {
                url: "https://215demo.vercel.app/og-image.png",
                width: 1200,
                height: 630,
                alt: "About - 215Demo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About - 215Demo",
        description: "About page",
        images: ["https://215demo.vercel.app/og-image.png"],
    },
}

export default function AboutPage() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center gap-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={100}
                    height={20}
                    priority
                />
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        About
                    </h1>
                    <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        This is the about page for our Next.js page!
                    </p>
                </div>

            </main>
        </div>
    );
}
