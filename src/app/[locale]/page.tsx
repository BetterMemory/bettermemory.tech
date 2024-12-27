"use client"
import Image from "next/image";

import { useTranslations } from 'next-intl';
import { useState } from "react";
import Modal from "../Components/Modal";
import { useRouter, useParams } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  const params = useParams();  // 添加這行
  const t = useTranslations('HomePage');
  const t2 = useTranslations('Modal');
  const [isTextModalOpen, setIsTextModalOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ja', name: '日本語' },
    { code: 'zh', name: '繁體中文' }
  ];


  const handleLanguageSelect = (code: string) => {
    // 将语言代码映射到正确的 locale
    const localeMap: { [key: string]: string } = {
      'zh': 'zh-Hant',
      'ja': 'ja',
      'en': 'en'
    };

    const newLocale = localeMap[code];
    router.replace(`/${newLocale}`);
    setIsLangModalOpen(false);
  };

  return (
    <div className="flex h-full selection:bg-black selection:text-white bg-[#F5F4EF] pt-[48px] justify-center">
      <div className="flex m-4 flex-col max-w-3xl bg-[#F5F4EF] item-center">
        <a href={'/'} target="_parent">
          <Image src={"../bm-logo.svg"} alt={"logo"} width={53} height={26}></Image>
        </a>
        <a className="cursor-default pt-[48px] text-[16px] font-normal text-[#1E1E1D]"><span className="font-semibold">{t('title')}</span>{t('about')}</a>
        <a className="cursor-default pt-[12px] text-[16px] font-normal text-[#1E1E1D]">{t('about-2')}</a>
        {/* <div className="flex sm:flex-row flex-col border-solid border-[#F6F6F6]">
          <div className="cursor-pointer border w-full h-[81px] hover:bg-[#ECECEC] border-[#000] bg-[#F5F4EF] mt-[24px] sm:mr-[6px]"></div>
          <div className="cursor-pointer border w-full h-[81px] hover:bg-[#ECECEC] border-[#000] bg-[#F5F4EF] sm:mt-[24px] mt-[12px] sm:ml-[6px]"></div>
        </div> */}

        <div className="bg-black w-full h-[1px] mt-[32px] mb-[12px]" />
        <div className="flex flex-row justify-end">

          <button className="m-2 opacity-85 hover:opacity-100 font-normal underline hover:decoration-2" onClick={() => router.replace(`/${params.locale}/blog`)}>
            {t2('BlogText')}
          </button>

          <button className="m-2 opacity-85 hover:opacity-100 font-normal underline hover:decoration-2" onClick={() => setIsLangModalOpen(true)}>
            {t2('ModalTitle')}
          </button>

          {/* <button className="m-2 opacity-85 hover:opacity-100 font-normal underline hover:decoration-2" onClick={() => setIsTextModalOpen(true)}>
            {t('about-text')}
          </button> */}
        </div>






        <Modal
          isOpen={isTextModalOpen}
          onClose={() => setIsTextModalOpen(false)}
          type="text"
          content={t('about-text-ltd')}
          title={t('modaleCompany')}
        />
        <Modal
          isOpen={isLangModalOpen}
          onClose={() => setIsLangModalOpen(false)}
          type="language"
          title={t2('ModalTitle2')}
          languages={languages}
          onLanguageSelect={handleLanguageSelect}
        />


      </div>


    </div>
  );
}