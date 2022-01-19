import Image from 'next/image';
const Partner = () => {
  return (
    <div className="bg-[#242424]">
      <div className="w-[90rem] mx-auto py-20">
        <div className="mandaloretitle top-0 left-0 opacity-75 text-stroke text-transparent text-8xl tracking-[16px]">wei-partner</div>
        <div className="flex gap-16 my-32 justify-center">
          <div className="w-44 h-24 rounded-3xl border-[#707070] border-[1px] flex items-center justify-center">
            <Image src="/images/spacex/partner-kardia.png" width={'100%'} height="40%" layout="intrinsic" alt="partner" />
          </div>
          <div className="w-44 h-24 rounded-3xl border-[#707070] border-[1px] flex items-center justify-center">
            <Image src="/images/spacex/partner1.png" width={'50%'} height="50%" layout="intrinsic" alt="partner" />
          </div>
          <div className="w-44 h-24 rounded-3xl border-[#707070] border-[1px] flex items-center justify-center">
            <Image src="/images/spacex/partner-kts.png" width={'100%'} height="27%" layout="fixed" alt="partner" />
          </div>
          <div className="w-44 h-24 rounded-3xl border-[#707070] border-[1px] flex items-center justify-center">
            <Image src="/images/spacex/partner-kardia.png" width={'100%'} height="40%" layout="intrinsic" alt="partner" />
          </div>
        </div>
        <div className="mandaloretitle top-0 left-0 opacity-75  mt-40 text-stroke text-transparent text-8xl tracking-[16px]">wei-contact</div>
      </div>
      <div className="border-t-[1px] border-[#707070] mt-0 bg-[url('/images/spacex/footer.png')] bg-cover bg-no-repeat bg-left-bottom py-24">
        <div className="w-[90rem] mx-auto">
          <div className="mandalorecond opacity-30 text-xl w-9/12 tracking-[3px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </div>
          <div className="w-12/12">
            <Image src="/images/spacex/logo-big.png" width="100%" height={'25.6%'} layout="responsive" alt="big logo" />
          </div>
          <div className="mt-4">
            <div className="mb-2 text-md font-bold">
              <label htmlFor="">Email</label>
            </div>
            <input
              placeholder="Type your email..."
              type="text"
              className="font-medium block w-[25rem] text-sm rounded-md border-[1px] border-[#707070] backdrop-blur-xl bg-white/20 px-5 py-2.5 focus:outline-0"
            />
            <button className="mandaloretitle text-2xl rounded-xl px-7 py-2 text-black bg-white mt-6">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
