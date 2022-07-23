import Image from 'next/image';

export default function Partner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[url(/images/weimong/bg-content.png)] w-[62.3rem] h-[31.3rem] flex items-center justify-center">
        <div className="pt-12 px-14">
          <div className="w-[15.5rem] h-[5.875rem] relative">
            <Image priority src={'/images/weimong/titras.png'} alt="not found image" width={'100%'} height={'35%'} layout="responsive" />
          </div>
        </div>
        <div className="pt-12 px-14">
          <div className="w-[15.375rem] h-[4.75rem]">
            <Image priority src={'/images/weimong/weilion.png'} alt="not found image" width={'15.375rem'} height={'4.758rem'} layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}
