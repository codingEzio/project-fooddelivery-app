import React, { useState } from 'react';
import { IoFastFood } from 'react-icons/io5';

const MenuContainer = () => {
  return (
    <section className="w-full my-6" id="menu">
      <div className="flex flex-col w-full items-center justify-center">
        <p
          className="relative text-2xl text-headingColor font-semibold capitalize
          before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all margin mr-auto ease-in-out duration-100"
        >
          Our hot dishes
        </p>

        <div className="flex w-full lg:justify-center items-center justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          <div className="flex flex-col w-24 min-w-[94px] h-28 bg-card hover:bg-cartNumBg group cursor-pointer rounded-lg drop-shadow-xl gap-3 transition-all ease-in-out duration-150 items-center justify-center">
            <div className="flex w-10 h-10 bg-cartNumBg group-hover:bg-card rounded-full items-center justify-center">
              <IoFastFood className="text-card text-lg group-hover:text-textColor" />
            </div>

            <p className="text-sm text-textColor group-hover:text-white">
              Category
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
