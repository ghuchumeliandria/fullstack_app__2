"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { axiosInstance } from "@/app/api/axios.instance";
import { getCookie } from "cookies-next";

export default function EditBlog() {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id as string;

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  useEffect(() => {
    axiosInstance.get(`/blogs/${blogId}`).then((res) => {
      setTitle(res.data.title);
      setSummary(res.data.summary);
    });
  }, [blogId]);

  const handleUpdate = async () => {
    try {
      await axiosInstance.patch(`/blogs/${blogId}`, { title, summary });
      router.push("/blog");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4 mt-10">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2"
        placeholder="Title"
      />
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full border p-2"
        placeholder="Summary"
      />
      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  );
}
