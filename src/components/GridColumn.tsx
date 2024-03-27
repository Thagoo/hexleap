"use client";
import Image from "next/image";
import { useState } from "react";

interface GridData {
  img: string;
  teamTitle: string;
  events: string;
  sport: string;
  ad: boolean;
}

const data: GridData[] = [
  {
    img: "/static/heroImage-1.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-2.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-3.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-2.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-1.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-2.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-3.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-2.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
  {
    img: "/static/heroImage-2.png",
    teamTitle: "Sacramento River Cats",
    events: "48",
    sport: "Baseball",
    ad: false,
  },
];

const adData = [
  {
    img: "/static/adImage.png",
    title: "Advertisement title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
export default function GridColumn() {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {data.slice(0, showMore ? data.length : 4).map((item, i) => (
          <div
            key={i}
            className="h-[511px] bg-white dark:bg-[#3b3e47] drop-shadow-md p-2 grid grid-rows  "
          >
            <Image
              src={item.img}
              alt={item.teamTitle}
              width={1241}
              height={673}
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
          className="px-6 py-2 bg-[#2c9cf0] text-white font-medium mt-10 rounded-sm drop-shadow-sm"
          onClick={() => setShowMore(!showMore)}
        >
          See {showMore ? "Less" : "More"}
        </button>
      </div>
    </>
  );
}

function AdColumn() {
  return (
    <div>
      {adData.map((item, i) => (
        <div
          key={i}
          className="h-[511px] bg-white dark:bg-[#3b3e47] drop-shadow-md p-2 "
        >
          <div className=" min-h-[100%] ad-column relative border-[1px] border-gray-300 dark:border-none">
            <span className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-2 py-1 ">
              AD
            </span>
            <Image
              src={item.img}
              alt={item.title}
              width={1241}
              height={673}
              quality={100}
            />
            <div className="p-4 ">
              <h1 className=" text-slate-900 dark:text-white font-semibold text-lg">
                {item.title}
              </h1>
              <p className=" text-slate-900 dark:text-white font-light text-xs leading-5 mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
