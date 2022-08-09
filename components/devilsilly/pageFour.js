import Image from 'next/image';

export default function PageFour() {
  return (
    <div className="mt-6 2xl:mt-20">
      <div className="flex w-full flex-col-reverse xl:flex-row">
        <div className="xl:w-[30%]">
          <div className="heading-2 mt-4 xl:mt-12">
            The more, the more.
          </div>
          <p className="text-base mt-3">
            Each SillyMong possesses different Mining power capabilities. Owners of many SillyMongs can use it to exploit the available resources of
            DEV (Pool) energy. Own the character NFT SillyMongs (Common, Uncommon, Rare, Epic, Legendary).
          </p>
        </div>
        <div className="xl:pl-20 xl:w-[70%]">
          <div className="w-full rounded-xl overflow-hidden">
            <Image priority src="/images/SlillyMong5.png" layout="responsive" width="100%" height="54.6%" alt="Not found image" />
          </div>
        </div>
      </div>
    </div>
  );
}
