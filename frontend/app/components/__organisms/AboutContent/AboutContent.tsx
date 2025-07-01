"use client";

import { useEffect, useState } from "react";
import { useAboutStore } from "@/app/store/useAboutStore";

export default function AboutPage() {
  const { content, setContent, loadAbout, updateAbout } = useAboutStore();
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    loadAbout();
  }, []);

  useEffect(() => {
    setInput(content);
  }, [content]);

  const handleSave = async () => {
    try {
      await updateAbout(input);
      setEditing(false);
    } catch (err) {
      console.error("Failed to update about:", err);
    }
  };

  return (
    <div className="max-w-[640px] mx-auto px-4 py-16 text-center min-h-[82vh] border-x-[1px] border-borderColor">
      <h1 className="text-2xl font-bold mb-4 border-b border-blue-300   inline-block pb-1">
        About Us
      </h1>

      {editing ? (
        <div className="space-y-4 mt-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded bg-background text-foreground min-h-[120px]"
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="space-y-4 mt-4">
          <p className="text-[17px] text-foreground">
            {content || "No content yet."}
          </p>
          <button
            onClick={() => setEditing(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
