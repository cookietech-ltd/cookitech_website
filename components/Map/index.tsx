import images from "@/config/images";
import React from "react";
import Dot from "./Dot";

const Map = () => {
  return (
    <section className="py-24 bg-white">
      <div className="flex flex-col items-center space-y-24">
        <div className="max-w-lg space-y-6 md:max-w-2xl">
          <p className="text-sm font-semibold text-center text-blue-900 underline md:text-base decoration-red-500 decoration-2">
            {" "}
            Cookietech Ltd IT Services
          </p>
          <p className="text-2xl text-center text-black md:text-4xl font-lg">
            Trusted By 5M Cookietech Ltd IT Customers Around The World
          </p>
          <p className="text-xs text-center text-gray-600">
            Sit amet consectetur adipisicing elitm sed eiusmod temp sed
            incididunt labore dolore magna aliquatenim veniam quis ipsum nostrud
            exer citation ullamco laboris.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="absolute md:mb-44">
            <Dot />
          </div>
          {/* <div className="absolute mr-80 md:mb-80 md:mr-44">
            <Dot />
          </div>
          <div className="absolute md:mb-80 md:mr-[700px] mr-44 mb-52">
            <Dot />
          </div>
          <div className="absolute md:mt-80 md:mr-[600px] mr-72 mt-44">
            <Dot />
          </div>
          <div className="absolute md:mt-80 md:ml-[900px] ml-96 mt-40">
            <Dot />
          </div>
          <div className="absolute md:mb-96 md:ml-[700px] mb-44 ml-80">
            <Dot />
          </div> */}
          <img src={images.map} className="" />
        </div>
      </div>
    </section>
  );
};

export default Map;
