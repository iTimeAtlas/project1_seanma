import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <h1 className="text-8xl">This is Sean Ma Project!</h1>
      </header>
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        <ul>
          <li>
          <Link className="text-lg bg-cyan-700" href="./quizSection/">
            Try out a quiz!
          </Link>
          </li>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
