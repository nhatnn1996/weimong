import Image from 'next/image';
import { useState } from 'react';

const Tabs = ({ active, setActive }) => {
  return (
    <div className="">
      <div className="flex text-[#FF9E00] whitespace-nowrap justify-between xl:justify-start xl:px-0 mb-4">
        <div
          className={'heading-6 border-b-[3px] cursor-pointer pb-3 ' + (active === 0 ? ' border-[#FF9E00]' : 'border-white')}
          onClick={() => {
            setActive(0);
          }}>
          Horror Lands
        </div>
        <div
          className={'heading-6 border-b-[3px] cursor-pointer ml-10 ' + (active === 1 ? ' border-[#FF9E00]' : 'border-white')}
          onClick={() => {
            setActive(1);
          }}>
          Devil’s House
        </div>
      </div>
    </div>
  );
};

export default function PageOne() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-6 2xl:mt-20">
      {active === 0 && (
        <div className="flex w-full flex-col-reverse xl:flex-row">
          <div className="xl:w-[30%]">
            <div className="mt-3">
              <Tabs setActive={setActive} active={active} />
            </div>
            <div className="heading-2">What happened to this land?</div>
            <p className="body-regular mt-3">
              In this mode, the player will discover the core formation of the SillyMong world and learn why it is called the Horror Lands. Players
              must solve the puzzles in this mode in turn. Rewards in this mode will be received when the player completes the puzzles and understands
              the meaning of Horror Lands.
            </p>
          </div>
          <div className="xl:pl-20 mt-5 xl:mt-0 xl:w-[70%]">
            <div className="w-full">
              <Image src="/images/sillymong.png" layout="responsive" width="100%" height="54.6%" alt="Not found image" />
            </div>
          </div>
        </div>
      )}
      {active === 1 && (
        <div className="flex w-full flex-col-reverse xl:flex-row">
          <div className="xl:w-[30%]">
            <div className="mt-3">
              <Tabs setActive={setActive} active={active} />
            </div>
            <div className="heading-2">Survive and complete missions!</div>
            <p className="body-regular mt-3">
              The player must help SillyMong traverse the lands of Discovery mode and Devil's Mansion much more difficult than the normal gameplay.
              <br />
              SillyMong will begin to learn the story of why the world in "DevilSilly" was born and contains so many treasures, and why the "Devil"
              were born to protect the treasure there. Who really owns it and will SillyMong eventually track down and unearth the treasure? Players
              must control their SillyMong to fight the bait, destroy the Devil and then unearth the treasure in this game mode.
            </p>
          </div>
          <div className="xl:pl-20 mt-5 xl:mt-0 xl:w-[70%]">
            <div className="w-full">
              <Image src="/images/SillyMong_2.png" layout="responsive" width="100%" height="54.6%" alt="Not found image" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
