const RoadMap = () => {
  return (
    <div className="relative">
      <div className="bg-[url('/images/spacex/overlay-weimong.png')] bg-cover bg-no-repeat bg-top-left mt-[-10rem] pt-64">
        <div className="w-[90rem] mx-auto">
          <div className="mandaloretitle top-0 left-0 opacity-75 text-stroke text-transparent text-8xl tracking-[16px]">wei-roadmap</div>
          <div className="border-b-[3px] border-[#7a7a7a] mt-12 flex mandalorecond text-2xl tracking-[6px] ">
            <div className="px-14 border-b-[3px] border-white pb-4 translate-y-[3px]">phase 1</div>
            <div className="px-14 translate-y-[3px] opacity-70">phase 2</div>
            <div className="px-14 translate-y-[3px] opacity-70">phase 3</div>
            <div className="px-14 translate-y-[3px] opacity-70">phase 4</div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/images/spacex/roadmap.png')] bg-cover bg-no-repeat bg-top-left pb-64 relative bg-red-200">
        <div className="w-[90rem] mx-auto flex items-center justify-center flex-col">
          <div className="mandaloretitle text-4xl my-16">q4 - 2022</div>
          <div className="backdrop-blur-2xl rounded-lg bg-black/20 px-20 py-10 text-md">
            <div className="mb-3">Launching Weilion Space on VR phase 1 </div>
            <div className="mb-3">Register to visit the space station.</div>
            <div className="mb-3">Participate in space activities and experiences. </div>
            <div className="mb-3">See the earth from space </div>
            <div className="mb-3">Communicate with the crew and members on the station</div>
            <div className="mb-3">Learn as well as provide a vision of the further future in the matrix </div>
            <div className="mb-3">Development of Modules with functions for the ecosystem on Weilion station (NFT) </div>
            <div className="mb-3">Modules with scientific research function chambers, culture farm, </div>
            <div className="mb-3">Provide additional oxygen data to the station as well as exploit other data.</div>
          </div>
        </div>
      </div>
      <div className="h-10 bg-[#7a7a7a]"></div>
      <div className="absolute bottom-0 overlay-roadmap left-0 h-64 w-full z-10" />
    </div>
  );
};

export default RoadMap;
