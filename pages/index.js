import { DiscordIcon } from '@/components/icons';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Weimong to the moon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <div className="w-full">
          <Image src="/images/header.jpg" alt="" layout="responsive" width={'100%'} height={'50%'} />
        </div>
        <div className="absolute bottom-[-1px] right-0 text-white flex w-full justify-between">
          <div className="bg-white p-2  flex">
            <div className="py-2 px-6 border-r-[1px] center flex-col">
              <div className="text-[#FF7700] text-3xl drop-shadow-md	">3.208.863</div>
              <p className="mt-4 text-xl text-[#828282]">Registered Users</p>
            </div>
            <div className="py-2 px-6 border-r-[1px]  flex-col center">
              <div className="text-[#FF7700] text-3xl drop-shadow-md	">$298.568.909</div>
              <p className="mt-4 text-xl text-[#828282]">NFT Trade Volume</p>
            </div>
            <div className="py-2 px-6 flex-col center">
              <div className="text-[#FF7700] text-3xl drop-shadow-md">$298.568.909</div>
              <p className="mt-4 text-xl text-[#828282]">NFTs Minted</p>
            </div>
          </div>
          <div className="max-w-[59rem] w-full px-[2.125rem] pb-[1.688rem]">
            <div className="title whitespace-nowrap text-[4.6vw]">Discover & collect</div>
            <p className="mt-[-10px]">
              DevilSilly will be unlike any other Play-to-Earn Games you have experienced, because it was created by Gamers, for Gamers.
            </p>
          </div>
        </div>
      </div>
      <Link href="#" passHref>
        <div className="fixed duration-200 cursor-pointer hover:right-[-5px] bottom-[30%] right-[-20px] border-[#FF7A00] rounded-md border-[3px] bg-white py-2 pl-7 pr-12 flex items-center">
          <DiscordIcon className="w-[3rem] " />
          <span className="bubikglitch ml-3 text-[#FF7A00]">Join our Discord</span>
        </div>
      </Link>
    </div>
  );
}
