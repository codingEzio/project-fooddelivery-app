import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdFastfood } from 'react-icons/md';

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
      <div className="flex flex-col w-[90%] md:w-[75%] border-gray-300 rounded-lg p-4 items-center justify-center">
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

        <div className="flex w-full py-2 border-b border-gray-300 items-center gap-4">
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
      </div>
    </div>
  );
};

export default CreateContainer;
