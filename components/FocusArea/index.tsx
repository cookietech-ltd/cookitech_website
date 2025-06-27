import Slideup from "../SlideUp";
import FocusCard from "./FocusCard";

import data from "@/config/data";

const FocusArea = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-12 space-y-20 bg-gradient-to-b from-white via-white to-cyan-100 ">
      <div className="flex flex-col items-center p-4 space-y-12 md:grid-rows-2 lg:grid-cols-3 md:gap-8 md:grid lg:p-0 md:grid-cols-2">
        <Slideup index={0}>
          <div className="max-w-xs text-center md:max-w-sm space-y-7 md:text-left">
            <p className="text-sm font-semibold text-blue-900 underline md:text-base decoration-red-500 decoration-2">
              {" "}
              Cookietech Ltd IT Services
            </p>
            <p className="text-2xl font-bold text-black lg:text-5xl md:text-3xl">
              Solutions And Focus Areas
            </p>
            <p className="text-sm text-black ">
              Digital Transformation By IT Solutions
            </p>{" "}
          </div>
        </Slideup>

        {data.focusArea.map((item: any, index: number) => (
          <Slideup index={index} key={index}>
            <FocusCard
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </Slideup>
        ))}
      </div>
      <p className="px-8 text-black md:px-4 ">
        We’re ready to discover and unlock your potential.{" "}
        <strong className="text-blue-800">Get The Solutions</strong> or Call us
        Today! <strong className="text-blue-800">258-000-3694</strong>
      </p>
    </section>
  );
};

export default FocusArea;
