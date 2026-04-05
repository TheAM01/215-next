export interface BatchData {
    id: number,
    name: string,
    currentTopic: string,
    timings: {
        day: string,
        time: string
    }[]
}