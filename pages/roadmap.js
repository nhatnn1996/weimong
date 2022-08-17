const list = [
  "Introduction to ideas DevilSilly Character Concept Art Website DevilSilly v1 SillyMong video Trailer(2D) Release Roadmap Release Whitepaper Release Pitch Deck",
  `Demo game DevilSilly Whitelist DEV NFT Season 1 Start Roadmap V2 Announcement Whitelist for DEB NFTs Pre-sale Website V2 DEV NFT Pre-sale`,
  `Whitelist for Second NFT Offering Second NFT Offering: Pancha Triad NFT Public Mint DevilSilly Token IEO: $DEV`,
  `Demo game DevilSilly - DevilSilly Token IEO: $DEV - DevilSilly Temple: Staking - Public Alpha Testnet Core Gameplay Discovery Mode Launch - Beta Testnet Devil's House Launch - Beta Testnet Squid SillyMong Game Launch - Beta Testnet Mining Launch - Box NFT mytery box that allows to piece together and use`,
  `Develop ideas, balance, create opportunities Expanding game maps on DevilSilly`
];
export default function Roadmap() {
  return (
    <div className="">
      <div className="hidden xl:block">
        <img src="/images/roadmap.png" alt="title" />
      </div>
      <div className="flex xl:hidden flex-col px-8 ">
        <div className="text-center text-2xl-s">Roadmap</div>
        {list.map((element, indx) => {
          return (
            <div key={element} className="roadmap-bg-linear flex">
              <span className="font-bold number text-xl text-white flex min-w-[30%]">{indx}</span>
              <span>{element}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
Roadmap.layout = 'full';
