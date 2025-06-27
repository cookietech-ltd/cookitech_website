import images from "@/config/images";
import React from "react";

const BookAppoinment = () => {
  return (
    <div>
      <div className="max-w-sm pb-12 md:max-w-lg">
        <div className="flex flex-col items-center justify-center max-w-lg space-y-6 md:max-w-xl">
          <img
            src={images.carouselImage1}
            className="absolute z-0 md:w-[34.7rem] object-cover w-full h-[38rem] md:h-[41rem] md:pr-10 "
          />
          <img src={images.appoinmentImage} className="relative z-10 w-full" />

          {/* <p className="relative z-10 text-xl font-semibold text-black underline decoration-red-500 decoration-2">
            {" "}
            Book Your Appointment
          </p>
          <p className="relative z-10 text-gray-500">
            We Help Customers Digital Transformation By IT Solutions
          </p>
          <div className="relative z-10 grid grid-cols-2 grid-rows-2 gap-4">
            <input
              placeholder="First Name"
              type="text"
              className="relative z-10 px-8 py-3 text-gray-500 bg-white border-2 md:w-60 focus:border-pink-600 focus:outline-none"
            />
            <input
              placeholder="Last Name"
              type="text"
              className="relative z-10 px-8 py-3 text-gray-500 bg-white border-2 md:w-60 focus:border-pink-600 focus:outline-none"
            />
            <input
              placeholder="Email"
              type="text"
              className="relative z-10 px-8 py-3 text-gray-500 bg-white border-2 md:w-60 focus:border-pink-600 focus:outline-none"
            />
            <input
              placeholder="Phone"
              type="text"
              className="relative z-10 px-8 py-3 text-gray-500 bg-white border-2 md:w-60 focus:border-pink-600 focus:outline-none"
            />
          </div>
          <button className="relative z-10 px-10 py-5 text-white bg-pink-600 hover:bg-zinc-900">
            Make A Request
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default BookAppoinment;
