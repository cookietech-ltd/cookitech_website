import React from "react";
import CarouselComponent from "./CarouselComponent";
import SliderCard from "./SliderCard";
import images from "@/config/images";

const CarouselCard = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-12 space-y-20 bg-gradient-to-b from-white via-white to-cyan-100">
      <div>
        <div className="max-w-2xl text-center space-y-9">
          <p className="text-base font-semibold text-blue-900 underline decoration-red-500 decoration-2">
            {" "}
            Our Case Studies
          </p>
          <p className="md:text-5xl font-bold text-black text-2xl">
            IT Solutions & Projects
          </p>
          <p className="text-gray-500">
            Sit amet consectetur adipisicing elitm sed eiusmod temp sed
            incididunt labore dolore magna aliquatenim veniam quis ipsum nostrud
            exer citation ullamco laboris.
          </p>
        </div>
      </div>
      <CarouselComponent />
      <p className="text-black px-8 md:px-2">
        We’re ready to discover and unlock your potential.{" "}
        <strong className="text-blue-800">Get The Solutions</strong> or Call us
        Today! <strong className="text-blue-800">258-000-3694</strong>
      </p>
    </section>
  );
};

export default CarouselCard;
