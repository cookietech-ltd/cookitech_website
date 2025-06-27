import images from "@/config/images";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const ParallexBanner = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  });

  const objectPosition = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0px 0%", "0px 80%", "0px 100%"]
  );

  return (
    <section
      className="flex flex-col items-center justify-center mt-24 bg-white pb-44 "
      ref={targetRef}
    >
      <div className=" md:max-w-3xl py-20 lg:mr-[40rem] text-center text-black bg-white md:px-28 space-y-9 relative z-10 max-w-sm px-12">
        <FontAwesomeIcon
          icon={faComments}
          className="text-pink-600 scale-[3]"
        />
        <p className="text-blue-700">
          Best Services from Cookietech Ltd IT Solutions!
        </p>
        <p>
          Quis nostrud exercitation duis aute irure dolor reprehenderit
          voluptate. velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecas cupidatat non proident, sunt in culpa qui
          officia deserunt.
        </p>
        <div>
          <p className="font-semibold">Saren Matthew</p>
          <p className="text-xs">CEO, IT Works</p>
        </div>
      </div>
      <div className="absolute z-0 w-full overflow-hidden h-[45rem]">
        <motion.img
          src={images.parallexBannerImage}
          className="relative object-cover object-center w-full h-full"
          style={{ objectPosition: objectPosition }}
        />
      </div>
    </section>
  );
};

export default ParallexBanner;
