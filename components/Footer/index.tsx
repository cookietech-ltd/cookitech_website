import images from "@/config/images";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-white ">
      <div className="grid items-center justify-center grid-rows-5 gap-4 p-4 py-12 lg:space-x-16 xl:flex md:grid-cols-2 lg:grid-cols-3 xl:gap-0">
        <div className="flex flex-col items-center max-w-xs space-y-3 text-sm text-gray-600 md:max-w-sm">
          <img src={images.logo} className="w-16 h-20" />
          <p className="text-center">
            Amet consectetur adipisicing elitm ipsum sed incididunt labore
            dolore magna.
          </p>
          <p>47 Wood Circle, Pana City FL 32401</p>
          <p>
            Call us{" "}
            <strong className="hover:underline hover:decoration-pink-500">
              (+1) 500.369.2580
            </strong>
          </p>
          <p className="hover:underline hover:decoration-pink-500">
            support@cookietechltd.com
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <h1 className="text-lg font-medium text-blue-900 underline decoration-pink-600 decoration-2">
            {" "}
            What We Do
          </h1>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Cloud Integration
          </p>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Business Security
          </p>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Startup Projects
          </p>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Product Engineering
          </p>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Data Infrastructure
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <h1 className="text-lg font-medium text-blue-900 underline decoration-pink-600 decoration-2">
            {" "}
            What We Do
          </h1>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Cloud Integration
          </p>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Business Security
          </p>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Startup Projects
          </p>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Product Engineering
          </p>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Data Infrastructure
          </p>
        </div>
        <div className="flex flex-col items-center space-y-3">
          <h1 className="text-lg font-medium text-blue-900 underline decoration-pink-600 decoration-2">
            {" "}
            What We Do
          </h1>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Cloud Integration
          </p>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Business Security
          </p>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Startup Projects
          </p>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Product Engineering
          </p>
          <p className="text-sm text-gray-600 hover:text-pink-600">
            Data Infrastructure
          </p>
        </div>
        <div className="flex flex-col items-center max-w-sm space-y-8 text-sm text-gray-600 ">
          <div className="flex items-center">
            <input
              type="text"
              className="py-3 bg-transparent"
              placeholder="Email Address"
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="p-4 text-white bg-pink-500"
            />
          </div>
          <p className="text-sm text-gray-600">Get the latest news & updates</p>
          <div className="flex space-x-6 text-blue-800">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faPinterest} />
          </div>
        </div>
      </div>{" "}
      <hr className="relative z-10 border-gray-200 border-1" />
      <p className="flex justify-center px-6 py-4 text-sm text-gray-600 md:px-2">
        © 2020 Cookietech Ltd IT Solutions. All rights reserved. Privacy Policy
      </p>
    </section>
  );
};

export default Footer;
