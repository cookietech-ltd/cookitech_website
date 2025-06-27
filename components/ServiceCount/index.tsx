import images from "@/config/images";
import React from "react";
import Counter from "./Counter";
import Divider from "../Divider";
import Slideup from "../SlideUp";

const ServiceCount = () => {
  return (
    <section className="py-12 bg-white">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="absolute lg:max-w-lg space-y-16 lg:mr-[40rem] flex flex-col  items-center justify-center lg:items-start lg:bg-transparent bg-white/50 h-1/2 py-4 w-full">
            <p className="text-xl tracking-wide text-center text-black md:font-medium lg:text-4xl lg:text-left md:text-2xl">
              Our IT Solutions will get you on move towards your destination
              faster than rivals in a more reliably way!
            </p>
            {/* <button className="px-10 py-5 text-white bg-pink-600 hover:bg-zinc-900">
              Proven IT Solutions
            </button> */}
          </div>
          <img
            src={images.bannerImage1}
            className="object-cover object-top w-screen  md:h-[600px]"
          />
        </div>
        <div className="gap-4 md:grid md:grid-cols-3 lg:gap-28">
          <Slideup index={0}>
            <Counter
              title={"System Integrations Done"}
              number={1458}
              message={"for customers"}
            />
          </Slideup>

          <div className="px-6 lg:px-20 md:border-x-2">
            <Slideup index={1}>
              <Counter
                title={"Powerful Team to Focus"}
                number={160}
                message={"Expert Members"}
              />
            </Slideup>
          </div>
          <Slideup index={2}>
            <Counter
              title={"Launched Case Studies"}
              number={1080}
              message={"Fully Launched"}
            />
          </Slideup>
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default ServiceCount;
