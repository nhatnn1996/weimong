import Head from 'next/head';
import Image from 'next/image';
import { TitleSpecial } from '@/components/common/title';
import { Button } from '@/components/common/button';

export default function Home() {
  return (
    <div className="py-10 relative z-10">
      <div className="flex py-[5rem] px-[3.5rem] md:px-[6rem] xl:px-[10rem] flex-wrap">
        <div className="w-1/2 text-left">
          <div className="w-[35rem] h-[19.375rem]">
            <Image priority={true} src={'/images/weimong/free.png'} alt="not found image" width={'35rem'} height={'19.375rem'} layout="responsive" />
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <div className="flex justify-end w-full">
            <div className="w-[95%]">
              <TitleSpecial>Added-value for NFTs</TitleSpecial>
              <p className="mt-5 md:mt-8  leading-6 pinkchicken text-[#bbbaba]  max-w-[39.843rem] text-xl 2xl:text-2xl">
                Users get rewarded for their engagement and enjoyment. The game creates an ecosystem that can be connected to the Metaverse
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 mt-10 2xl:mt-32 flex items-center h-full">
          <div className="flex justify-start w-full">
            <div className="w-[95%]">
              <TitleSpecial>Owned by the players</TitleSpecial>
              <p className="mt-5 md:mt-8 leading-6 pinkchicken text-[#bbbaba] max-w-[39.843rem] w-full text-xl 2xl:text-2xl">
                Players have actual ownership of their in-game assets. Using the power of NFT, The assets you earn in games are owned by the players
                and live forever on the blockchain.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-10 2xl:mt-32 text-right">
          <div className="w-[35rem] ml-auto">
            <Image priority={true} src={'/images/weimong/owner.png'} alt="not found image" width={'100%'} height={'55.3%'} layout="responsive" />
          </div>
        </div>

        <div className="w-1/2 mt-10 2xl:mt-32">
          <div className="w-[35.125rem] h-[34.375rem]">
            <Image priority={true} src={'/images/weimong/added.png'} alt="not found image" width={'100%'} height={'100%'} layout="responsive" />
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end mt-10 2xl:mt-32 ">
          <div className="flex justify-end w-full">
            <div className="w-[95%]">
              <TitleSpecial>Added-value for NFTs</TitleSpecial>
              <p className="mt-5  md:mt-8 leading-6 pinkchicken text-[#bbbaba]  max-w-[39.843rem] text-xl 2xl:text-2xl">
                Users get rewarded for their engagement and enjoyment. The game creates an ecosystem that can be connected to the Metaverse
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 pb-52 text-center">
        <Button> Play now </Button>
      </div>
    </div>
  );
}
