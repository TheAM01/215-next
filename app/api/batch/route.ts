import { NextRequest, NextResponse } from "next/server";
import { BatchData, Timings } from "@/types/batch";
import { batches } from "@/data/batchData";
import { headers, cookies } from "next/headers";


export async function GET(request: NextRequest) {
    const reqHeaders = await headers();
    const cookieStore = await cookies();

    cookieStore.set("page-limit", "5");
    // return NextResponse.json({ batches });
    return new Response("Hello!", {
        headers: {
            'Content-Type': 'text/plain',
            // 'Set-Cookie': "theme=light;"
        }
    })
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

// const { searchParams } = request.nextUrl;
//     const query = searchParams.get("query");

//     const page = Number(searchParams.get("page")) || 1;
//     const limit = Number(searchParams.get("limit")) || 10;

//     const skip = (page - 1) * limit;
//     const take = limit;

//     const paginatedBatches = batches.slice(skip, skip + take);

//     if (query) {
//         const filteredBatches = batches.filter((batch) => batch.name.toLowerCase().includes(query.toLowerCase()));
//         return NextResponse.json({ batches: filteredBatches });
//     }

// users 1000
// GET /users -> 10 users (page 1)
// GET /users?page=2&limit=20 -> 20 users (page 2)