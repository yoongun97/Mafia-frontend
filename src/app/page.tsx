"use client";
import Image from "next/image";
import background from "../../public/img/home.jpg";
import { useRouter } from "next/navigation";
import { path } from "@/constants/PATH";

export default function Home() {
  const router = useRouter();

  // 로그인, 회원가입(supabase)
  // 유효성검사

  return (
    <div>
      <Image
        className="z-[-100] absolute top-0 left-0 h-screen w-screen"
        src={background}
        alt="HomeImg"
      />
      <div className="z-[-100] absolute top-0 left-0 bg-black/70 h-screen w-screen"></div>
      <main className="mt-96 flex gap-y-10 flex-col items-center">
        <h1 className="text-5xl text-white">Mafia</h1>
        <input className="focus:outline-none text-2xl py-2 px-4 border border-slate-100 rounded" />
        <button
          onClick={() => {
            router.push(path.roomlist);
          }}
          className="bg-black hover:bg-slate-600 text-white text-2xl py-2 px-4 border border-slate-100 rounded"
        >
          Start
        </button>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
