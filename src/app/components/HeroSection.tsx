import Player from "./Player";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-start mx-auto px-auto">
      <div className="text-2xl text-white ml-8 sm:ml-10 md:ml-12 lg:ml-6 xl:ml-0 mb-5 ">
        <h1 className="text-2xl leading-[36px] font-bold mb-[3px] text-black dark:text-white">Sports</h1>
        <div className="w-[80px] h-[2px] bg-[#738FFF]" />
      </div>
     <div className="flex flex-col justify-center items-center">
     <Player />
      <button className="text-sm font-600 text-center bg-[#2C9CF0] w-[124px] h-[46px0] py-[10px] px-[30px] rounded-[3px] text-white mt-[48px]">See More</button>
     </div>
    </section>
  )
}

export default HeroSection;