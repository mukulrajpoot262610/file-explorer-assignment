import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const Explorer = () => {
  return (
    <div className='p-3 text-vscode-foreground-dark text-xs w-full'>
      <div className='flex justify-between items-center px-2'>
        <h1 className='uppercase'>Explorer</h1>
        <MoreHorizontal className='h-4 w-4' />
      </div>
    </div>
  );
};

export default Explorer;
