import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from 'react-icons/ri';

const CartContainer = () => {
  return (
    <div className="flex flex-col fixed w-full md:w-375 h-screen top-0 right-0 z-[101] bg-white drop-shadow-md">
      <div className="flex w-full p-4 cursor-pointer items-center justify-between">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace className="text-3xl text-textColor" />
        </motion.div>
        <p className="text-lg font-semibold text-textColor">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex p-1 px-2 my-2 text-base text-textColor bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer items-center gap-2"
        >
          Clear <RiRefreshFill />{' '}
        </motion.p>
      </div>
    </div>
  );
};

export default CartContainer;
