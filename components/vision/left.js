import Image from 'next/image';

const LeftVision = () => {
  return (
    <div className="relative">
      <div className="xl:w-full xl:p-8 p-2">
        <Image priority={true} src={'/images/image-1.png'} alt="not found image" width={'100%'} height={'120%'} layout="responsive" />
      </div>
      <div className="absolute right-[40%] w-[6rem]  xl:w-[13rem] top-[-8%]">
        <img src={'/images/image-3.png'} className="w-full" />
      </div>
      <div className="absolute right-[-10%] w-[6rem] xl:w-[13rem] marker: bottom-[8%]">
        <img src={'/images/currency.png'} />
      </div>
      <div className="absolute left-[-10%] w-[6rem] xl:w-[13rem] top-[40%]">
        <img src={'/images/gold.png'} />
      </div>
    </div>
  );
};

export default LeftVision;
