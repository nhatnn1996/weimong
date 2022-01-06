import Image from 'next/image';
import Link from 'next/link';
const GamePlayScreenShot = () => {
  return (
    <div className="bg-black py-4 container mx-auto">
      <div className="text-5xl text-center font-bold">GAME PLAY SCREENSHOTS</div>
      <div className="text-center grid grid-cols-3 mt-20 gap-12">
        <Image className='rounded-xl' layout='responsive' src="/images/screen1.png" width="100%" height="57%"  alt="" objectFit="cover" />
        <Image className='rounded-xl' layout='responsive' src="/images/screen2.png" width="100%" height="57%"  alt="" objectFit="cover" />
        <Image className='rounded-xl' layout='responsive' src="/images/screen3.png" width="100%" height="57%"  alt="" objectFit="cover" />
      </div>
      <div className="text-center grid grid-cols-6 mt-10 gap-12">
        <div className="col-start-2 col-span-2">
          <Image className='rounded-xl ' layout='responsive' src="/images/screen1.png" width="100%" height="57%"  alt="" objectFit="cover" />
        </div>
        <div className="col-span-2">
          <Image className='rounded-xl ' layout='responsive' src="/images/screen1.png" width="100%" height="57%"  alt="" objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default GamePlayScreenShot;
