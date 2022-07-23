import Image from 'next/image';

export default function PageOne() {
  return (
    <div className="mt-20">
      <div className="2xl:flex w-full">
        <div className="2xl:w-[50%]">
          <div className="text-xl 2xl:text-4xl mb-4 mt-20" style={{ lineHeight: '1.6' }}>
            What happened to this land?
          </div>
          <p className="text-xs 2xl:text-base">
            In this mode, the player will discover the core formation of the SillyMong world and learn why it is called the Horror Lands. Players must
            solve the puzzles in this mode in turn. Rewards in this mode will be received when the player completes the puzzles and understands the
            meaning of Horror Lands.
          </p>
        </div>
        <div className="xl:pl-20 mt-5">
          <div>
            <Image priority placeholder="blur" src="/images/sillymong.png" layout="responsive" width="100%" height="54.6%" alt="Not found image" />
          </div>
        </div>
      </div>
    </div>
  );
}
