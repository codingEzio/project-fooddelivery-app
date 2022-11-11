import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from 'react-icons/ri';
import { BiMinus, BiPlus } from 'react-icons/bi';

const CartContainer = () => {
  return (
    <div className="flex flex-col fixed w-full md:w-375 h-screen top-0 right-0 z-[101] bg-white drop-shadow-md">
      <div className="flex w-full p-4 cursor-pointer items-center justify-between">
        {/* Buttons */}
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

      {/* Buttom */}
      <div className="flex flex-col w-full h-full bg-cartBg rounded-t-[2rem]">
        <div className="flex flex-col w-full h-340 md:h-42 px-6 py-10 gap-3 overflow-y-scroll scrollbar-none">
          {/* Cart Item */}
          <div className="flex w-full p-1 px-2 bg-cartItem rounded-lg gap-2 items-center">
            {/* product image */}
            <img
              src="https://picsum.photos/200"
              alt="Cart item"
              className="w-20 h-20 max-w-[60px] rounded-full object-contain"
            />
            {/* product name and price */}
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-50">Choco Vanilla</p>
              <p className="text-sm font-semibold text-gray-300 block">$15.5</p>
            </div>

            {/* product quantity (incr/decr) */}
            <div className="group flex ml-auto gap-2 cursor-pointer items-center">
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiMinus className="text-gray-50" />
              </motion.div>

              <p className="flex w-5 h-5 text-gray-50 bg-cartBg rounded-sm items-center justify-center">
                1
              </p>

              <motion.div whileTap={{ scale: 0.75 }}>
                <BiPlus className="text-gray-50" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
