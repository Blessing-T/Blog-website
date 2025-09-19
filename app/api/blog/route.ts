import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Blog from "@/models/blog";

export async function GET() {
  try {
    await dbConnect();
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json(blogs);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching blogs" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const { title, content, author, image } = body;

    if (!title || !content || !author) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const newPost = await Blog.create({ title, content, author, image });
    return NextResponse.json({ message: "Blog created!", post: newPost }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
