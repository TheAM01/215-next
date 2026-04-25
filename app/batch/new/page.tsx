"use client";

import Loading from "@/app/loading";
import Spinner from "@/components/ui/Spinner";
import { useState } from "react";

interface BatchForm {
    batchId: string;
    name: string;
    maxStudents: number;
}

export default function NewBatchPage() {

    const [formData, setFormData] = useState<BatchForm>({
        batchId: "",
        name: "",
        maxStudents: 0,
    });
    const [submitting, setSubmitting] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        setSubmitting(prev => true);

        e.preventDefault();
        console.log(formData);

        try {

            const res = await fetch("/api/batch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log(data);
        } catch (err) {
            handleError(err);
        } finally {
            setSubmitting(prev => false);
        }
    };

    const handleError = (err: unknown) => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }



    return (
        <>
            <p className="italic text-gray-500">Fill in details below to create a new batch</p>
            <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-1 md:grid-cols-2">


                <BatchFormInput
                    type="text"
                    label="Batch ID"
                    name="batchId"
                    placeholder="Enter Batch ID"
                    handleChange={handleChange}
                />
                <BatchFormInput
                    type="text"
                    label="Batch Name"
                    name="name"
                    placeholder="Enter Batch Name"
                    handleChange={handleChange}
                />
                <BatchFormInput
                    type="number"
                    label="Max Students"
                    name="maxStudents"
                    placeholder="Enter Max Students"
                    handleChange={handleChange}
                />
                {/* <button
                    onClick={handleSubmit2}
                    className="h-min flex align-baseline bg-rose-500 text-white px-4 py-2 rounded-md cursor-pointer"
                >
                    Create Batch
                </button> */}

                {submitting
                    ? <Spinner />
                    : <input
                        type="submit"
                        value={submitting ? "Creating..." : "Create Batch"}
                        className={`${submitting ? "bg-rose-800 italic cursor-not-allowed text-gray-500" : "bg-rose-500 cursor-pointer"} h-min flex align-baseline text-white px-4 py-2 rounded-md `}
                        disabled={submitting}
                    />
                }
            </form>
        </>
    )
}

function BatchFormInput({
    type, label, name, placeholder, handleChange
}: {
    type: string, label: string, name: string, placeholder: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={"nb-" + name}>{label}</label>
            <input
                id={"nb-" + name}
                type={type}
                name={name}
                className="border border-gray-300 rounded-md p-2"
                placeholder={placeholder}
                onChange={handleChange}
                required={true}
            />
        </div>
    )
}