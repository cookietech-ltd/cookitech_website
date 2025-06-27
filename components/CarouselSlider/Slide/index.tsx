import images from "@/config/images";
import { motion } from "framer-motion";
import React from "react";

const Slide = () => {
  return (
    <motion.section className="relative ">
      <div className="flex justify-center">
        <div className="flex items-center justify-center py-16">
          <div className="flex flex-col max-w-sm p-4 space-y-8 text-center md:max-w-xl md:text-left">
            <motion.p className="font-semibold text-blue-800 underline animate-one decoration-red-500 decoration-2">
              IT Solutions For Easy Integration
            </motion.p>
            <motion.p className="text-3xl text-black md:text-5xl font-base animate-two">
              Deliver Inovative <strong>IT Solution</strong> for Technology
              Insight
            </motion.p>
            <motion.p className="font-medium text-black md:font-semibold animate-three">
              Building a relationship between IT companies & experts
            </motion.p>
            {/* <motion.div className="flex flex-col space-y-6 md:space-x-6 animate-four md:grid md:grid-cols-2 md:space-y-0">
              <button className="py-4 text-base font-semibold text-white bg-pink-500 px-7 hover:bg-zinc-800">
                More Details
              </button>
              <button className="py-4 text-base font-semibold text-white bg-purple-950 px-7 hover:bg-zinc-800">
                Our Services
              </button>
            </motion.div> */}
          </div>
          <div className="hidden lg:block">
            <motion.img
              src={images.carouselImage2}
              className="absolute animate-six"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            />
            <motion.img
              src={images.carouselImage1}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="animate-five"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Slide;
