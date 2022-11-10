import React from 'react';

import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-start gap-5">
        <div className="px-4 py-2 flex items-center gap-2 justify-center rounded-lg bg-orange-200 p-2">
          <p className="text-base text-orange-500 font-semibold">
            Quantum Delivery
          </p>

          <div className="w-7 h-7 bg-white rounded-full drop-shadow-xl overflow-hidden">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="Delivry in Quantum's way"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide leading-normal text-headingColor ">
          The instant space-wrapping delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left">
          Ea consectetur minim sunt aliquip excepteur excepteur ea reprehenderit
          quis in. Excepteur anim nulla laborum eu mollit laborum consequat.
          Sunt laboris fugiat qui nisi eu fugiat id incididunt. Ipsum fugiat id
          id nostrud consectetur cupidatat.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>

      <div className="py-2 flex flex-1 items-center">
        <img
          src={HeroBg}
          className="ml-auto h-650"
          alt="Home page background"
        />

        <div className="w-full h-full absolute flex items-center justify-center"></div>
      </div>
    </section>
  );
};

export default HomeContainer;
