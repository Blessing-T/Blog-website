import dbConnect from "@/lib/mongoose";
import Blog from "@/models/blog";

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  author: string;
}

export default async function BlogListPage() {
  await dbConnect();
  const blogs: BlogPost[] = await Blog.find().lean();

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="space-y-4">
        {blogs.map((post: BlogPost) => (
          <div key={post._id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
            <p className="text-sm text-gray-500 mt-2">By {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
