import React from 'react'

const Dot = () => {
  return (
    <div className="absolute flex flex-col items-center justify-center w-5 h-5 bg-red-500 rounded-full cursor-pointer group ">
      <div className="absolute w-3 h-3 bg-red-600 border-2 rounded-full" />
      <div className="px-6 py-3 text-xs text-center text-white bg-indigo-800 opacity-0 pointer-events-none ml-44 mb-28 w-44 group-hover:opacity-100 bottom-full">
        100+ Projects Done For Local IT Companies
        <svg
          className="absolute left-0 w-full h-2 text-black top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
}

export default Dot
