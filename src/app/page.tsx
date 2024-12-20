import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#F5F4EF]">
      <div className="flex flex-col w-full bg-[#F5F4EF] sm:px-[30%] sm:pt-[72px] px-[20%] pt-[48px]">
        <Image src={"../bm-logo.svg"} alt={"logo"} width={53} height={26}></Image>
        

        <a className="pt-[48px] text-[16px] font-light text-[#1E1E1D] ">BETTERMEMORY is transforming how we learn and retain knowledge. By harnessing advanced algorithms and neuroscience insights, we create innovative solutions that enhance memory and accelerate learning. Our mission is to empower individuals to reach their full potential, making education more personalized, effective, and engaging for learners today and the visionaries of tomorrow.</a>
       

      {/* <div className="bg-black w-full h-[2px] my-[24px]"></div> */}
      <div className="flex flex-row">
        {/* <a className="font-bold">blog</a> */}
      </div>

      </div>
    </div>
  );
}