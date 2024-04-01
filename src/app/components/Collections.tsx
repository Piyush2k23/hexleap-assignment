import CollectionCard from "./CollectionCard";

const Collections = () => {
  return (
    <div className="min-w-[250px] h-full sm:min-w-[600px] md:w-[700px] lg:w-[1080px] xl:w-[1240px] xl:h-[918px] m-auto bg-gradient-to-b dark:from-[#18282A] dark:to-[#221A2C] from-[#F9F8FF] to-[#F3F9FF] flex flex-col justify-center items-center pt-[40px] sm:pt-[50px] mt-9 pb-[50px] px-auto">
      <h1 className="sm:w-[506px] sm:h-[52px] text-xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold  dark:text-white text-black text-center">
        Collection Spotlight
      </h1>
      <p className="w-full h-full lg:w-[917px] lg:h-[46px] text-[10px] sm:text-sm text-center dark:text-white text-black mt-[15px] sm:mt-[20px] md:mt-[36px] mb-[30px] sm:mb-[40px] md:mb-[55px] px-[0.5px] sm:px-1 md:px-2">
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        experience. Grab yours today!
      </p>
      <div className="flex  justify-center items-center lg:gap-12">
        <div className="w-[28px] h-[35px] lg:w-[36.75px] lg:h-[49px] border border-[#2C9CF0] flex justify-center items-center">
          <svg
            width="19"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1545 19.6407C11.4246 19.3706 11.5763 19.0043 11.5763 18.6223C11.5763 18.2403 11.4246 17.874 11.1545 17.6038L4.02397 10.4733L11.1545 3.34276C11.4169 3.07107 11.5621 2.70719 11.5588 2.3295C11.5555 1.9518 11.404 1.5905 11.137 1.32342C10.8699 1.05633 10.5086 0.904837 10.1309 0.901554C9.75319 0.898272 9.38931 1.04347 9.11763 1.30587L0.968638 9.45486C0.698583 9.725 0.546875 10.0913 0.546875 10.4733C0.546875 10.8553 0.698583 11.2216 0.968638 11.4917L9.11763 19.6407C9.38776 19.9108 9.7541 20.0625 10.1361 20.0625C10.518 20.0625 10.8844 19.9108 11.1545 19.6407Z"
              fill="#2C9CF0"
            ></path>
          </svg>
        </div>
        <CollectionCard />
        <div className="w-[28px] h-[35px] lg:w-[36.75px] lg:h-[49px]  border border-[#2C9CF0] flex justify-center items-center">
          <svg
            width="19"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.594509 19.6407C0.324454 19.3706 0.172746 19.0043 0.172746 18.6223C0.172746 18.2403 0.324454 17.874 0.594509 17.6038L7.72505 10.4733L0.594509 3.34276C0.332108 3.07107 0.186912 2.70719 0.190194 2.3295C0.193476 1.9518 0.344974 1.5905 0.612056 1.32342C0.879139 1.05633 1.24044 0.904837 1.61814 0.901554C1.99584 0.898272 2.35971 1.04347 2.6314 1.30587L10.7804 9.45486C11.0504 9.725 11.2021 10.0913 11.2021 10.4733C11.2021 10.8553 11.0504 11.2216 10.7804 11.4917L2.6314 19.6407C2.36126 19.9108 1.99492 20.0625 1.61295 20.0625C1.23098 20.0625 0.864645 19.9108 0.594509 19.6407Z"
              fill="#2C9CF0"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Collections;
