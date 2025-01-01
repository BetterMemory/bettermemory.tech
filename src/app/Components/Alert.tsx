interface AlertProps {
  content: string;
  date: string;
  to: string;
}

export default function Alert({ content, date, to }: AlertProps) {
  return (
    <div className="flex flex-col w-full h-full pt-[12px] ">
      <div className="bg-white w-full h-[36px] content-center border border-[#FF0000]">
        <a className="pl-[8px]">{content}</a>
      </div>
    </div>
  );
}
