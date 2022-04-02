import Head from 'next/head';
import Image from 'next/image';
import { TitleSpecial } from '@/components/common/title';
import { Button } from '@/components/common/button';

export default function Home() {
  return (
    <div className="py-10">
      <div className="flex py-[5rem] px-[3.5rem] flex-wrap">
        <div className="w-1/2 pr-6">
          <div className="w-[35rem] h-[19.375rem]">
            <Image priority src={'/images/weimong/free.png'} alt="not found image" width={'35rem'} height={'19.375rem'} layout="responsive" />
          </div>
        </div>
        <div className="w-1/2 pl-6 flex items-center">
          <div>
            <TitleSpecial>Added-value for NFTs</TitleSpecial>
            <p className="mt-5 leading-6 pinkchicken text-[#bbbaba]  max-w-[39.843rem] text-2xl">
              Users get rewarded for their engagement and enjoyment. The game creates an ecosystem that can be connected to the Metaverse
            </p>
          </div>
        </div>

        <div className="w-1/2 pr-6 mt-6">
          <TitleSpecial>Owned by the players</TitleSpecial>
          <p className="mt-5 leading-6 pinkchicken text-[#bbbaba] max-w-[39.843rem] w-full text-2xl">
            Players have actual ownership of their in-game assets. Using the power of NFT, The assets you earn in games are owned by the players and
            live forever on the blockchain.
          </p>
        </div>
        <div className="w-1/2 pl-6 flex items-center  mt-6">
          <div className="w-[39.5rem] h-[25.938rem]">
            <Image priority src={'/images/weimong/owner.png'} alt="not found image" width={'35rem'} height={'19.375rem'} layout="responsive" />
          </div>
        </div>

        <div className="w-1/2 pr-6">
          <div className="w-[35.125rem] h-[34.375rem]">
            <Image priority src={'/images/weimong/added.png'} alt="not found image" width={'100%'} height={'100%'} layout="responsive" />
          </div>
        </div>
        <div className="w-1/2 pl-6 flex items-center">
          <div>
            <TitleSpecial>Added-value for NFTs</TitleSpecial>
            <p className="mt-5 leading-6 pinkchicken text-[#bbbaba]  max-w-[39.843rem] text-2xl">
              Users get rewarded for their engagement and enjoyment. The game creates an ecosystem that can be connected to the Metaverse
            </p>
          </div>
        </div>
      </div>
      <div className="pt-20 pb-52 text-center">
        <Button> Play now </Button>
      </div>
    </div>
  );
}
