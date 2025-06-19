import NewsletterForm from "@/app/components/__organisms/NewsletterForm/NewsletterForm";
import React from "react";

export default function NewsLetterPage() {
  return (
    <div className=" w-full  px-[9px]  max-w-[640px] mx-auto">
      <div className="w-full min-h-[85vh] pt-[50px] px-2.5 border-[1px] border-y-0 ">

        <NewsletterForm />
      </div>
    </div>
  );
}
