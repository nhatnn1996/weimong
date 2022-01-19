import Image from 'next/image';
import { BiTargetLock } from 'react-icons/bi';

const items = [
  { label: 'total length of the truss', value: '108.4 m' },
  { label: 'WEIGHT (400 tons)', value: '~400.000 kg' },
  { label: 'the pressurized volume', value: '~1000 m3' },
  { label: 'Length of all modules', value: '74 m' }
];
const WieSpace = () => {
  return (
    <div className="h-screen relative flex bg-black bg-[url('/images/spacex/weispace.webp')] bg-cover bg-left-top ">
      <div className="overlay z-20 absolute top-0 left-0 w-full h-[232px]"></div>
      <div className="overlay-bottom z-20 absolute bottom-0 left-0 w-full h-[150px]"></div>
      <div className="flex w-full">
        <div className="w-5/12 backdrop-blur-lg bg-[#282828ce] h-screen"></div>
      </div>
      <div className="absolute top-0 left-0 w-full z-20">
        <div className="w-[90rem] mx-auto py-[43px]">
          <div className="w-4/12">
            <div className="mandaloretitle top-0 left-0 opacity-75 text-stroke text-transparent text-8xl tracking-[16px]">weispace</div>
            <div className="tamtam mt-12 py-9 px-10 text-xs font-bold leading-5" style={{ '--bottom-right': '40px', '--weight': '1px' }}>
              WEILION SPACE is a matrix space station for the development of space exploration ecosystem using WEI energy for the initiation process.
              Theoretically, the WEI energy is made from each point in the blockchain space which is block-quantized in the matrix by the chain
              platform source core with core multi matters, for example Binance Smart Chain or Aleph Zero. Chain platform source cores are encrypted
              in unique NFT form as a unique matter in blockchain space exploration.
            </div>
            <div className="border-t-[0.5px] border-t-[#ffffff73] mt-6" />
            <div className="mt-6">
              {items.map((element, index) => (
                <div key={index} className="mt-4">
                  <div className="mandaloretitle text-[#FFFFFF66]">{element.label}</div>
                  <div className="mandalorehalf mt-1 text-xl">{element.value}</div>
                </div>
              ))}
            </div>
            <div className=" border-t-[0.5px] border-t-[#ffffff73] my-6" />
            <div className="relative">
              <div className="relative mandaloretitle text-xl">
                <div className="absolute top-[50%] right-full translate-y-[-50%] translate-x-[-50%] ">
                  <BiTargetLock className="w-6 h-6 fill-white" />
                </div>
                lauch location
              </div>
              <div className="text-xs mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, fuga! Unde perferendis dicta natus, delectus nesciunt aperiam
                sapiente provident, culpa ad architecto quo maiores? Sunt culpa nulla ab est magnam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WieSpace;
