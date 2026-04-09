import { NextRequest, NextResponse } from "next/server";

interface Post {
    id: number;
    title: string;
    content: string;
}

let posts: Post[] = [
    {
        id: 1,
        title: "Post 1",
        content: "Content 1"
    },
    {
        id: 2,
        title: "Post 2",
        content: "Content 2"
    },
    {
        id: 3,
        title: "Post 3",
        content: "Content 3"
    }
]

export async function GET() {
    return NextResponse.json({ posts });
}

export async function POST(request: NextRequest) {

    const body = await request.json();
    const { title, content } = body;

    if (!title || !content) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const newPost: Post = {
        id: posts.length + 1,
        title,
        content
    }

    posts.push(newPost);
    return NextResponse.json({ message: "Received a POST request!", createdResource: newPost }, { status: 201 });
}