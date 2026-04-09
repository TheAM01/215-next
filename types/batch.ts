
export interface Timings {
    day: string;
    time: string;
}

export interface BatchData {
    id: number,
    name: string,
    currentTopic: string,
    timings: Timings[]
}