import Link from 'next/link';
import Image from 'next/image';
const WeiMong = () => {
  
  return (
    <div className="bg-[#242424] pt-16 pb-40 bg-[url('/images/spacex/weimong.png')] bg-[length:auto_400px] md:bg-cover bg-no-repeat bg-top-left  lg:mx-0" >
      <div className="lg:w-[90rem] mx-auto">
      <div className="mandaloretitle top-0 px-4 left-0 opacity-75 text-stroke text-transparent text-6xl lg:text-8xl tracking-[2px] lg:tracking-[16px]">wei-mong</div>
        <div className="lg:flex pt-10 lg:py-20 px-4">
          <div className="lg:w-5/12">
            <div className="font-medium lg:ml-20 text-sm lg:text-xl">
              <div>
                WEIMONG is the mascot that astronauts always take with them when going into space, representing one of the preparation steps for the
                journey into space.
              </div>
              <div className="mt-4"> Weimong builds an ecosystem to help users entertain and earn more NFT.</div>
            </div>
            <Link passHref href="/#">
              <button className="rounded-full bg-[#FF6600] px-10 lg:px-16 py-3 mandaloretitle text-2xl lg:ml-20 mt-16">Go to now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        {/* <Image src="/images/spacex/overlay-weimong.png" width={'100%'} height={'50%'} layout="responsive" alt="overlay" /> */}
      </div>
      <div className="lg:hidden">
        <Image src="/images/spacex/wei-mong-mobie.png" width={'100%'} height={'155%'} layout="responsive" alt="overlay" />
      </div>
    </div>
  );
};

export default WeiMong;
