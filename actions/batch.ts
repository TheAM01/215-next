"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export async function createBatch(formData: FormData) {
    const batchId = Number(formData.get("batchId"));
    const name = formData.get("name") as string;
    const currentTopic = formData.get("currentTopic") as string;
    const timingsString = formData.get("timings") as string;
    const timings = JSON.parse(timingsString || "[]");

    if (!batchId || !name || !currentTopic || !timings) {
        throw new Error("Missing required fields");
    }

    const headersList = await headers();
    const host = headersList.get("host") || "127.0.0.1:3000";
    const protocol = host.includes("localhost") || host.includes("127.0.0.1") ? "http" : "https";
    const url = `${protocol}://${host}/api/batch`;

    console.log(`Attempting to POST to: ${url}`);

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: batchId,
                name,
                currentTopic,
                timings
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("API Response Error:", errorText);
            throw new Error(`Failed to create batch: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        console.log("Batch created successfully:", result.createdResource);
    } catch (error) {
        console.error("Fetch Error:", error);
        throw new Error("Network error or API is unreachable. Make sure the server is running.");
    }

    revalidatePath('/batch');
    redirect(`/batch/${batchId}`);
}

