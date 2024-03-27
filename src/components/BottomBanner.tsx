import Carousel from "@/app/ui/Carousel";
import TicketColumn from "@/app/ui/TicketColumn";

export default function BottomBanner() {
  return (
    <div>
      <div className="dark:bg-[#18282a] text-center text-slate-900 dark:text-white py-10">
        <div className=" md:py-16 md:px-32 ">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Collection Spotlight
          </h1>
          <p className="text-sm mt-6 font-light">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
        </div>

        <Carousel>
          <>
            <TicketColumn />
          </>
        </Carousel>
      </div>
    </div>
  );
}
