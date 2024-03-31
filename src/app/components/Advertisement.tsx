import Image from "next/image";
import AdvertisementImage from "../assets/advertisement.png";


const Advertisement = () => {
  return (
    <div className="flex flex-col justify-start pt-[10px] items-center gap-1 bg-[#3B3E47] w-[237px] h-[511px]">
      <div className="w-[217px] h-[217px] relative">
        <Image src={AdvertisementImage} alt="Advertisement Image" className="w-full h-full object-cover "/>
        <div className="bg-black text-white px-[3px] py-[15px] absolute top-0 right-0 gap-3 text-sm font-700 w-[47px] h-[25px] flex justify-center items-center">Ad</div>
      </div>
      <div>
        <h2 className="text-xl font-600 text-white mt-[30px] mb-[15px]">Advertisement title</h2>
        <p className="text-[#DFDFDF] w-[187px] h-[171px] text-xs leading-[19px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  )
}

export default Advertisement;