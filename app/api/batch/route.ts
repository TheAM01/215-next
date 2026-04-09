import { NextRequest, NextResponse } from "next/server";
import { BatchData, Timings } from "@/types/batch";
import { batches } from "@/data/batchData";

// export interface BatchData {
//     id: number,
//     name: string,
//     currentTopic: string,
//     timings: {
//         day: string,
//         time: string
//     }[]
// }

// interface Timings {
//     day: string;
//     time: string;
// }

export async function GET() {
    return NextResponse.json({ batches });
}

export async function POST(request: NextRequest) {

    const body = await request.json();
    const { name, currentTopic, timings } = body;

    if (!name || !currentTopic || !timings) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    if (!Array.isArray(timings)) {
        return NextResponse.json({ message: "Timings must be an array" }, { status: 400 });
    }

    timings.forEach((timing: Timings) => {
        if (!timing.day || !timing.time) {
            return NextResponse.json({ message: "Invalid timing format" }, { status: 400 });
        }
    })

    const newBatch: BatchData = {
        id: batches[batches.length - 1].id + 1,
        name,
        currentTopic,
        timings
    }

    batches.push(newBatch);

    return NextResponse.json({ message: "Received a POST request!", createdResource: newBatch }, { status: 201 });
}