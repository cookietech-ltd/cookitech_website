import images from "@/config/images";
import React from "react";
import { motion } from "framer-motion";

const Divider = () => {
  return (
    <section className="relative flex items-center py-5 bg-white">
      <div className="flex-grow border-t border-gray-300"/>
      <div>
        <motion.img
          src={images.divideLogo}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="px-3"
        />
      </div>
      <div className="flex-grow border-t border-gray-300"/>
    </section>
  );
};

export default Divider;
