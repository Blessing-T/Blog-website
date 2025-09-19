"use client";

import { useState } from "react";

export default function CreateBlogPage() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Blog post created successfully!");
        setFormData({ title: "", content: "", author: "", });
      } else {
        setStatus(data.message || "Failed to create blog post");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred while creating the blog post.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Create Blog Post</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Post Title"
          className="w-full p-2 border rounded"
          required
        />
        
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          rows={5}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author Name"
          className="w-full p-2 border rounded"
          required
        />
        
        <input
          type="text"
          name="image"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
    </div>
  );
}
