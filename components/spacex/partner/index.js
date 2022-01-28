import Image from 'next/image';
const Partner = () => {
  return (
    <div className="bg-[#242424]">
      <div className="lg:w-[90rem] mx-auto py-10 lg:py-20">
        <div className="mandaloretitle top-0 left-0 opacity-75 text-stroke text-transparent text-6xl lg:text-8xl tracking-[2px] lg:tracking-[16px] px-10 lg:px-0">
          wei-partner
        </div>
        <div className="flex gap-4 lg:gap-16 my-10 lg:my-32 justify-center px-4 flex-wrap">
          <div className="w-[47%] py-7  lg:w-44 rounded-3xl border-[#707070] border-[1px] flex items-center justify-center">
            <Image src="/images/spacex/partner-kardia.png" width={'100%'} height="40%" layout="intrinsic" alt="partner" />
          </div>
          <div className="w-[47%] py-7 lg:w-44  rounded-3xl border-[#707070] border-[1px] flex items-center justify-center">
            <Image src="/images/spacex/partner-kardia.png" width={'100%'} height="40%" layout="intrinsic" alt="partner" />
          </div>
          <div className="w-[47%] py-7 lg:w-44 rounded-3xl border-[#707070] border-[1px] flex items-center justify-center">
            <Image src="/images/spacex/partner-kardia.png" width={'100%'} height="40%" layout="intrinsic" alt="partner" />
          </div>
          <div className="w-[47%] py-7 lg:w-44 rounded-3xl border-[#707070] border-[1px] flex items-center justify-center">
            <Image src="/images/spacex/partner-kardia.png" width={'100%'} height="40%" layout="intrinsic" alt="partner" />
          </div>
          <div className="w-[47%] py-7 lg:w-44 rounded-3xl border-[#707070] border-[1px] flex items-center justify-center">
            <Image src="/images/spacex/partner-kardia.png" width={'100%'} height="40%" layout="intrinsic" alt="partner" />
          </div>
          <div className="w-[47%] py-7 lg:w-44 rounded-3xl border-[#707070] border-[1px] flex items-center justify-center">
            <Image src="/images/spacex/partner-kardia.png" width={'100%'} height="40%" layout="intrinsic" alt="partner" />
          </div>
          <div className="w-[47%] py-7 lg:w-44 rounded-3xl border-[#707070] border-[1px] flex items-center justify-center">
            <Image src="/images/spacex/partner-kardia.png" width={'100%'} height="40%" layout="intrinsic" alt="partner" />
          </div>
          <div className="w-[47%] py-7 lg:w-44 rounded-3xl border-[#707070] border-[1px] flex items-center justify-center">
            <Image src="/images/spacex/partner-kardia.png" width={'100%'} height="40%" layout="intrinsic" alt="partner" />
          </div>
        </div>
      </div>
      <div className="lg:w-[90rem] mx-auto py-10 ">
        <div className="mandaloretitle top-0 left-0 opacity-75 text-stroke text-transparent text-6xl lg:text-8xl tracking-[2px] lg:tracking-[16px] px-4 lg:px-0">
          wei-contact
        </div>
      </div>

      <div className="border-t-[1px] border-[#707070] lg:mt-12 pb-32 bg-[url('/images/spacex/footer.png')] px-10 bg-cover bg-no-repeat bg-left-bottom py-24">
        <div className="lg:w-[90rem] mx-auto lg:pb-10">
          <div className="mandalorecond opacity-70 lg:text-xl lg:w-9/12 lg:tracking-[3px] text-md tracking-[1px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </div>
          <div className="w-12/12 hidden lg:block">
            <Image src="/images/spacex/logo-big.png" width="100%" height={'25.6%'} layout="responsive" alt="big logo" />
          </div>
          <div className="mt-4">
            <div className="mb-2 text-md font-bold">
              <label htmlFor="">Email</label>
            </div>
            <input
              placeholder="Type your email..."
              type="text"
              className="font-medium block w-[25rem] text-md rounded-md border-[1px] border-[#707070] backdrop-blur-xl bg-white/20 px-5 py-3 lg:py-2.5 focus:outline-0"
            />
            <button className="mandaloretitle text-2xl rounded-xl px-7 py-2 text-black bg-white mt-6">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
