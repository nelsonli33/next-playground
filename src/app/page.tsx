"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gray-100 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-5">
        歡迎來到遊戲首頁
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        點擊下面的按鈕開始你的挑戰！
      </p>
      <Link
        href="/game/chase-dot"
        className="px-6 py-3 text-lg text-white bg-blue-500 rounded-lg font-bold shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
      >
        前往追逐點點遊戲
      </Link>
    </main>
  );
}
