import Header from "./Header";
import Player from "./Player";

const HeroSection = () => {
  return (
    <section className="w-[1241px] h-[673px] bg-slate-800 flex flex-col">
      <Header />
      <Player />
    </section>
  )
}

export default HeroSection;