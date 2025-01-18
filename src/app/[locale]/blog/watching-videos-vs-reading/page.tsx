"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import PostsInfo from "@/app/Components/PostsInfo";

export default function Blog() {
  const t3 = useTranslations("blog-2");

  return (
    <div className="flex cursor-default h-full selection:bg-black selection:text-white bg-[#F5F4EF] pt-[48px] justify-center">
      <div className="flex m-4 flex-col max-w-3xl w-full bg-[#F5F4EF] item-center">
        <a href={"/"} target="_top">
          <Image
            src={"../../bm-logo.svg"}
            alt={"logo"}
            width={53}
            height={26}
          ></Image>
        </a>

        <a className="pt-[56px] text-[28px] sm:text-[36px] font-mono font-bold sm:text-center text-left">
          {t3("title")}
        </a>
        <PostsInfo date={t3("date")} author={t3("author")}></PostsInfo>
        <a className="pt-[24px]"> {t3("content")}</a>

        <div className="bg-black w-full h-[1px] mt-[32px] mb-[12px]" />
        <div className="flex flex-row justify-end"></div>
      </div>
    </div>
  );
}
