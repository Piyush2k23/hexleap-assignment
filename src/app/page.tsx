import Collections from "./components/Collections";
import HeroSection from "./components/HeroSection";
import ThemeSwitch from "./components/ThemeSwitch";

export default function Home() {
  return (
    <main className=" flex flex-col justify-center py-[60px] px-auto dark:bg-[#292B32] relative">
      <div className="w-[30px] absolute top-4 right-4">
        <ThemeSwitch />
      </div>
      <HeroSection />
      <Collections />
    </main>
  );
}

