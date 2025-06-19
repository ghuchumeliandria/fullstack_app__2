"use client";
import { useEffect, useState } from "react";

export default function BlogEditor() {
  const [posts, setPosts] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("posts");
    if (saved) setPosts(JSON.parse(saved));
  }, []);

  const handleAdd = () => {
    const newPost = { title, summary, date: date || new Date().toDateString() };
    const updated = [...posts, newPost];
    setPosts(updated);
    localStorage.setItem("posts", JSON.stringify(updated));
    setTitle("");
    setSummary("");
  };

  return (
    <div className="space-y-4 w-full max-w-[640px] mx-auto px-[9px]   ">
      <div className=" w-full border-[1px] border-t-0 border-b-0 min-h-[84vh] pt-8 px-2.5 pb-4 border-borderColor">

        <h1 className="text-2xl font-bold ">My Articles</h1>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded text-black mb-2"
        />
        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full p-2 border rounded text-black"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Add Article
        </button>

        <div className="mt-6 space-y-4">
          <h1>All Articles</h1>
          {posts.length === 0 ? <h1>No blog posts yet </h1> :
            posts.map((p, i) => (
              <div key={i} className="border p-4 rounded bg-white text-black">
                <h2 className="font-bold">{p.title}</h2>
                <p className="italic text-sm">{p.date}</p>
                <p>{p.summary}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
