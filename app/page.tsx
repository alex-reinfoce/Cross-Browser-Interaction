"use client";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center pt-[100px]">
      <div className="w-[100px] h-[100px] bg-amber-300" />
      <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
        发送到另一个页面
      </button>
    </div>
  );
}
