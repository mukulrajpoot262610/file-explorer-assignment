'use client';

import { ChevronDown, ChevronRightIcon, Folder } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

interface FolderCardProps {
  name: string;
  id: number;
  isFolder: boolean;
  items: FolderCardProps[];
}

const FolderCard = ({ name, id, isFolder, items }: FolderCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className='flex mb-1 items-center group'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isFolder ? (
          <>
            {isOpen ? (
              <ChevronDown className='h-4 w-4 font-bold' />
            ) : (
              <ChevronRightIcon className='h-4 w-4 font-bold' />
            )}

            <Image
              src='/folder.svg'
              height={20}
              width={20}
              alt='Folder'
              className='mr-1'
            />
          </>
        ) : (
          <>
            <div className='h-4 w-4'></div>
            <Image
              src='/react_ts.svg'
              height={20}
              width={20}
              alt='Folder'
              className='mr-1'
            />
          </>
        )}

        <h2 className='font-semibold text-xs group-hover:text-vscode-text'>
          {name}
        </h2>
      </div>
      <div className='ml-3'>
        {isOpen &&
          items.map((folder) => (
            <FolderCard
              name={folder.name}
              key={folder.id}
              id={folder.id}
              items={folder.items}
              isFolder={folder.isFolder}
            />
          ))}
      </div>
    </div>
  );
};

export default FolderCard;
