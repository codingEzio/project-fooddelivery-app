import React, {useState} from 'react';

const CreateContainer = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);

  const [fields, setFields] = useState(true);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <div className="flex flex-col w-[90%] md:w-[75%] border-gray-300 rounded-lg p-4 items-center justify-center">
        1
      </div>
    </div>
  );
};

export default CreateContainer;
