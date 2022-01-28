import Head from 'next/head';
import Header from '@/components/spacex/header';
import WieSpace from '@/components/spacex/weispace';
import Generation from '@/components/spacex/generation';
import Weitech from '@/components/spacex/weitech';
import WeiMong from '@/components/spacex/weimong';
import RoadMap from '@/components/spacex/roadmap';
import WeiTeam from '@/components/spacex/weiteam';
import Partner from '@/components/spacex/partner';
import Footer from '@/components/spacex/footer';

export default function Home() {
  return (
    <div className="spacex">
      <Head>
        <title>Weimong to the moon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-black text-white relative z-10">
        <WieSpace />
        <Generation />
        <Weitech />
        <WeiMong />
        <RoadMap />
        <div className='relative z-50 flex justify-center min-h-[5rem] bg-[#242424]'>
          <video src="/videos/nasa.mp4" autoPlay={'autoplay'} preload="auto" muted className="w-[calc(100vw-2rem)]  md:w-full absolute sm:relative top-0 left-[50%] translate-y-[-50%] translate-x-[-50%] sm:left-0 sm:translate-x-[0] sm:translate-y-[0]" loop></video>
        </div>
        <WeiTeam />
        <Partner />
        <Footer />
      </main>
    </div>
  );
}
