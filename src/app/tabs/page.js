'use client';
import { cn } from '@/utils/utils';
import { useState } from 'react';

const tabs = [
  { id: 'home', label: 'Home', content: 'Welcome to the Home tab!' },
  { id: 'profile', label: 'Profile', content: 'This is your profile.' },
  { id: 'settings', label: 'Settings', content: 'Adjust your settings here.' },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleKeyDown = (e, tabId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveTab(tabId);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen flex-col gap-[30px]">
      <h1 className="text-2xl">The Tabs</h1>

      <div className="flex items-center gap-[15px]">
        {tabs?.map((item, index) => (
          <button
            key={index}
            className={cn(
              'bg-black text-white py-[10px] px-[20px] cursor-pointer rounded-[10px]',
              activeTab === item?.id && 'bg-white text-black'
            )}
            onClick={() => setActiveTab(item?.id)}
          >
            {item?.label}
          </button>
        ))}
      </div>

      {tabs?.map((item, index) => (
        <div
          key={index}
          className={cn(
            'bg-[#20232A] p-[20px] rounded-[10px] w-[300px]',
            activeTab !== item?.id && 'hidden'
          )}
        >
          <h2 className="text-[20px] font-bold mb-[15px]">{item?.label}</h2>
          <p>{item?.content}</p>
        </div>
      ))}
    </div>
  );
}
