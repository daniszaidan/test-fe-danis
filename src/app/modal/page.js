'use client';
import { cn } from '@/utils/utils';
import { useState } from 'react';
import ModalComponent from '@/components/modal';

export default function Modal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex justify-center items-center w-full h-screen flex-col gap-[30px]">
      <h1 className="text-2xl">The Modal</h1>

      <div className="flex items-center gap-[15px]">
        <button
          className={cn(
            'bg-white text-black py-[10px] px-[20px] cursor-pointer rounded-[10px]'
          )}
          onClick={() => setOpenModal(true)}
        >
          Open Modal
        </button>
        <ModalComponent
          open={openModal}
          close={() => setOpenModal(false)}
          title="Title Modal"
          contents="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
    </div>
  );
}
