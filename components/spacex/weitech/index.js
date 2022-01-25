import Image from 'next/image';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
const Weitech = () => {
  return (
    <div className="bg-[#242424] pt-10 lg:py-20 px-4 lg:px-0">
      <div className=" w-auto lg:w-[90rem] mx-auto">
        <div className="mandaloretitle top-0 left-0 opacity-75 text-stroke text-transparent text-6xl lg:text-8xl tracking-[2px] lg:tracking-[16px]">wei-tech</div>
        <div className="border-b-[3px] border-[#7a7a7a] mt-12 flex mandalorecond text-xl ">
          <div className="px-20 border-b-[2px] border-white pb-6 translate-y-[2px]">orbit</div>
          <div className="px-20 border-b-[2px] border-[#FFFFFF66] pb-6 text-[#FFFFFF66] translate-y-[2px]">module</div>
        </div>

        <div className="lg:flex py-20">
          <div className="w-full lg:w-8/12 flex items-center lg:pr-10">
            <AiFillLeftCircle className="w-10 h-10 mx-4 opacity-50" />
            <div className="w-[80%] mx-auto rounded-lg overflow-hidden">
              <Image src="/images/spacex/weitech.png" width={'100%'} height={'60%'} alt="image weitech" layout="responsive" />
            </div>
            <AiFillRightCircle className="w-10 h-10 mx-4" />
          </div>
          <div className="w-full lg:w-4/12 mt-16 lg:mt-0 px-10 lg:px-0">
            <div className="text-3xl tracking-[2px] lg:tracking-[14px] opacity-40 mandalorecond pb-3 lg:pb-10 lg:mb-10 lg:border-b-[2px] border-[#FFFFFF66]">The Soyuz Tma-9</div>
            <div className='opacity-40'>
              Modern rockets originated in 1926 when Goddard attached a supersonic (de Laval) nozzle to a high pressure combustion chamber. These
              nozzles turn the hot gas from the combustion chamber into a cooler, hypersonic, highly directed jet of gas, more than doubling the
              thrust and raising the engine efficiency from 2% to 64%.[16] Hs use of liquid propellants instead of gunpowder greatly lowered the
              weight and increased the effectiveness of rockets. Their use in World War II artillery developed the technology further and opened up
              the possibility of human spaceflight after 1945. In 1943 production of the V-2 rocket began in Germany. In parallel with the German
              guided-missile programme, rockets were also used on aircraft, either for assisting
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weitech;
