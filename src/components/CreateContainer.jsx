import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdFoodBank,
} from 'react-icons/md';
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from 'firebase/storage';

import { storage } from '../firebase.config';
import { categories } from '../utils/data';
import Loader from './Loader';
import { saveItem } from '../utils/firebaseFunctions';

const CreateContainer = () => {
  const [title, setTitle] = useState('');
  const [calories, setCalories] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);

  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState('danger');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const setFAM = (status, message) => {
    setFields(true);

    setAlertStatus(status);
    setMessage(message);
  };

  const uploadImage = e => {
    setIsLoading(true);

    const imageFile = e.target.files[0];

    const storageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
      snapshot => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      error => {
        console.log(error);

        setFields(true);
        setFAM('danger', 'Error when uploading, try again pls');

        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          setImageAsset(downloadURL);

          setIsLoading(false);
          setFAM('success', 'Image uploaded');

          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      },
    );
  };
  const deleteImage = () => {
    setIsLoading(true);

    const deleteRef = ref(storage, imageAsset);

    deleteObject(deleteRef).then(() => {
      setImageAsset(null);

      setIsLoading(false);
      setFAM('success', 'Image deleted successfully');

      setTimeout(() => {
        setFields(false);
      }, 400);
    });
  };

  const saveDetails = () => {
    setIsLoading(true);

    // Two scenarios
    //  doing upload -> (1) fields missing (2) full, start uploading
    // failed upload -> error
    try {
      if (!title || !calories || !imageAsset || !price || !category) {
        setFAM('danger', 'Required fields cannot be empty');

        setTimeout(() => {
          setFields(false);

          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          quantity: 1,
          price: price,
        };

        saveItem(data);

        setIsLoading(false);
        setFAM('success', 'Product data uploaded successfully');

        clearData();

        setTimeout(() => {
          setFields(false);
        }, 4000);
      }
    } catch (error) {
      console.log(error);

      setFAM('danger', 'Error while uploading, try again pls');

      setTimeout(() => {
        setFields(false);

        setIsLoading(false);
      }, 4000);
    }
  };

  const clearData = () => {
    setTitle('');
    setImageAsset(null);
    setCalories('');
    setPrice('');
    setCalories('Select Category');
  };

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
        <div className="flex flex-col group w-full h-225 md:h-420 cursor-pointer border-2 border-groove border-gray-300 rounded-lg items-center justify-center">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <label className="flex flex-col w-full h-full items-center justify-center cursor-pointer">
                  <div className="flex flex-col w-full h-full items-center justify-center gap-2">
                    <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />

                    <p className="text-gray-500 hover:text-gray-700">
                      Click here to upload
                    </p>
                  </div>

                  <input
                    type="file"
                    name="uploadImage"
                    accept="image/*"
                    onChange={uploadImage}
                    className="w-0 h-0"
                  />
                </label>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={imageAsset}
                      alt="The one awaits for upload"
                      className="w-full h-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={deleteImage}
                      className="absolute buttom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div className="flex flex-col md:flex-row w-full items-center gap-3">
          <div className="flex w-full py-2 border-b border-gray-300 items-enter gap-2">
            <MdFoodBank className="text-gray-700 text-2xl" />

            <input
              type="text"
              required
              value={calories}
              onChange={e => setCalories(e.target.value)}
              placeholder="Calories"
              className="w-full h-full text-lg bg-transparent font-semibold placeholder:text-gray-300 outline-none border-none"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full items-center gap-3">
          <div className="flex w-full py-2 border-b border-gray-300 items-enter gap-2">
            <MdAttachMoney className="text-gray-700 text-2xl" />

            <input
              type="text"
              required
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full h-full text-lg bg-transparent font-semibold placeholder:text-gray-300 outline-none border-none"
            />
          </div>
        </div>

        <div className="flex w-full items-center">
          <button
            type="button"
            className="w-full md:w-auto ml-0 md:ml-auto border-none outline-none px-12 py-2 text-white text-lg font-semibold bg-emerald-500 rounded-lg"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
