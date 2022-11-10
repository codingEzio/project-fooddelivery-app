import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-12 ${
        flag ? 'overflow-x-scroll' : 'overflow-x-hidden'
      }`}
    >
      <div className="w-300 md:w-340 h-auto bg-cardOverlay my-12 p-2 bg-gray-150 rounded-lg hover:drop-shadow-lg backdrop-blur-lg">
        <div className="flex w-full items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.07 }}
            src="https://picsum.photos/300"
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
            Choco & Vanilla
          </p>
          <p className="mt-1 text-sm text-gray-500">455 calories</p>

          <div className="flex gap-8 items-center">
            <p className="text-lg font-semibold text-headingColor">
              <span className="text-sm text-red-500">$</span> 5.75
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
