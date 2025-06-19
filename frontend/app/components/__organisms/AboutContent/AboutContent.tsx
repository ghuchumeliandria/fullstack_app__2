"use client";
import { useEffect, useState } from "react";

export default function AboutContent() {
  const [about, setAbout] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("about");
    if (saved) setAbout(saved);
  }, []);

  const handleSave = () => {
    localStorage.setItem("about", about);
    setEdit(false);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">About Me</h1>
      {edit ? (
        <>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full p-2 border rounded text-black"
            rows={8}
          />
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-1 rounded"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p className="whitespace-pre-line">{about || "No about text yet."}</p>
          <button
            onClick={() => setEdit(true)}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}
