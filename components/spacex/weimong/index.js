import Link from 'next/link';
const WeiMong = () => {
  return (
    <div className="bg-[#242424] pt-16 pb-40 bg-[url('/images/spacex/weimong.png')] bg-cover bg-no-repeat bg-top-left">
      <div className="w-[90rem] mx-auto">
        <div className="mandaloretitle top-0 left-0 opacity-75 text-stroke text-transparent text-8xl tracking-[16px]">wei-tech</div>
        <div className="flex py-20">
          <div className="w-5/12">
            <div className="font-medium ml-20 text-xl">
              <div>
                WEIMONG is the mascot that astronauts always take with them when going into space, representing one of the preparation steps for the
                journey into space.
              </div>
              <div className="mt-4"> Weimong builds an ecosystem to help users entertain and earn more NFT.</div>
            </div>
            <Link passHref href="/weillion">
              <button className="rounded-full bg-[#FF6600] px-16 py-3 mandaloretitle text-2xl ml-20 mt-16">Go to now</button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="">
        <Image src="/images/spacex/overlay-weimong.png" width={'100%'} height={'50%'} layout="responsive" alt="overlay" />
      </div> */}
    </div>
  );
};

export default WeiMong;
