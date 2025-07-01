"use client";

import { useEffect, useState } from "react";
import TextLine from "../../__atoms/TextLine/TextLine";
import { axiosInstance } from "@/app/api/axios.instance";
import Articles from "../../__atoms/articles/Articles";
import { BlogType } from "@/app/types/type";

export default function AddBlog() {
  const [posts, setPosts] = useState<BlogType[]>([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const fetchMyBlogs = async () => {
    try {
      const res = await axiosInstance.get("/blogs/me");
      setPosts(res.data);
    } catch (err) {
      console.error("Failed to fetch user blogs:", err);
    }
  };

  useEffect(() => {
    fetchMyBlogs();
  }, []);

  const handleAdd = async () => {
    if (!title.trim()) return;

    try {
      await axiosInstance.post("/blogs", { title, summary });
      setTitle("");
      setSummary("");
      fetchMyBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axiosInstance.delete(`/blogs/${id}`);
      setPosts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Failed to delete blog", err);
    }
  };

  return (
    <div className="space-y-4 w-full max-w-[640px] mx-auto px-[9px]">
      <div className="w-full border-l-[1px] border-r-[1px] border-borderColor min-h-[82vh] bg-background text-foreground pt-8 px-2.5 pb-4">
        <TextLine text="Write here" />
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border text-black rounded my-3"
        />
        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full p-2 border text-black rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-1 rounded mt-2"
        >
          Add Article
        </button>

        <div className="mt-6 space-y-4">
          <TextLine text="My Articles" />
          {posts.length === 0 ? (
            <h1>No blog posts yet </h1>
          ) : (
            posts.map((p) => (
              <Articles
                key={p._id}
                id={p._id}
                title={p.title}
                summary={p.summary}
                date={new Date(p.createdAt).toDateString()}
                authorName={p.author?.fullName || "Unknown"}
                showActions={true}
                handleDelete={handleDelete}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
