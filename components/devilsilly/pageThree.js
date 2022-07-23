import Image from 'next/image';

export default function PageThree() {
  return (
    <div className="mt-20">
      <div className="2xl:flex w-full">
        <div className="2xl:w-[50%]">
          <div className="text-xl 2xl:text-4xl mb-4 mt-20" style={{ lineHeight: '1.6' }}>
            Infinity Lands~
          </div>
          <p className="text-xs 2xl:text-base">
            The game mode is inspired by the popular Netflix series Squid Games which has captivated viewers and met the needs of those who want to
            participate in the games in the movie. Unlock conditions: Players must own the Extremes Duo character SillyMong to participate. When
            joining the player must trade with a certain number of things the player owns on the game platform.
          </p>
        </div>
        <div className="xl:pl-20 mt-5">
          <Image priority placeholder="blur" src="/images/sillymong2.png" layout="responsive" width="100%" height="54.6%" alt="Not found image" />
        </div>
      </div>
    </div>
  );
}
