import Head from 'next/head';
import Image from 'next/image';
import { TitleSpecial } from '@/components/common/title';
import { Button } from '@/components/common/button';

export default function Home() {
  return (
    <div className="py-10 relative z-10">
      <div className="flex py-[5rem] px-[3.5rem] md:px-[6rem] xl:px-[20rem] flex-wrap">
        <div className="w-1/2 text-left">
          <div className="w-[23.813rem] wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s">
            <Image priority={true} src={'/images/weimong/roadmap-1.png'} alt="not found image" width={'100%'} height={'97.3%'} layout="responsive" />
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end">
          <div className="flex justify-end w-full">
            <div className="w-[95%]">
              <TitleSpecial>Phase 0: DEC-FEB 2022</TitleSpecial>
              <ul className="mt-5 md:mt-8 px-10 leading-6 pinkchicken text-[#bbbaba]  max-w-[39.843rem] text-xl-s 2xl:text-2xl-s list-roadmap">
                <li className="mb-4 active">WEIMONG Character Concept Art</li>
                <li className="mb-4 active">WEIMONG Game concepts</li>
                <li className="mb-4 active">Website V1</li>
                <li className="mb-4 active">Twitter & Discord Community</li>
                <li className="mb-4 active">Roadmap v1 Announcement</li>
                <li className="mb-4 active">Release Whitepaper</li>
                <li className="mb-4 active">Release Pitch Deck</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-10 xl:mt-32 flex items-center h-full">
          <div className="flex justify-start w-full">
            <div className="w-[95%]">
              <TitleSpecial>Owned by the players</TitleSpecial>
              <ul className="mt-5 md:mt-8 px-10 leading-6 pinkchicken text-[#bbbaba]  max-w-[39.843rem] text-xl-s 2xl:text-2xl-s list-roadmap">
                <li className="mb-4 active">WEIMONG Character Concept Art</li>
                <li className="mb-4">Whitelist WEI NFT Season 1 Start</li>
                <li className="mb-4">Roadmap V2 Announcement</li>
                <li className="mb-4">Whitelist for WEI NFT Pre-sale</li>
                <li className="mb-4">Website V2</li>
                <li className="mb-4">WEI NFT Pre-sale</li>
                <li className="mb-4">Web Update</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-10 xl:mt-32 text-right">
          <div className="w-[15.063rem] ml-auto">
            <Image
              priority={true}
              src={'/images/weimong/roadmap-2.png'}
              alt="not found image"
              width={'100%'}
              height={'201.4%'}
              style={{ maxWidth: '273px' }}
              layout="responsive"
            />
          </div>
        </div>

        <div className="w-1/2 mt-10 xl:mt-32">
          <div className="text-right">
            <div className="w-[25.75rem]">
              <Image
                priority={true}
                src={'/images/weimong/roadmap-3.png'}
                alt="not found image"
                width={'100%'}
                height={'82.18%'}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end mt-10 xl:mt-32 ">
          <div className="flex justify-end w-full">
            <div className="w-[95%]">
              <TitleSpecial>Phase 2: Q2-2022</TitleSpecial>
              <ul className="mt-5 md:mt-8 px-10 leading-6 pinkchicken text-[#f6e9e9]  max-w-[39.843rem] text-xl-s 2xl:text-2xl-s list-roadmap">
                <li className="mb-4">Whitelist for Second NFT Offering</li>
                <li className="mb-4">Second NFT Offering: Pancha Triad NFT Public Mint</li>
                <li className="mb-4">Weilion Token IEO: $WEI</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-1/2 mt-10 xl:mt-32 flex items-center h-full">
          <div className="flex justify-start w-full">
            <div className="w-[95%]">
              <TitleSpecial>Owned by the players</TitleSpecial>
              <ul className="mt-5 md:mt-8 px-10 leading-6 pinkchicken text-[#bbbaba]  max-w-[39.843rem] text-xl-s 2xl:text-2xl-s list-roadmap">
                <li className="mb-4">Core Gameplay Discovery</li>
                <li className="mb-4">Gameplay Infomation</li>
                <li className="mb-4">Gameplay Mining</li>
                <li className="mb-4">Gameplay Survival</li>
                <li className="mb-4">Box NFT mystery box that allows to piece together and use</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/2 mt-10 xl:mt-32 text-right">
          <div className="w-[28rem] ml-auto">
            <Image priority={true} src={'/images/weimong/roadmap-4.png'} alt="not found image" width={'100%'} height={'87%'} layout="responsive" />
          </div>
        </div>

        <div className="w-1/2 mt-10 xl:mt-32">
          <div className="text-right">
            <div className="w-[30rem]">
              <Image
                priority={true}
                src={'/images/weimong/roadmap-5.png'}
                alt="not found image"
                width={'100%'}
                height={'65.625%'}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-end mt-10 xl:mt-32 ">
          <div className="flex justify-end w-full">
            <div className="w-[95%]">
              <TitleSpecial>Phase 2: Q2-2022</TitleSpecial>
              <ul className="mt-5 md:mt-8 px-10 leading-6 pinkchicken text-[#f6e9e9]  max-w-[39.843rem] text-xl-s 2xl:text-2xl-s list-roadmap">
                <li className="mb-4">Whitelist for Second NFT Offering</li>
                <li className="mb-4">Second NFT Offering: Pancha Triad NFT Public Mint</li>
                <li className="mb-4">Weilion Token IEO: $WEI</li>
              </ul>
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
