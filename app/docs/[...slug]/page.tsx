"use client";

import { use } from "react";


export default function BatchSchedulePage({
    params, searchParams
}: {
    params: Promise<{ slug: string[] }>;
    searchParams: Promise<{ lang?: "en" | "fr" | "de" | "es" }>
}) {

    const { slug } = use(params);
    const { lang = "en" } = use(searchParams);

    const languages: Record<string, string> = {
        "en": "English",
        "fr": "French",
        "de": "German",
        "es": "Spanish"
    }

    return (
        <div className="">
            <span>Language: {languages[lang] ?? "English"}</span>
            {
                slug.map((s, i) => (
                    <div className="" key={s + i}>{s}</div>
                ))
            }
        </div>
    )
}