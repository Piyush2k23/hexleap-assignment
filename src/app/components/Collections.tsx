import CollectionCard from "./CollectionCard";

const Collections = () => {
  return (
    <div className="w-[1240px] h-[918px] bg-gradient-to-b from-[#18282A] to-[#221A2C] flex flex-col justify-center items-center pt-[72px]">
        {/* <h1 className="w-[506px] h-[52px] text-[50px] font-bold  text-white">Collection Spotlight</h1>
        <p className="w-[917px] h-[46px] text-sm leading- text-white mt-[36px]">Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p> */}
        <CollectionCard />
    </div>
  )
}

export default Collections;               