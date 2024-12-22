'use client'


interface PostsProps {
  title: string
}

export default function Posts({ title }: PostsProps) {
  return (
    <div className="flex flex-col ">
      <a className="cursor-pointer text-[16px] mt-5 opacity-85 hover:opacity-100 font-medium underline hover:decoration-2">{title}</a>
      <a className="cursor-default text-[12px] mt-2 opacity-85">22.December 2024</a>
    </div>
  );
}