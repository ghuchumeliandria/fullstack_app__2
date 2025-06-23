"use client";
import { useEffect, useState } from "react";
import TextLine from "../../__atoms/TextLine/TextLine";

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
    <div className="space-y-4 ">
      <div className="w-full min-h-[84vh] px-2.5 border-[1px] flex justify-center items-center flex-col border-y-0 border-borderColor bg-background text-foreground">
        <TextLine text="About Us" />
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
              className="bg-green-600 text-white w-[100px] mx-auto mt-2 px-4 py-1 rounded"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <div className="max-w-[360px] rounded-xl p-4 mx-auto shadow bg-background border border-borderColor">
              <p className="whitespace-pre-line">
                {about || "No about text yet."}
              </p>
            </div>
            <button
              onClick={() => setEdit(true)}
              className="bg-blue-500 text-white w-[100px] mx-auto mt-2 px-4 py-1 rounded"
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
}
