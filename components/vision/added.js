import { Discord, Facebook, Instagram } from '@/components/icons';
export default function Added() {
  return (
    <div className="ml-20 mt-20">
      <div className="title" style={{ lineHeight: '1.2' }}>
        Added-value for NFTs
      </div>
      <p className="mt-6 leading-10 pr-3">
        SillyMong NFTs can be used across the entire ecosystem. Focusing on NFT interoperability.
        <br />
        SillyMong NFTs can be used in multiple mode gameplay at the same time, creating a whole new world of fun.
      </p>
      <div className="flex items-center mt-10">
        <div className="bg-gradient-oranger flex text-bold items-center pt-4 pb-3 cursor-pointer px-7 text-white hover:shadow-md hover:translate-y-[-2px] duration-200 w-fit">
          <span className="mr-3 font-bold">Join Discord</span> <Discord className="w-7 h-7 " />
        </div>
        <div className="rounded-full w-[42px] h-[42px] border-[1px] border-[#FF9E00] flex items-center justify-center ml-3">
          <Instagram className="fill-[#FF9E00] w-[24px] h-[24px]" />
        </div>
        <div className="rounded-full w-[42px] h-[42px] border-[1px] border-[#FF9E00] flex items-center justify-center ml-3">
          <Facebook className="w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  );
}
