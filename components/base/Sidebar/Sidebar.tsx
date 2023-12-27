import React from 'react';
import Menus from './Menus';
import Explorer from './Explorer';

const Sidebar = () => {
  return (
    <div className='bg-vscode-background-secondary w-1/4 flex h-screen fixed pt-9'>
      <Menus />
      <Explorer />
    </div>
  );
};

export default Sidebar;
