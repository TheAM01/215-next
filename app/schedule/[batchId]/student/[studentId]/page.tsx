import { batches } from "@/data/batchData"
import { BatchData } from "@/types/batch";
import BatchDisplay from "@/components/ui/BatchDetails";

// /batch/[batchId]/student/001

export default async function BatchSchedulePage(
    { params }:
    { params: Promise<{ batchId: string; studentId: string; }>}
) {

    const { batchId, studentId } = await params;
    const batch: (BatchData | undefined) = batches.find(b => b.id === parseInt(batchId))

    if (!batch) {
        return <div className="text-red-500">No batch found with id: {batchId}</div>
    }

    return (
        <div className="">
            <div className="text-2xl text-white">{studentId}</div>
            <BatchDisplay batch={batch}/>
        </div>
    )
}