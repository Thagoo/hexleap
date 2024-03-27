import GridColumn from "@/components/GridColumn";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-light dark:bg-dark">
      <Header />
      <div className="min-h-screen px-20 py-12  ">
        <h1 className="text-slate-900 dark:text-white text-xl font-bold mb-6">
          Sports
        </h1>
        <GridColumn />
      </div>
    </main>
  );
}
