import images from "@/config/images";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section className="relative bg-white ">
      <div className="grid items-center justify-center grid-rows-2 p-6 space-y-3 md:flex">
        <div className="flex flex-col max-w-lg text-black md:max-w-2xl space-y-7">
          <p className="text-base font-semibold text-blue-900 underline decoration-red-500 decoration-2">
            {" "}
            Cookietech Ltd - Welcome to IT Solutions
          </p>
          <p className="text-4xl ">
            Let us be your next <strong>Preferred IT Partner</strong>
          </p>
          <p className="text-sm text-gray-600">
            Dolor sit amet, consectetur adipisicing elitm sed do eiusmod temp
            sed incididunt ut labore etsu dolore magna aliquatenim minim veniam
            quis ipsum nostrud exer citation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolorn reprehenderit voluptate
            velit esse.{" "}
          </p>

          <ul className="max-w-md space-y-1 text-sm text-gray-600">
            <li>
              <FontAwesomeIcon icon={faCheck} className="pr-3 text-red-500" />
              We are committed to providing quality IT Services
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="pr-3 text-red-500" />
              Our benefits are endless for local IT Companies & Startups
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="pr-3 text-red-500" />
              Really know the true needs and expectations of customers
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="pr-3 text-red-500" />
              Talented & experienced management solutions for IT
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="pr-3 text-red-500" />
              Processes of achieving the excellence and continue improvements
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="absolute w-16 h-16 bg-white rounded-full lg:h-24 lg:w-24" />
          <div className="grid grid-cols-2 grid-rows-2 gap-2 lg:gap-6">
            <motion.img
              src={images.introductionImgage1}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={images.introductionImgage2}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={images.introductionImgage3}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={images.introductionImgage4}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
