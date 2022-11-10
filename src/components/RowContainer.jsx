import React, { useEffect, useRef } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainerRef = useRef();

  useEffect(() => {
    rowContainerRef.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainerRef}
      className={`flex w-full my-12 gap-3 items-center scroll-smooth ${
        flag
          ? 'overflow-x-scroll scrollbar-none'
          : 'overflow-x-hidden flex-wrap'
      }`}
    >
      {data &&
        data.map(item => (
          <div
            key={item?.id}
            className="flex flex-col w-300 h-[225px] min-w-[300px] md:w-340 md:min-w-[340px] bg-cardOverlay my-12 p-2 bg-gray-150 rounded-lg hover:drop-shadow-lg backdrop-blur-lg items-center justify-between"
          >
            <div className="flex w-full items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.07 }}
                src={item?.imageURL}
                alt="Random"
                className="w-40 -mt-8 drop-shadow-2xl"
              />

              <motion.div
                whileTap={{ scale: 0.75 }}
                className="flex w-8 h-8 rounded-full bg-red-600 hover:shadow-md cursor-pointer items-center justify-center"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="flex flex-col w-full items-end justify-end">
              <p className="text-base md:text-lg font-semibold text-textColor ">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>

              <div className="flex gap-8 items-center">
                <p className="text-lg font-semibold text-headingColor">
                  <span className="text-sm text-red-500">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
