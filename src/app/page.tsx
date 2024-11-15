import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <footer className="row-start-1 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/docs.svg"
            alt="File icon"
            width={24}
            height={24}
          />
          Docs
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/post.svg"
            alt="Post icon"
            width={24}
            height={24}
          />
          Blog
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={24}
            height={24}
          />
          Company
        </a>
      
      </footer>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          // className="dark:invert"
          src="/BetterMemoryLogo-W-F-M-B.png"
          alt="Next.js logo"
          width={1024}
          height={480}
          // priority
        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://x.com/BetterMemoryLtd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/x.svg"
            alt="X icon"
            width={20}
            height={20}
          />
          X(Twitter)
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/BetterMemory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={20}
            height={20}
          />
          Github
        </a>
      </footer>
    </div>
  );
}
