import React from 'react';

const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-slate-300 p-6 px-16">
      {/* Desktop and Tablet */}
      <div className="hidden md:flex w-full p-4"></div>

      {/* Mobile */}
      <div className="flex md:hidden w-full h-full p-4"></div>
    </div>
  );
};

export default Header;
