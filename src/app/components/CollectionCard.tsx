import card1 from "../assets/card1.png";
import Image from "next/image";
import { Collections } from "../../../data";

const CollectionCard = () => {
  return (
    <section className="w-full sm:w-[600px] lg:w-full flex flex-wrap gap-y-4 sm:gap-x-8 md:gap-x-10 ">
      {Collections.map((collection) => (
        <div
          className="w-[200px] h-[600px] sm:w-[257px] sm:h-[624px] dark:bg-[#3B3E47] bg-[#FFFFFF] flex flex-col flex-wrap items-center justify-center gap-4 mx-auto shadow-xl"
          key={collection.id}
        >
          <div className="w-[180px] h-[387px] sm:w-[226px] sm:h-[401px] drop-shadow ">
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <div className="translate-y-[-12px] relative">
            <div className="w-[10px] sm:w-[12px] h-[20px] bg-gradient-to-r dark:from-[#18282A] dark:to-[#221A2C] from-[#e7eaed] to-[#e7eaed] absolute translate-x-[-11px] sm:translate-x-[-24px] top-[-8px]  rounded-s-[0px] rounded-l-[0px] rounded-r-full rounded-e-full mt-4" />
            <div className="flex gap-[5px] px-[1.5px] mt-[18px] ">
              <div className="border-b w-[3px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[6px] sm:w-[8px] border-[#818A97]" />
              <div className="border-b w-[3px] border-[#818A97]" />
            </div>
            <div className="w-[10px] sm:w-[12px] h-[20px] bg-gradient-to-r dark:from-[#18282A] dark:to-[#221A2C] from-[#e7eaed] to-[#e7eaed] absolute translate-x-[181px] sm:translate-x-[221px] top-[-8px] rounded-r-[0px] rounded-e-full rounded-l-full mt-4" />
          </div>
          <div className="flex flex-col gap-3 mt-[-10px] justify-center items-center">
            <h2 className="dark:text-white text-black text-[16px] sm:text-[17px] leading-[26.52px] font-medium">
              {collection.title}
            </h2>
            <h3 className="dark:text-white text-black text-[13.5px] sm:text-sm">
              Oct 15 |Sun| 4:30 PM
            </h3>
            <p className="text-center dark:text-[#DFDFDF] text-[#525965] w-[200px] h-[30px] sm:w-[213px] sm:h-[31px] leading-[20.85px] text-[12px] sm:text-sm">
              {collection.address}
            </p>
            <button className="text-[12px] sm:text-xs font-medium font-white text-center mt-2 text-white bg-black w-[180px] h-[30px]  sm:w-[213px] sm:h-[36px]">
              {collection.collectionTitle}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CollectionCard;
