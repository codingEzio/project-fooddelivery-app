import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Header, MainContainer, CreateContainer } from './components';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';
import { getAllFoodItems } from './utils/firebaseFunctions';

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        {/* note: Move the title closer to header on mobile */}
        <main className="mt-16 md:mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
