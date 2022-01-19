import Image from 'next/image';

const WeiTeam = () => {
  return (
    <div className="bg-[#242424] py-20">
      <div className="w-[90rem] mx-auto">
        <div className="mandaloretitle top-0 left-0 opacity-75 text-stroke text-transparent text-8xl tracking-[16px]">wei-team</div>
        <div className="border-b-[2px] border-[#7a7a7a] mt-24 flex mandalorecond text-xl "></div>
        <div className="flex">
          <div className="w-4/12 flex items-center justify-center">
            <CEO />
          </div>
          <div className="w-5/12">
            <div className="flex mt-12 gap-20 mr-10">
              <Team />
              <Team />
              <Team />
            </div>
            <div className="flex mt-12 gap-20 ml-32">
              <Team />
              <Team />
              <Team />
            </div>
            <div className="flex mt-12 gap-20 mr-10">
              <Team />
              <Team />
              <Team />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeiTeam;

const CEO = () => {
  return (
    <div className="w-[20rem]">
      <div className="h-[20rem] w-[20rem] rounded-full adam flex justify-center items-center p-4">
        <div className="w-full h-full">
          <Image
            className="rounded-full"
            src="/images/spacex/footer.png"
            objectFit="cover"
            layout="responsive"
            width="100%"
            height="100%"
            alt="adam"
          />
        </div>
      </div>
      <div className="text-2xl font-black tracking-widest text-center mt-6">
        <span className="font-light mr-5">/</span> ADAM DO <span className="font-light ml-5">/</span>
      </div>
      <div className="opacity-50 text-sm mt-10">(Founder/CEO) - Chỉ huy phi công</div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="w-[14rem]">
      <div className="h-[14rem] w-[14rem] rounded-full flex justify-center items-center p-4">
        <div className="w-full h-full">
          <Image
            className="rounded-full"
            src="/images/spacex/footer.png"
            objectFit="cover"
            layout="responsive"
            width="100%"
            height="100%"
            alt="adam"
          />
        </div>
      </div>
      <div className="text-md font-black tracking-widest text-center mt-3 whitespace-nowrap ">
        <span className="font-light mr-2">/</span> KEVIN NGUYEN <span className="font-light ml-2">/</span>
      </div>
      <div className="opacity-50 text-sm mt-3 whitespace-nowrap text-center">(Developer Block) Kỹ sư bay</div>
    </div>
  );
};
