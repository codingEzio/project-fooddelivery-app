import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdFastfood } from 'react-icons/md';

import { categories } from '../utils/data';

const CreateContainer = () => {
  const [title, setTitle] = useState('');
  const [calories, setCalories] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(null);

  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState('danger');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <div className="flex flex-col w-[90%] md:w-[75%] border-gray-300 rounded-lg p-4 items-center justify-center gap-4">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full text-lg font-semibold text-center p-2  rounded-lg ${
              alertStatus === 'danger'
                ? 'bg-red-400 text-red-800'
                : 'bg-emerald-400 text-emerald-800'
            }`}
          >
            {message}
          </motion.p>
        )}

        <div className="flex w-full py-2 border-b border-gray-300 items-center gap-2">
          <MdFastfood className="text-xl text-gray-700" />

          <input
            type="text"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Input the title of the product"
            className="w-full h-full text-lg bg-transparent font-semibold placeholder:text-gray-300 outline-none border-none"
          />
        </div>

        <div className="w-full">
          <select
            onChange={e => setCategory(e.target.value)}
            className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
          >
            <option value="other" className="bg-white">
              Select Category
            </option>

            {categories &&
              categories.map(item => (
                <option
                  key={item.id}
                  value={item.urlParamName}
                  className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                >
                  {item.name}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
