import Head from 'next/head';
import Image from 'next/image';

export default function Technology() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[url(/images/weimong/bg-content.png)] w-[62.3rem] h-[31.3rem] px-32 py-32">
        <div className="flex flex-wrap">
          <div className="w-1/2 pl-12  mt-12">
            <div className="box w-[15.938rem] h-[5.438rem]">
              <Image priority src={'/images/weimong/binance.png'} alt="not found image" width={'15.938rem'} height={'5.438rem'} layout="responsive" />
            </div>
          </div>
          <div className="w-1/2 pl-12  mt-12">
            <div className="box w-[15.375rem] h-[5.438rem]">
              <Image priority src={'/images/weimong/python.png'} alt="not found image" width={'15.375rem'} height={'5.438rem'} layout="responsive" />
            </div>
          </div>
          <div className="w-1/2 pl-12 mt-12">
            <div className="box w-[15rem] h-[5.438rem]">
              <Image priority src={'/images/weimong/firebase.png'} alt="not found image" width={'15rem'} height={'5.438rem'} layout="responsive" />
            </div>
          </div>
          <div className="w-1/2 pl-12  mt-12">
            <div className="box w-[12.188rem] h-[5.438rem]">
              <Image priority src={'/images/weimong/unity.png'} alt="not found image" width={'12.188rem'} height={'5.438rem'} layout="responsive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
