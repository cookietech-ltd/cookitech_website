import React from "react";
import ListCard from "./ListCard";
import data from "@/config/data";
import BookAppoinment from "./BookAppoinment";
import { motion } from "framer-motion";

const Appoinment = () => {
  return (
    <section className="w-full h-full px-8 py-24 bg-white md:px-1">
      <div className="grid items-center justify-center w-full h-full lg:space-x-32 lg:flex">
        <div className="max-w-lg p-4 text-left space-y-9 lg:p-0">
          <p className="text-base font-semibold text-blue-900 underline decoration-red-500 decoration-2">
            {" "}
            Cookietech Ltd - Welcome to IT Solutions
          </p>
          <p className="text-4xl text-black">
            Why Choose <strong>Cookietech Ltd IT Solutions</strong>
          </p>
          <p className="text-gray-500">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet velit
            sed quia non numquam eius modi tempora incidunt labore.
          </p>
          {data.listInfo.map((info: any, index: number) => (
            <ListCard
              title={info.title}
              description={info.description}
              image={info.image}
              key={index}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <BookAppoinment />
        </motion.div>
      </div>
    </section>
  );
};

export default Appoinment;
