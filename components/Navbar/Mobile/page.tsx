import data from "@/config/data";
import images from "@/config/images";
import {
  faBars,
  faChevronDown,
  faMagnifyingGlass,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const MobileNavbar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [openSubNav, setOpenSubNav] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  useEffect(() => {
    if (openNav) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "scroll";
    }
  }, [openNav]);
  return (
    <section className="block w-full md:hidden lg:hidden xl:hidden">
      {" "}
      <AnimatePresence>
        {openNav && (
          <motion.div
            className="w-[100vh] h-[100vh] bg-black/50 fixed z-20 right-0"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
          >
            <motion.div
              className="w-[75%] h-[100vh] bg-neutral-800 fixed z-30 right-0"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              exit={{
                width: 0,
                transition: { delay: 0.5, duration: 0.2 },
              }}
            >
              <div className="flex justify-center py-6 bg-white">
                <FontAwesomeIcon
                  icon={faX}
                  className="absolute text-black right-3 top-3"
                  onClick={() => setOpenNav(false)}
                />
                <img src={images.logo} className="w-16 h-20" />
              </div>
              <div className="relative w-full h-full">
                {Object.entries(data.navbar).map(
                  (value: any, index: number) => (
                    <p
                      className="relative p-2 text-xl "
                      key={index}
                      onClick={() => {
                        setOpenSubNav(!openSubNav);
                        setTitle(value[0]);
                      }}
                    >
                      <div
                        className={`relative flex items-center  -left-2 ${
                          title === value[0]
                            ? "border-l-2 border-pink-500"
                            : null
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={` px-2 ${
                            openSubNav === true && title === value[0]
                              ? null
                              : "-rotate-90"
                          }`}
                        />
                        {value[0]}
                      </div>
                      <hr className="mt-2 border-gray-600 border-1" />

                      {openSubNav &&
                      title.toLowerCase() === String(value[0]).toLowerCase()
                        ? value[1].map((item: any, index: number) => (
                            <div className="relative flex flex-col" key={index}>
                              <p className="px-10 py-2 text-lg ">{item}</p>
                              <hr className="border-gray-600 border-1" />
                            </div>
                          ))
                        : null}
                    </p>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex items-center justify-between text-black bg-white">
        <img src={images.logo} alt="" className={`h-16 ml-6 py-1`} />
        <div className="flex mr-6 space-x-5">
          <FontAwesomeIcon icon={faBars} onClick={() => setOpenNav(true)} />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </section>
  );
};

export default MobileNavbar;
