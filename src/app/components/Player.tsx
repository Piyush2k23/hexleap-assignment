import Image from "next/image";
import Player1 from "../assets/player1.png";
import Advertisement from "./Advertisement";

const Player = () => {
  return (
    <section className="flex gap-3 flex-wrap">
      <div className="w-[237px] h-[511px] flex flex-col gap-1 items-center justify-center bg-[#3B3E47]">
        <div className="w-[217px] h-[385px]">
          <Image
            src={Player1}
            alt="Picture of the author"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-base text-white my-2 -ml-10">Sacramento River Cats</h2>
        <div className="w-[217px] h-[54px] rounded-sm flex flex-col px-3 py-2 gap-1 bg-[#292B32]">
            <div className="flex text-xs gap-10 text-[#DFDFDF]">
              <span>Total Events</span>
              <span>Sport</span>
            </div>
            <div className="flex text-sm text-white gap-10">
              <span className="">48 Events</span>
              <span>Baseball</span>
            </div>
        </div>
      </div>
      {/*  */}
      <div className="w-[237px] h-[511px] flex flex-col gap-1 items-center justify-center bg-[#3B3E47]">
        <div className="w-[217px] h-[385px]">
          <Image
            src={Player1}
            alt="Picture of the author"
            className="w-full h-full"
          />
        </div>
        <h2 className="text-base text-white my-2 -ml-10">Sacramento River Cats</h2>
        <div className="w-[217px] h-[54px] rounded-sm flex flex-col px-3 py-2 gap-1 bg-[#292B32]">
            <div className="flex text-xs gap-10 text-[#DFDFDF]">
              <span>Total Events</span>
              <span>Sport</span>
            </div>
            <div className="flex text-sm text-white gap-10">
              <span className="">48 Events</span>
              <span>Baseball</span>
            </div>
        </div>
      </div>
      {/*  */}
      <div className="w-[237px] h-[511px] flex flex-col gap-1 items-center justify-center bg-[#3B3E47]">
        <div className="w-[217px] h-[385px]">
          <Image
            src={Player1}
            alt="Picture of the author"
            className="w-full h-full"
          />
        </div>
        <h2 className="text-base text-white my-2 -ml-10">Sacramento River Cats</h2>
        <div className="w-[217px] h-[54px] rounded-sm flex flex-col px-3 py-2 gap-1 bg-[#292B32]">
            <div className="flex text-xs gap-10 text-[#DFDFDF]">
              <span>Total Events</span>
              <span>Sport</span>
            </div>
            <div className="flex text-sm text-white gap-10">
              <span className="">48 Events</span>
              <span>Baseball</span>
            </div>
        </div>
      </div>
      {/*  */}
      <Advertisement />
    </section>
  );
};

export default Player;
