import React from 'react';
import { ChevronDown, ChevronRightIcon, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

const Explorer = () => {
  return (
    <div className='p-3 px-1 text-vscode-foreground-dark text-xs w-full'>
      <div className='flex justify-between items-center px-4 mb-2'>
        <h1 className='uppercase text-xs font-medium'>Explorer</h1>
        <MoreHorizontal className='h-4 w-4' />
      </div>

      <div className='cursor-pointer'>
        <div className='flex mb-1'>
          <ChevronDown className='h-4 w-4 font-bold' />
          <h2 className='font-bold uppercase text-xs tracking-wider'>
            SIGI Platform [Github]
          </h2>
        </div>

        <div className='w-full ml-2 p-1'>
          <div className='flex mb-1 items-center'>
            <ChevronRightIcon className='h-4 w-4 font-bold' />
            <Image
              src='/folder.svg'
              height={20}
              width={20}
              alt='Folder'
              className='mr-1'
            />
            <h2 className='font-semibold text-xs'>app</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
