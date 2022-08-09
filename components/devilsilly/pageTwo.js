import Image from 'next/image';

export default function PageTwo() {
  return (
    <div className="mt-6 2xl:mt-20">
      <div className="flex flex-col-reverse xl:flex-row">
        <div className="xl:w-[30%]">
          <div className="heading-2 mb-4 mt-4 xl:mt-12">
            Survive and <br /> complete missions!{' '}
          </div>
          <p className="text-base mt-3">
            In this mode, SillyMong can hide and receive special power-ups provided by the system when the player completes quests in the playroom.
            These power factors have certain benefits that allow SillyMong to protect himself against the Devil.
          </p>
        </div>
        <div className="xl:pl-20 xl:w-[70%]">
          <div className="w-full">
            <Image priority src="/images/SillyMong2.png" layout="responsive" width="100%" height="54.6%" alt="Not found image" />
          </div>
        </div>
      </div>
    </div>
  );
}
