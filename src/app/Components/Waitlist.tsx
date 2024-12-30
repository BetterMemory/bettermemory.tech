'use client'

import Button from "../Components/Button";
import { useState } from "react";
import { Resend } from 'resend';
import { useTranslations } from 'next-intl';
 

const resend = new Resend(env.RESEND_API_KEY);

export function Waitlist() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const t = useTranslations('HomePage');

  const handleSubscribe = async () => {
    setLoading(true);
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }), // 发送用户输入的邮箱
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.log('Failed to send email:', result.error);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row pt-[24px]">
      <input
        type="email"
        placeholder={t('InputText')}
        value={email} // 将输入框的值绑定到状态
        onChange={(e) => setEmail(e.target.value)} // 更新状态
        className="mr-[6px] mb-[12px] border focus:outline-none focus:border-2 pl-2 border-black shadow-[inset_2px_2px_0px_#E0DFDB] h-[36px] w-full">
      </input>
      <Button 
  onClick={handleSubscribe} 
  text={loading ? t('WaitSubscribe') : t('Subscribe')} 
/>
    </div>
  );
}