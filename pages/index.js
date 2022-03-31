import Head from 'next/head';
import { ButtonTab, ButtonLogin, ConnectWalet } from '@/components/common/button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weimong to the moon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black text-white relative z-10 bg-[url(/images/weimong/bg-home.png)] bg-[length:100%] h-screen flex flex-col justify-between">
        <div className="flex pt-[7rem] justify-center relative">
          <div className="absolute top-10 right-10">
            <ButtonLogin />
          </div>
          <ButtonTab />
        </div>
        <div className="mb-10">
          <div className="text-center text-2xl text-[white]">Weimong in space</div>
          <div className="pinkchicken text-[#C5C5CF] text-xl text-center max-w-[47rem] mx-auto mt-4">
            WEIMONG is the mascot that astronauts always take with them when going into space, representing one of the preparation steps for the
            journey into space.
          </div>
          <div className="text-center mt-16">
            <ConnectWalet />
          </div>
        </div>
      </div>
    </div>
  );
}
