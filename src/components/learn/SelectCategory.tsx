import React from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';


export default function SelectCategory() {

  return (
    <div className='w-full max-w-[784px] h-11 border-2 border-black rounded-md mb-5'>
      <DropdownMenu.Root >

        <DropdownMenu.Trigger asChild>
          <div className="cursor-pointer text-black  px-5 flex items-center justify-between w-full h-full font-inter font-semibold">
            Alphabet
            <ChevronDownIcon />
          </div>
        </DropdownMenu.Trigger>




        <DropdownMenu.Portal>

          <DropdownMenu.Content sideOffset={5} className='bg-white w-screen max-w-[800px] px-2'>

            <DropdownMenu.Item className="rounded-md p-1 border-2 border-black mb-1 font-inter font-semibold cursor-pointer text-base text-zinc-900 focus:bg-stone-300/80 focus:outline-none">
              Alphabet
            </DropdownMenu.Item>

            <DropdownMenu.Item className="rounded-md p-1 border-2 border-black mb-1 font-inter font-semibold cursor-pointer text-base text-zinc-900 focus:bg-stone-300/80 focus:outline-none">
              Number
            </DropdownMenu.Item>

            <DropdownMenu.Item className="rounded-md p-1 border-2 border-black mb-1 font-inter font-semibold cursor-pointer text-base text-zinc-900 focus:bg-stone-300/80 focus:outline-none">
              Minimal Pair
            </DropdownMenu.Item>

            <DropdownMenu.Arrow className="DropdownMenuArrow" />
          </DropdownMenu.Content>

        </DropdownMenu.Portal>

      </DropdownMenu.Root>

    </div>
  )
}
