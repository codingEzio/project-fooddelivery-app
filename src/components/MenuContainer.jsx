import React, { useEffect, useState } from 'react';
import { IoFastFood } from 'react-icons/io5';

import { categories } from '../utils/data';

const MenuContainer = () => {
  const [filter, setFilter] = useState('chicken');

  useEffect(() => {}, [filter]);

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
          {categories &&
            categories.map(sole_category => (
              <div
                key={sole_category.id}
                className={`flex flex-col w-24 min-w-[94px] h-28 ${
                  filter === sole_category.urlParamName
                    ? 'bg-cartNumBg'
                    : 'bg-card'
                } hover:bg-cartNumBg group cursor-pointer rounded-lg drop-shadow-xl gap-3 transition-all ease-in-out duration-150 items-center justify-center`}
                onClick={() => setFilter(sole_category.urlParamName)}
              >
                <div
                  className={`flex w-10 h-10 shadow-lg ${
                    filter === sole_category.urlParamName
                      ? 'bg-white'
                      : 'bg-cartNumBg'
                  } group-hover:bg-white rounded-full items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === sole_category.urlParamName
                        ? 'text-textColor'
                        : 'text-white'
                    } text-lg group-hover:text-textColor`}
                  />
                </div>

                <p
                  className={`text-sm ${
                    filter === sole_category.urlParamName
                      ? 'text-white'
                      : 'text-textColor'
                  } group-hover:text-white`}
                >
                  {sole_category.name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
