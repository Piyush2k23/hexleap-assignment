import Image from "next/image";
import Player1 from "../assets/player1.png";

const Player = () => {
  return (
        <section className="">
        <div className="w-[237px] h-[511px] flex flex-col gap-1">
        <div className="w-[217px] h-[385px] ">
         <Image src={Player1} fill alt="Picture of the author" className="" /> 
        </div>
          <h2 className="text-base text-white">Sacramento River Cats</h2>
          <div className="w-[217px] h-[54px] rounded-sm">
            <div className="w-[70px] h-[31px] grid space-x-2">
                <span>Total Events</span>
                <span>Sport</span>
                <span>48 Events</span>
                <span>Baseball</span>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Player;