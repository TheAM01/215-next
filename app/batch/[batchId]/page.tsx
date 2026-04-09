import { batches } from "@/data/batchData"
import { BatchData } from "@/types/batch";
import BatchDisplay from "@/components/ui/BatchDetails";
import { Metadata } from "next";

type BatchSchedulePageProps = {
    params: Promise<
        {
            batchId: string
        }
    >
}

export const generateMetadata = async (
    { params }: BatchSchedulePageProps
): Promise<Metadata> => {

    const batchId = await params;
    const batchName = batches.find(b => b.id === parseInt(batchId.batchId))?.name

    return {
        title: {
            absolute: `${batchName ?? "Batch Not Found"}`
        },
        description: `${batchName ?? "Batch Not Found"} - 215Demo`,
        keywords: ["Schedule", "215Demo", "NextDemo", "215Next"],
        authors: [{ name: "John Doe" }],
    }

}

export default async function BatchSchedulePage(
    { params }: BatchSchedulePageProps
) {

    const { batchId } = await params;
    const batch: (BatchData | undefined) = batches.find(b => b.id === parseInt(batchId))

    if (!batch) {
        return <div className="text-red-500">No batch found with id: {batchId}</div>
    }

    return (
        <div className="">
            <BatchDisplay batch={batch} />
        </div>
    )
}
