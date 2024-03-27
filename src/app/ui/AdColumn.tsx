import { adData } from "@/lib/data";
import Image from "next/image";

export default function AdColumn() {
  return (
    <div>
      {adData.map((item, i) => (
        <div
          key={i}
          className="h-auto bg-white dark:bg-[#3b3e47] drop-shadow-md p-2 "
        >
          <div className="min-h-[100%] ad-column relative border-[1px] border-gray-300 dark:border-none">
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
