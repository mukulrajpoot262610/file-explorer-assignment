import React from 'react';
import {
  AlignJustify,
  BoxIcon,
  BugPlayIcon,
  CogIcon,
  Files,
  GitBranch,
  Github,
  Search,
  UserCircle,
} from 'lucide-react';

const Menus = () => {
  return (
    <div className='w-12 bg-vscode-background-primary flex flex-col items-center py-2 text-vscode-foreground-dark'>
      <AlignJustify className='h-4 w-4 mb-2' />

      <div>
        <div className='h-12 w-12 border-l-2 flex justify-center items-center text-white cursor-pointer'>
          <Files className='' />
        </div>
        <div className='h-12 w-12 flex justify-center items-center cursor-pointer hover:text-vscode-text'>
          <Search className='' />
        </div>
        <div className='h-12 w-12 flex justify-center items-center cursor-pointer hover:text-vscode-text'>
          <GitBranch className='' />
        </div>
        <div className='h-12 w-12 flex justify-center items-center cursor-pointer hover:text-vscode-text'>
          <BugPlayIcon className='' />
        </div>
        <div className='h-12 w-12 flex justify-center items-center cursor-pointer hover:text-vscode-text'>
          <BoxIcon className='' />
        </div>
        <div className='h-12 w-12 flex justify-center items-center cursor-pointer hover:text-vscode-text'>
          <Github className='' />
        </div>
      </div>

      <div className='mt-auto mb-4'>
        <div className='h-12 w-12 flex justify-center items-center cursor-pointer hover:text-vscode-text'>
          <UserCircle className='' />
        </div>
        <div className='h-12 w-12 flex justify-center items-center cursor-pointer hover:text-vscode-text'>
          <CogIcon className='' />
        </div>
      </div>
    </div>
  );
};

export default Menus;
