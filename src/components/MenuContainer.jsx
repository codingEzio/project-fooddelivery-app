import React from 'react';

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
      </div>
    </section>
  );
};

export default MenuContainer;
