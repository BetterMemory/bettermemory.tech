"use client"
import Image from "next/image";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useState } from "react";
import Modal from "../Components/Modal";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const t = useTranslations('HomePage');
  const t2 = useTranslations('Modal');
  const [isTextModalOpen, setIsTextModalOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '繁體中文' }
  ];


  const handleLanguageSelect = (code: string) => {
    // 将语言代码映射到正确的 locale
    const localeMap: { [key: string]: string } = {
      'zh': 'zh-Hant',
      'en': 'en'
    };

    const newLocale = localeMap[code];
    router.push(`/${newLocale}`);
    setIsLangModalOpen(false);
  };


  return (
    <div className="flex h-full bg-[#F5F4EF] pt-[48px] justify-center">
      <div className="flex m-4 flex-col max-w-3xl bg-[#F5F4EF] ">
        <Link href={'https://www.bettermemory.tech/'}>
          <Image src={"../bm-logo.svg"} alt={"logo"} width={53} height={26}></Image>
        </Link>
        <a className="pt-[48px] text-[16px] font-normal text-[#1E1E1D] "><span className="font-semibold">{t('title')}</span>{t('about')}</a>
        <a className="pt-[12px] text-[16px] font-normal text-[#1E1E1D]">{t('about-2')}</a>
        <div className="bg-black w-full h-[1px] mt-[32px] mb-[12px]" />
        <div className="flex flex-row justify-end">
          <button className="m-2 font-normal hover:underline underline-offset-1" onClick={() => setIsLangModalOpen(true)}>
            {t2('ModalTitle')}
          </button>

          <button className="m-2 font-normal hover:underline underline-offset-1" onClick={() => setIsTextModalOpen(true)}>
            {t('about-text')}
          </button>
        </div>






        <Modal
          isOpen={isTextModalOpen}
          onClose={() => setIsTextModalOpen(false)}
          type="text"
          content={t('about-text-ltd')}
          title={t('about-text')}
        />
        <Modal
          isOpen={isLangModalOpen}
          onClose={() => setIsLangModalOpen(false)}
          type="language"
          title="Language"
          languages={languages}
          onLanguageSelect={handleLanguageSelect}
        />


      </div>


    </div>
  );
}