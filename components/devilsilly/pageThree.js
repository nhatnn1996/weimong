import Image from 'next/image';

export default function PageThree() {
  return (
    <div className="mt-6 2xl:mt-20">
      <div className="flex flex-col-reverse xl:flex-row">
        <div className="xl:w-[30%]">
          <div className="heading-2 mt-4 xl:mt-12">Infinity Lands~</div>
          <p className="text-base mt-3">
            (MINIGAME) The game mode is inspired by the popular Netflix series Squid Games which has captivated viewers and met the needs of those who
            want to participate in the games in the movie. SillyMong drivers will be able to role-play the character to bet against SillyMong players
            and must overcome the challenges of the challenge. The last person to survive and reach the last pass is Victory.
            <span className="italic block text-[#FF8A01]">
              The winner will receive the full prize. The room has no winner, the reward will be withdrawn from the system
            </span>
          </p>
        </div>
        <div className="xl:pl-20 xl:w-[70%]">
          <div className="w-full">
            <Image priority src="/images/SlillyMong4.png" layout="responsive" width="100%" height="54.6%" alt="Not found image" />
          </div>
        </div>
      </div>
    </div>
  );
}
