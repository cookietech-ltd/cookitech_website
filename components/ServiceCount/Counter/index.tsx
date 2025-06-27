import React from "react";
import CountUp from "react-countup";
interface Props {
  title: string;
  number: number;
  message: string;
}
const Counter = ({ title, number, message }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-4 py-14">
      <span className="text-lg text-black lg:text-xl">{title}</span>
      <CountUp
        duration={10}
        className="pt-6 text-4xl font-medium lg:text-6xl text-violet-950"
        end={number}
      />
      <span className="text-sm text-pink-600 uppercase lg:text-lg">
        {message}
      </span>
    </div>
  );
};

export default Counter;
