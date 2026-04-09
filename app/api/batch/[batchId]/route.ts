import { NextRequest, NextResponse } from "next/server";
import { batches } from "@/data/batchData";

export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ batchId: string }> }
) {

    const { batchId } = await params;

    const batch = batches.find(b => b.id === parseInt(batchId));

    if (!batch) {
        return NextResponse.json({ message: "Batch not found" }, { status: 404 });
    }

    return NextResponse.json({ batch });
}

export async function DELETE(
    _request: NextRequest,
    { params }: { params: Promise<{ batchId: string }> }
) {
    const { batchId } = await params;

    const batch = batches.find(b => b.id === parseInt(batchId));

    if (!batch) {
        return NextResponse.json({ message: "Batch not found" }, { status: 404 });
    }

    batches.splice(batches.indexOf(batch), 1);

    return NextResponse.json({ message: "Batch deleted successfully" });
}

export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ batchId: string }> }
) {
    const { batchId } = await params;

    const batch = batches.find(b => b.id === parseInt(batchId));

    if (!batch) {
        return NextResponse.json({ message: "Batch not found" }, { status: 404 });
    }

    const body = await request.json();
    const { name, currentTopic, timings } = body;

    if (name) {
        batch.name = name;
    }

    if (currentTopic) {
        batch.currentTopic = currentTopic;
    }

    if (timings) {
        batch.timings = timings;
    }

    return NextResponse.json({ message: "Batch updated successfully", batch });
}
