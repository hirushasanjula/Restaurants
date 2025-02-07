import React from "react";
import BiryaniImg from "../../assets/food.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 sm:px-0">
          {/* Image section */}
          <div className="flex justify-center">
            <img
              src={BiryaniImg}
              alt="biryani img"
              className="max-w-[300px] sm:max-w-[430px] w-full drop-shadow-lg"
            />
          </div>

          
          <div className="flex flex-col justify-center gap-6 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Enjoy The Best Food
            </h1>
            <p className="text-sm text-gray-500 leading-6">
              Experience the taste of perfection with our carefully crafted dishes.
              <br />
              <br />
              We bring you the finest meals prepared with love and quality ingredients.
            </p>

            
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="flex items-center gap-3">
                <GrSecure className="text-6xl p-4 rounded-full bg-violet-100 dark:bg-violet-400 shadow-md" />
                <span className="text-sm font-medium">Secure Payments</span>
              </div>

              <div className="flex items-center gap-3">
                <IoFastFood className="text-6xl p-4 rounded-full bg-orange-100 dark:bg-orange-400 shadow-md" />
                <span className="text-sm font-medium">Delicious Food</span>
              </div>

              <div className="flex items-center gap-3">
                <GiFoodTruck className="text-6xl p-4 rounded-full bg-green-100 dark:bg-green-400 shadow-md" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
            </div>

            {/* Button */}
            <div>
              <button className="bg-gradient-to-r from-green-500 to-green-700 text-white py-2 px-6 rounded-full text-lg 
                shadow-lg hover:scale-105 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
