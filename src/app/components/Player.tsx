import Image from "next/image";
import Advertisement from "./Advertisement";
import { Players } from "../../../data";

const Player = () => {
  return (
    <section className="flex justify-center gap-3 flex-wrap sm:gap-y-5">
      {Players.map((player) => (
        <div
          className="w-[220px] h-[478px] sm:w-[237px] sm:h-[511px] flex flex-col gap-[6px] items-center justify-center bg-[#FFFFFF]  dark:bg-[#3B3E47] mx-auto shadow-lg"
          key={player.id}
        >
          <div className="w-[200px] h-[352px] sm:w-[217px] sm:h-[385px] drop-shadow">
            <Image
              src={player.image}
              alt={player.title}
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-sm sm:text-base dark:text-white my-2 text-start">
            {player.title}
          </h2>
          <div className="w-[202px] sm:w-[217px] sm:h-[54px] rounded-sm flex flex-col px-3 py-2 gap-1 bg-[#F7F7F8] dark:bg-[#292B32] ">
            <div className="flex text-xs gap-7 sm:gap-10 text-[#525965] dark:text-[#DFDFDF] bg-[#F7F7F8] dark:bg-[#292B32]">
              <span>Total Events</span>
              <span>Sport</span>
            </div>
            <div className="flex text-sm  dark:text-white  gap-10">
              <span>{player.events}</span>
              <span>{player.sport}</span>
            </div>
          </div>
        </div>
      ))}
      <Advertisement />
    </section>
  );
};

export default Player;
