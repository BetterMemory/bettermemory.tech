"use client";
import Image from "next/image";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Posts from "@/app/Components/Posts";

export default function Blog() {
  const router = useRouter();
  const t = useTranslations("HomePage");

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="flex h-full selection:bg-black selection:text-white bg-[#F5F4EF] pt-[48px] justify-center">
      <div className="flex m-4 flex-col max-w-3xl w-full bg-[#F5F4EF] item-center">
        <a href={"/"} target="_top">
          <Image
            src={"../bm-logo.svg"}
            alt={"logo"}
            width={53}
            height={26}
          ></Image>
        </a>
        <a className="cursor-default pt-[48px] text-[16px] font-normal text-[#1E1E1D] ">
          {t("BlogAbout")}
        </a>
        <Posts
          title={t("StayBlog")}
          date="22.December 2024"
          to="blog-updates-coming-soon-please-stay-tuned"
        ></Posts>

        <div className="bg-black w-full h-[1px] mt-[32px] mb-[12px]" />
        <div className="flex flex-row justify-end"></div>
      </div>
    </div>
  );
}
