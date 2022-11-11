import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from 'react-icons/ri';
import { BiMinus, BiPlus } from 'react-icons/bi';

import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const CartContainer = () => {
  const [{ cartShow, cartItems }, dispatch] = useStateValue();

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="flex flex-col fixed w-full md:w-375 h-screen top-0 right-0 z-[101] bg-white drop-shadow-md"
    >
      <div className="flex w-full p-4 cursor-pointer items-center justify-between">
        {/* Buttons */}
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <MdOutlineKeyboardBackspace className="text-3xl text-textColor" />
        </motion.div>
        <p className="text-lg font-semibold text-textColor">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex p-1 px-2 my-2 text-base text-textColor bg-gray-100 rounded-md hover:shadow-md cursor-pointer items-center gap-2"
        >
          Clear <RiRefreshFill />{' '}
        </motion.p>
      </div>

      {/* Buttom */}
      <div className="flex flex-col w-full h-full bg-cartBg rounded-t-[2rem]">
        <div className="flex flex-col w-full h-340 md:h-42 px-6 py-10 gap-3 overflow-y-scroll scrollbar-none">
          {/* Cart -> Item list */}
          {cartItems &&
            cartItems.map(item => (
              <div
                key={item.id}
                className="flex w-full p-1 px-2 bg-cartItem rounded-lg gap-2 items-center"
              >
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
            ))}

          {/* Cart -> Total Summary */}
          <div className="flex flex-col flex-1 w-full px-8 py-2 bg-cartTotal rounded-t-[2rem] items-center justify-evenly">
            <div className="flex w-full items-center justify-between">
              <p className="text-gray-400 text-lg">Sub Total</p>
              <p className="text-gray-400 text-lg">$ 8.5</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p className="text-gray-400 text-lg">Delivery</p>
              <p className="text-gray-400 text-lg">$ 3.0</p>
            </div>

            <div className="w-full my-2 border-b border-gray-600"></div>

            <div className="flex w-full items-center justify-between">
              <p className="text-xl text-gray-200 font-semibold">Total</p>
              <p className="text-xl text-gray-200 font-semibold">$11.5</p>
            </div>

            <motion.button
              whileTap={{ scale: 0.8 }}
              type="button"
              className="w-full text-lg p-2 my-2 text-gray-50 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-full hover:shadow-lg"
            >
              Check Out
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartContainer;
