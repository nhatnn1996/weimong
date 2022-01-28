import Image from 'next/image';
import { BiTargetLock } from 'react-icons/bi';

const items = [
  { label: 'total length of the truss', value: '108.4 m' },
  { label: 'WEIGHT (400 tons)', value: '~400.000 kg' },
  {
    label: 'the pressurized volume',
    value: (
      <>
        -1000 m<sup>3</sup>
      </>
    )
  },
  { label: 'Length of all modules', value: '74 m' }
];
const WieSpace = () => {
  return (
    <div className="relative flex bg-black lg:bg-[url('/images/spacex/weispace.webp')] bg-cover bg-left-top ">
      <div className="overlay z-20 absolute top-0 left-0 w-full h-[232px]"></div>
      <div className="overlay-bottom z-20 absolute bottom-0 left-0 w-full h-[150px]"></div>

      <div className="w-full hidden lg:flex">
        <div className="lg:w-[50%] backdrop-blur-lg bg-[#282828ce] h-screen"></div>
      </div>
      <div className="lg:absolute h-full lg:top-0 lg:left-0 w-full z-20">
        <div className="lg:w-[90rem] px-4 lg:mx-auto lg:py-[43px] lg:flex">
          <div className="lg:w-[40%]">
            <div className="mandaloretitle py-10 top-0 px-4 left-0 opacity-75 text-stroke text-transparent text-6xl lg:text-8xl tracking-[2px] lg:tracking-[16px]">
              weispace
            </div>
            <div className="mt-4 lg:hidden">
              <Image src="/images/spacex/weispace.webp" alt="image" width={'100%'} height={'68%'} layout="responsive" />
            </div>
            <Infomations className="lg:hidden" />
            <div
              className="tamtam mt-12 mx-10 lg:mx-0 p-6 lg:p-10 text-sm leading-7 lg:font-bold lg:leading-5"
              style={{ '--bottom-right': '40px', '--weight': '2px' }}
            >
              WEILION SPACE is a matrix space station for the development of space exploration ecosystem using WEI energy for the initiation process.
              Theoretically, the WEI energy is made from each point in the blockchain space which is block-quantized in the matrix by the chain
              platform source core with core multi matters, for example Binance Smart Chain or Aleph Zero. Chain platform source cores are encrypted
              in unique NFT form as a unique matter in blockchain space exploration.
            </div>
            <div className="lg:border-t-[0.5px] border-t-[#ffffff73] lg:mt-6" />
            <div className="flex flex-col">
              <div className="relative mx-10 lg:mx-0 mt-10 lg:order-3">
                <div className="relative mandaloretitle text-xl">
                  <div className="absolute top-[50%] right-full translate-y-[-50%] translate-x-[-50%] ">
                    <BiTargetLock className="w-6 h-6 fill-white" />
                  </div>
                  lauch location
                </div>
                <div className="text-sm mt-2 leading-7">
                  <p>Kennedy Space Center Launch Complex 39,</p>
                  <p>{"Gagarin's Start, Baikonur Cosmodrome Site 81 on map BSC Weilion."}</p>
                </div>
              </div>
              <div className=" lg:border-t-[0.5px] border-t-[#ffffff73] lg:my-6 lg:order-2" />
              <div className="relative mt-6 mx-10 lg:mx-0 lg:order-1">
                {items.map((element, index) => (
                  <div key={index} className="mt-4 flex lg:block items-center">
                    <div className="mandaloretitle text-[#FFFFFF66]">{element.label}</div>
                    <div className="mandalorehalf ml-3 lg:ml-0 mt-1 text-xl">{element.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Infomations className="hidden lg:flex" />
        </div>
      </div>
    </div>
  );
};

export default WieSpace;

const Infomations = ({ className }) => {
  return (
    <div className={`lg:w-[60%] self-stretch items-end justify-end lg:pb-32 ${className}`}>
      <div className="flex w-full justify-center lg:flex-col lg:items-end items-center gap-2">
        <div className="flex items-center lg:w-60">
          <div className="rounded-md lg:w-16 lg:h-16 w-10 h-10">
            <Image src="/images/spacex/launchdate.svg" alt="image" width={'100%'} height={'100%'} layout="responsive" />
          </div>
          <div className="ml-1 lg:ml-2 mandaloretitle opacity-60 text-xs lg:text-lg">
            <div >Launch date </div>
            <div>May 12, 2021</div>
          </div>
        </div>
        <div className="flex items-center lg:mt-3 text-xs lg:text-lg lg:w-60">
          <div className="rounded-md lg:w-16 lg:h-16 w-10 h-10">
            <Image src="/images/spacex/speed.svg" alt="image" width={'100%'} height={'100%'} layout="responsive" />
          </div>
          <div className="ml-1 lg:ml-2 mandaloretitle opacity-60">
            <div>orbital speed </div>
            <div>7.66 km/s</div>
          </div>
        </div>
        <div className="flex items-center lg:mt-3 text-xs lg:text-lg lg:w-60">
          <div className="rounded-md lg:w-16 lg:h-16 w-10 h-10">
            <Image src="/images/spacex/altitude.svg" alt="image" width={'100%'} height={'100%'} layout="responsive" />
          </div>
          <div className="ml-1 lg:ml-2 mandaloretitle opacity-60">
            <div>orbital altitude </div>
            <div>408 km</div>
          </div>
        </div>
      </div>
    </div>
  );
};
