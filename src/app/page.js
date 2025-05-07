'use client';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center items-center w-full h-screen flex-col gap-[15px]">
      <h1 className="text-2xl">The Counter</h1>
      <button
        className="bg-white text-black py-[10px] px-[20px] cursor-pointer rounded"
        onClick={handleClick}
      >
        Clicked {count}
      </button>
    </div>
  );
}
