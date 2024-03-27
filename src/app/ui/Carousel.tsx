"use client";

import { ReactElement, useState } from "react";

export default function Carousel({ children }: { children: ReactElement }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    // if (current === 0) setCurrent(slides.length - 1);
    // else setCurrent(current - 1);
  };

  let nextSlide = () => {
    // if (current === slides.length - 1) setCurrent(0);
    // else setCurrent(current + 1);
  };

  return (
    <div className=" relative">
      <div
        className={`w-full flex justify-center transition ease-out duration-40  `}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {children}
      </div>
      <div className="absolute top-0 h-full items-center flex px-10 text-3xl">
        <button
          className=" p-1 text-[#2c9cf0] border-2 border-[#2c9cf0]"
          onClick={previousSlide}
        >
          &#60;
        </button>
      </div>
      <div className="absolute top-0 right-0 h-full items-center flex px-10 text-3xl">
        <button
          className=" p-1 text-[#2c9cf0] border-2 border-[#2c9cf0] "
          onClick={nextSlide}
        >
          &#62;
        </button>
      </div>
    </div>
  );
}
