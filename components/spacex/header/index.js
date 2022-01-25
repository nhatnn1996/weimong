import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AiOutlineTwitter, AiOutlineMenu } from 'react-icons/ai';
import { BsChevronCompactRight } from 'react-icons/bs';
import { FaTelegramPlane, FaRedditAlien, FaFacebookF } from 'react-icons/fa';

import Link from 'next/link';

const subAboutUs = ['team', 'whitepaper', 'roadmap'];
const menu = [
  {
    label: 'about us',
    href: '',
    sub: subAboutUs
  },
  {
    label: 'weispace',
    href: '#'
  },
  {
    label: 'orbit',
    href: '#'
  },
  {
    label: 'weimong',
    href: '#'
  },
  {
    label: 'market place',
    href: '#'
  }
];

const infomation = [
  {
    label: 'holder',
    value: '2.500.000'
  },
  {
    label: 'total liquidity',
    value: '$ 1.000.310.427'
  },
  {
    label: 'burned',
    value: '10.000.000'
  },
  {
    label: 'market cap',
    value: '$ 730.244.000.014'
  }
];

const socials = [FaFacebookF, FaTelegramPlane, FaRedditAlien, AiOutlineTwitter];

const Header = () => {
  const [isShow, setShow] = useState(false);
  const toggle = () => {
    setShow((state) => {
      if (state) {
        document.body.style.overflow = 'scroll';
      } else {
        document.body.style.overflow = 'hidden';
      }
      return !state;
    });
  };

  return (
    <header className="header flex flex-col bg-black text-white top-0 left-0 z-50 relative h-screen bg-[url('/images/spacex/header.png')] bg-cover bg-right">
      <div className="w-[90rem] mx-auto">
        <nav className="py-5 lg:py-20 flex items-center px-4max-w-[100vw]">
          <AiOutlineMenu className="w-[1.7rem] h-[1.9rem] stroke-2 cursor-pointer" />
          <div className="hidden lg:block">
            <Link href={'/'} passHref>
              <Image className="cursor-pointer" src="/images/spacex/logo.webp" alt="logo image" width={'164px'} height={'42px'} />
            </Link>
          </div>
          <div className="ml-auto mandaloretitle lg:flex gap-20 hidden">
            {menu.map((item, index) => (
              <div key={index} className="group cursor-pointer relative blink-text-menu">
                <Link passHref href={item.href}>
                  <div className="text-md item hover:opacity-70">{item.label}</div>
                </Link>
                {item.sub?.length > 0 && (
                  <div className="hidden group-hover:block absolute top-[100%] left-0 p-4 bg-black/20 rounded">
                    {item.sub.map((sub, index) => (
                      <div className="text-white mb-2 last:mb-0 hover:opacity-70" key={index}>
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* <div className="ml-8">
            <Music className="hidden" />
          </div> */}
          <div className="ml-auto">
            <button className="rounded-full lg:py-2.5  py-2 px-4border-[1px] mandaloretitle tracking-[1px] lg:tracking-[1.8px] text-[12px] lg:text-[14px] whitespace-nowrap">
              connect wallet
            </button>
          </div>
        </nav>
      </div>
      <div className="w-[90rem] mx-auto mt-auto mandaloretitle text-[#FFFFFF66]">
        <div className="whitespace-pre text-md">
          <div className="bold">First stage – S-IC</div>
          <div>Length 138.0 ft (42.1 m) </div>
          <div>Diameter 33.0 ft (10.1 m) </div>
          <div>Empty mass 287,000 lb (130,000 kg) </div>
          <div>Gross mass 5,040,000 lb (2,290,000 kg) </div>
          <div>Engines 5 Rocketdyne F-1 </div>
          <div>Thrust 7,891,000 lbf (35,100 kN) sea level </div>
          <div>Specific impulse 263 seconds (2.58 km/s) sea level</div>
        </div>
      </div>
      <div className="mt-12 w-[90rem] mx-auto">
        <button className="rounded-full px-8 py-3 border-[1px] mandaloretitle tracking-[1.8px] text-[14px] items-center flex">
          timeline
          <BsChevronCompactRight className="ml-2 w-2 h-2 stroke-2" />
          <BsChevronCompactRight className="w-2 h-2 stroke-2" />
          <BsChevronCompactRight className="w-2 h-2 stroke-2" />
        </button>
      </div>

      <div className="mt-16 mb-10  lg:w-[90rem] mx-auto flex">
        <div className="border-[0.5px] border-[#FFFFFF33] rounded-lg min-w-[20rem] p-5 ">
          <video
            src="/videos/w-x-header.mp4"
            className="lg:w-full h-full lg:h-auto rounded-sm"
            muted
            autoPlay={'autoplay'}
            preload="auto"
            loop
          ></video>
        </div>
        <div className=" flex mt-10 w-full flex-1 flex-col">
          {infomation.map((item, index) => {
            return (
              <div className="last:flex-1 relative mr-4 border-t-[1px] border-[#FFFFFF33] fist:bg-red-200 " key={index}>
                <div className="absolute w-2 h-2 translate-x-[-50%] translate-y-[-50%] rounded-full bg-white" />
                <div className="mt-4 px-6">
                  <div className="text-[#FFFFFF66] mandaloretitle text-[12px] tracking-[2px]">{item.label}</div>
                  <div className="tracking-[1px] font-bold text-[20px] mandaloretitle">{item.value}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" mt-10">
          <div className="flex translate-y-[-50%]">
            {socials.map((Icon, index) => {
              return (
                <div
                  className="first:ml-0 ml-6 w-10 h-10 rounded-full border-[0.5px] border-[#FFFFFF33] flex items-center justify-center"
                  key={index}
                >
                  <Icon className="w-5 h-5 " />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const Music = ({ className }) => {
  const [isMute, setMute] = useState(true);
  const classActive = isMute ? '' : 'disabled';
  return (
    <div
      className={`music-waves mobile ${classActive} ${className}`}
      id="btn-music-mobile"
      onClick={() => {
        setMute((mute) => !mute);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
