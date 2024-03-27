import BottomBanner from "@/components/BottomBanner";
import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";

export default function Home() {
  return (
    <main className="bg-light dark:bg-dark">
      <div className=" md:flex-col space-y-4 px-4 md:px-20 py-12">
        <Header />

        <TopBanner />

        <BottomBanner />
      </div>
    </main>
  );
}
