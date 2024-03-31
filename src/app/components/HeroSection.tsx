import Header from "./Header";
import Player from "./Player";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <Header />
      <Player />
      <button className="text-sm font-600 text-center bg-[#2C9CF0] w-[124px] h-[46px0] py-[10px] px-[30px] rounded-[3px] text-white mt-[48px]">See More</button>
    </section>
  )
}

export default HeroSection;