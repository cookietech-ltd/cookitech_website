import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";

interface Props {
  image: string;
  title: string;
  department: string;
  user: string;
  date: string;
}
const BlogCard = ({ image, title, department, user, date }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (hovered) {
      animate([
        [
          ".animate-line-left",
          { opacity: [0, 1], x: [200, 0] },
          { duration: 0.5 },
        ],
      ]);
      animate([
        [
          ".animate-line-right",
          { opacity: [0, 1], x: [-200, 0] },
          { duration: 0.5 },
        ],
      ]);
    } else {
      animate([
        [
          ".animate-line-left",
          { opacity: [1, 0], x: [0, 100] },
          { duration: 0.5 },
        ],
      ]);
      animate([
        [
          ".animate-line-right",
          { opacity: [1, 0], x: [0, -100] },
          { duration: 0.5 },
        ],
      ]);
    }
  }, [hovered]);
  return (
    <section
      className=" w-[23rem] h-[31rem] relative"
      ref={scope}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`space-y-14 flex flex-col justify-center items-center bg-white  w-full  h-full group ${
          hovered ? "shadow-2xl" : null
        }`}
      >
        <div className="relative w-full overflow-hidden bg-no-repeat bg-cover ">
          <img
            src={image}
            className="w-full transition duration-300 ease-in-out hover:scale-110 "
            alt="Louvre"
          />
        </div>
        <div className="flex flex-col items-start justify-center max-w-xs pb-12 space-y-4 text-sm text-left text-black ">
          <p className="text-xs font-bold text-blue-800">{department}</p>
          <p className="text-xl font-semibold hover:text-pink-600">{title}</p>
          <div className="grid grid-cols-2 text-gray-500 divide-x-2 divide-gray-400">
            <p>{user}</p>
            <p className="pl-4">{date}</p>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center w-[23rem] ">
        <motion.div className="flex-grow border-t-2 border-blue-800 animate-line-left" />
        <div
          className={`w-16 h-16  rounded-full flex flex-col items-center justify-center transition-none shadow-lg absolute z-10 left-0 right-0 mx-auto ${
            hovered ? "bg-pink-500" : "bg-white"
          }  `}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className={`${hovered ? "text-white" : "text-pink-500"}`}
          />
        </div>
        <motion.div className="flex-grow border-t-2 border-blue-800 animate-line-right" />
      </div>
    </section>
  );
};

export default BlogCard;
