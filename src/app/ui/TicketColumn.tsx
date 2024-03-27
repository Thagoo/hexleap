import { ticketData } from "@/lib/data";
import Image from "next/image";

export default function TicketColumn() {
  const formatDateToLocale = (dateString: string): string => {
    const optionsDate: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      weekday: "short",
    };
    const optionsTime: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const date = new Date(dateString);
    const formattedDate = date
      .toLocaleDateString("en-US", optionsDate)
      .toUpperCase();
    const formattedTime = date.toLocaleTimeString("en-US", optionsTime);

    const parts = formattedDate.split(" ");
    const [weekday, month, day] = parts.map((part) => part.trim());

    const time = formattedTime.replace(/ /g, "");

    return `${month} ${day} | ${weekday} | ${time}`;
  };

  return (
    <div className="md:flex md:space-x-8 ">
      {ticketData.map((item, i) => (
        <div
          key={i}
          className="h-auto  max-w-[237px] bg-white dark:bg-[#3b3e47] drop-shadow-md p-1  ticket-cut"
        >
          <div className="drop-shadow-md">
            <Image
              src={item.img}
              alt={item.title}
              width={1241}
              height={673}
              quality={100}
            />
            <div className="border-b-2 border-dashed border-gray-500 mx-2 my-3"></div>
            <div className="py-2 px-2 grid gap-2">
              <h1 className=" text-slate-900 dark:text-white font-semibold text-lg">
                {item.title}
              </h1>

              <p className=" text-slate-900 dark:text-white font-normal text-sm leading-5">
                {item.time && formatDateToLocale(item.time)}
              </p>
              <p className=" text-slate-900 dark:text-white font-light text-sm leading-5 mt-2">
                {item.venue}
              </p>
              <button className="bg-slate-950 text-white hover:bg-slate-900 cursor-pointer px-8 py-2 text-xs">
                Ticket Fight Collection
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
