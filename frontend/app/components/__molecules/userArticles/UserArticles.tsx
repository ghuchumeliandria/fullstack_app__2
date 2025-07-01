"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TextLine from "../../__atoms/TextLine/TextLine";
import { BlogType } from "@/app/types/type";
import { axiosInstance } from "@/app/api/axios.instance";
import Articles from "../../__atoms/articles/Articles";
import { useUserStore } from "@/app/store/userStore";

export default function UserArticles() {
  const [blogPosts, setBlogPosts] = useState<BlogType[]>([]);
  const { user } = useUserStore();

  useEffect(() => {
    axiosInstance
      .get("/blogs")
      .then((res) => {
        const sorted = res.data.sort(
          (a: BlogType, b: BlogType) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setBlogPosts(sorted);
      })
      .catch((err) => console.error("Error loading blogs:", err));
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axiosInstance.delete(`/blogs/${id}`);
      setBlogPosts((prev) => prev.filter((post) => post._id !== id));
    } catch (err) {
      console.error("Failed to delete blog", err);
    }
  };

  return (
    <div className="w-full mt-12 flex flex-col gap-8 pb-12">
      <h1 className="text-[32px] font-extrabold font-DM_Sans text-foreground">
        <TextLine text="Latest Articles" />
      </h1>
      <div className="flex flex-col gap-6">
        {blogPosts.length === 0 ? (
          <h1>No Articles </h1>
        ) : (
          blogPosts.map((article) => (
            <Articles
              id={article._id}
              key={article._id}
              title={article.title}
              summary={article.summary}
              date={new Date(article.createdAt).toDateString()}
              authorName={article.author.fullName}
              showActions={user?._id === article.author._id}
              handleDelete={handleDelete}
            />
          ))
        )}
      </div>
      {blogPosts.length > 0 && (
        <div className="text-[18px] font-medium font-DM_Sans group relative">
          <Link href={"/blog"}>
            View My Articles
            <span className="absolute bottom-0 h-[3px] bg-[#93CEFC] group-hover:bg-purple-700 w-[134px] left-0"></span>
          </Link>
        </div>
      )}
    </div>
  );
}
