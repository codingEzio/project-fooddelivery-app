import React from 'react';

import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import HeroProduct from '../img/i1.png';

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

      <div className="py-2 flex flex-1 items-center relative">
        <img
          src={HeroBg}
          className="ml-auto w-full h-420 lg:w-auto lg:h-650"
          alt="Homepage background"
        />

        <div className="flex w-full h-full absolute top-0 left-0 px-32 py-4 items-center justify-center">
          <div className="flex flex-col w-190 p-4 bg-cardOverlay backdrop:blur-md rounded-3xl items-center justify-center">
            <img
              src={HeroProduct}
              className="w-40 -mt-20"
              alt="Homepage product"
            />
            <p className="text-xl font-semibold text-textColor my-1">Icecream</p>

            <p className="text-sm font-semibold text-lighttextGray my-1">
              Chocolate & Vanilla
            </p>

            <p className="text-sm font-semibold text-headingColor">
              <span className="text-ts text-red-600">$</span> 3.75
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
