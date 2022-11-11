import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { RiRefreshFill } from 'react-icons/ri';

import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import emptyCart from '../img/emptyCart.svg';
import CartItem from './CartItem';

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();

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

      {/* Bottom */}
      {cartItems && cartItems.length > 0 ? (
        <div className="flex flex-col w-full h-full bg-cartBg rounded-t-[2rem]">
          <div className="flex flex-col w-full h-340 md:h-42 px-6 py-10 gap-3 overflow-y-scroll scrollbar-none">
            {/* Cart -> Item list */}
            {cartItems &&
              cartItems.map(item => <CartItem key={item.id} item={item} />)}
          </div>

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

            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full text-lg p-2 my-2 text-gray-50 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-full hover:shadow-lg"
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full text-lg p-2 my-2 text-gray-50 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-full italic hover:shadow-lg"
              >
                Log in Required
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full h-full gap-6 items-center justify-center">
          <img src={emptyCart} alt="No items in cart" className="w-300" />

          <p className="text-xl font-semibold text-textColor">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
