import React from 'react';
import { motion } from 'framer-motion';
import { BiMinus, BiPlus } from 'react-icons/bi';

const CartItem = ({ item }) => {
  return (
    <div className="flex w-full p-1 px-2 bg-cartItem rounded-lg gap-2 items-center">
      {/* product image */}
      <img
        src={item?.imageURL}
        alt="Cart item"
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
      />
      {/* product name and price */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50">{item?.title}</p>
        <p className="text-sm font-semibold text-gray-300 block">
          $ {item?.price}
        </p>
      </div>

      {/* product quantity (incr/decr) */}
      <div className="group flex ml-auto gap-2 cursor-pointer items-center">
        <motion.div whileTap={{ scale: 0.75 }}>
          <BiMinus className="text-gray-50" />
        </motion.div>

        <p className="flex w-5 h-5 text-gray-50 bg-cartBg rounded-sm items-center justify-center">
          {item?.quantity}
        </p>

        <motion.div whileTap={{ scale: 0.75 }}>
          <BiPlus className="text-gray-50" />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
