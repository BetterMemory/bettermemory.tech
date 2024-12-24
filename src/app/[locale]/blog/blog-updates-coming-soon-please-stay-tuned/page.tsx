"use client"
import Image from "next/image";
import { useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Posts from "@/app/Components/Posts";

export default function Blog() {

  const router = useRouter();
  const t = useTranslations('HomePage');
  const t2 = useTranslations('Modal');

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/');
    
  };

  return (
    <div className="flex h-full bg-[#F5F4EF] pt-[48px] justify-center">
      <div className="flex m-4 flex-col max-w-3xl w-full bg-[#F5F4EF] item-center">
        <a href={'/'} target="_top">
          <Image src={"../../bm-logo.svg"} alt={"logo"} width={53} height={26}></Image>
        </a>
        
        <a className="pt-[56px] text-[28px] sm:text-[36px] font-bold sm:text-center text-left">{t('StayBlog')}</a>
        <a className="pt-[24px] sm:text-center text-left">Published:<span className="pl-[24px]">22.December 2024</span></a>
<a className="pt-[24px]">

We are about to publish our first blog post, which will be available in multiple languages, including English, Traditional Chinese, Korean, and Japanese. The post will cover our current progress and future plans. Stay tuned!
<br/><br/>
我們即將在博客上發布第一篇文章，內容將以多語言版本呈現，包括英文、繁體中文、韓語和日語。我們將分享公司目前的進展以及未來的計劃，敬請期待！
<br/><br/>
곧 블로그에 첫 번째 게시글을 게시할 예정입니다. 이 게시글은 영어, 번체 중국어, 한국어, 일본어를 포함한 여러 언어로 제공됩니다. 회사의 현재 진행 상황과 향후 계획에 대해 다룰 예정입니다. 많은 관심 부탁드립니다!
<br/><br/>
私たちは間もなくブログで最初の記事を公開します。この記事は英語、繁体字中国語、韓国語、日本語を含む多言語で提供されます。内容は、現在の進捗状況と今後の計画について紹介します。ぜひご期待ください！

</a>

        <div className="bg-black w-full h-[1px] mt-[32px] mb-[12px]" />
        <div className="flex flex-row justify-end">
          
        </div>
      </div>
    </div>
  );
}