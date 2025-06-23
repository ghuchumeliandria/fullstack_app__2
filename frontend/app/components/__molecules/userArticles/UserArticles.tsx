"use client";
import { useEffect, useState } from "react";
import Articles from "../../__atoms/articles/Articles";
import Link from "next/link";
import TextLine from "../../__atoms/TextLine/TextLine";
import { BlogType } from "@/app/types/type";

export default function UserArticles() {
  const [blogPosts, setBlogPosts] = useState<BlogType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("posts");
    if (stored) {
      const parsed = JSON.parse(stored);
      setBlogPosts(parsed.slice(-5).reverse());
      console.log(new Date());
    }
  }, []);

  const handleDelete = (id: string) => {
    console.log("shemovida");
    const filteredblogs = blogPosts.filter(
      (el) => Number(el.id) !== Number(id)
    );
    localStorage.setItem("posts", JSON.stringify(filteredblogs));
    setBlogPosts(filteredblogs);
  };

  return (
    <div className="w-full mt-12 flex flex-col gap-8 pb-12 ">
      <h1 className="text-[32px] font-extrabold font-DM_Sans text-foreground">
        <TextLine text="Latest Articles" />
      </h1>
      <div className="flex flex-col gap-6">
        {blogPosts.length === 0 ? (
          <h1>No Articles </h1>
        ) : (
          blogPosts.map((article, index) => (
            <Articles
              title={article.title}
              date={article.date}
              summary={article.summary}
              id={article.id}
              handleDelete={handleDelete}
              key={index}
            />
          ))
        )}
      </div>
      {blogPosts.length > 0 && (
        <div className="text-[18px] font-medium font-DM_Sans group relative">
          <Link href={"/blog"}>
            View all Articles
            <span className="absolute bottom-0 h-[3px] bg-[#93CEFC] group-hover:bg-purple-700 w-[134px] left-0"></span>
          </Link>
        </div>
      )}
    </div>
  );
}
