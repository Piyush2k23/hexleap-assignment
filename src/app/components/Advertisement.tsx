import Image from "next/image";
import AdvertisementImage from "../../../public/advertisement.png";

const Advertisement = () => {
  return (
    <div className="flex flex-col justify-start pt-[10px] items-center gap-1 bg-[#FFFFFF] dark:bg-[#3B3E47] w-[220px] h-[480px] sm:w-[237px] sm:h-[511px] mx-auto shadow-lg">
      <div className="border-[1px] border-[#006555] pb-5 sm:pb-8">
        <div className="w-[200px] h-[200px] sm:w-[217px] sm:h-[217px] relative">
          <Image
            src={AdvertisementImage}
            alt="Advertisement Image"
            className="w-full h-full object-cover "
          />
          <div className="bg-black text-white px-[3px] py-[15px] absolute top-0 right-0 gap-3 text-sm font-700 w-[47px] h-[25px] flex justify-center items-center">
            Ad
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-600 dark:text-white text-[#222D3A] mt-[30px] mb-[12px]">
            Advertisement title
          </h2>
          <p className="text-[#525965] dark:text-[#DFDFDF] w-[187px] h-[171px]  text-xs leading-[19px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
