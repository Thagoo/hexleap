"use client";
import AdColumn from "@/app/ui/AdColumn";
import { sportsData } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";

export default function TopBanner() {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <>
      <div>
        <h1 className="text-slate-900 dark:text-white text-2xl font-bold mb-6 border-b-2 border-sky-600 w-fit">
          Sports
        </h1>
        <div className="space-y-4 md:flex md:space-x-8 ">
          {sportsData
            .slice(0, showMore ? sportsData.length : 4)
            .map((item, i) => (
              <div
                key={i}
                className=" bg-white dark:bg-[#3b3e47] drop-shadow-md p-2 grid "
              >
                <Image
                  src={item.img}
                  alt={item.teamTitle}
                  width={1241}
                  height={673}
                  layout="resposive"
                  quality={100}
                />

                <h1 className=" text-slate-900 dark:text-white font-medium text-md">
                  {item.teamTitle}
                </h1>

                <div className="grid grid-cols-2 bg-[#f7f7f8] dark:bg-[#292b32] p-2 rounded-r-sm">
                  <div className="grid grid-rows ">
                    <p className="text-slate-400 text-xs ">Total Events</p>
                    <p className="text-slate-950 dark:text-white text-sm">
                      {item.events} Events
                    </p>
                  </div>
                  <div className="grid grid-rows">
                    <p className="text-slate-400 text-xs ">Sport</p>
                    <p className="text-slate-950 dark:text-white text-sm">
                      {item.sport}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          <AdColumn />
        </div>
        <div className="w-full text-center">
          <button
            className="px-6 py-2 bg-[#2c9cf0] hover:bg-sky-600 text-white font-medium mt-10 rounded-sm drop-shadow-sm"
            onClick={() => setShowMore(!showMore)}
          >
            See {showMore ? "Less" : "More"}
          </button>
        </div>
      </div>
    </>
  );
}
