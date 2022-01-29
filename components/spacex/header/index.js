import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineTwitter, AiOutlineMenu } from 'react-icons/ai';
import { BsChevronCompactRight } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';
import { FaTelegramPlane, FaRedditAlien, FaFacebookF } from 'react-icons/fa';

import Link from 'next/link';

const subAboutUs = ['team', 'whitepaper', 'roadmap'];
const menu = [
  {
    label: 'about us',
    href: '#',
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

const menuMobile = [
  { label: 'Weimong Miner', href: '#' },
  { label: 'Whitepaper', href: '#' },
  { label: 'Markeplace', href: '#' }
];

const socials = [FaFacebookF, FaTelegramPlane, FaRedditAlien, AiOutlineTwitter];
let enableBackground = false;

const Header = () => {
  const [isShow, setShow] = useState(false);
  const header = useRef();
  const toggle = () => {
    setShow((state) => {
      if (!state === true) {
        document.body.style.touchAction = 'none';
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.touchAction = 'auto';
        document.body.style.overflow = 'auto';
      }
      return !state;
    });
  };

  useEffect(() => {
    var doc = document.documentElement;
    const scrollEvent = (e) => {
      const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      if (top > 70) {
        if (enableBackground) return;
        enableBackground = true;
        header.current.style.background = '#242424';
      } else {
        if (!enableBackground) return;
        enableBackground = false;
        header.current.style.background = 'transparent';
      }
      
    };
    document.addEventListener('scroll', scrollEvent);
    return () => {
      document.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full left-0 z-[10000] text-white transition-colors  duration-50" ref={header}>
        <nav className="w-[90rem] mx-auto py-2 xl:px-0 lg:py-10 flex items-center px-4 max-w-[100vw]">
          <div className="">
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
          <div
            className={`mandaloretitle fixed top-[59px] left-0 w-full h-screen bg backdrop-blur-xl overflow-hidden transition ease-in-out z-50 ${
              isShow ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="py-4 px-4 flex flex-col items-center text-white">
              {menu.map((element, index) => (
                <Link href={element.href} key={index} passHref>
                  <a href="" className="mt-4 text-xl">
                    {element.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          {/* <div className="ml-8">
            <Music className="hidden" />
          </div> */}
          {isShow && <VscChromeClose className="w-[1.7rem] h-[1.9rem]   cursor-pointer lg:hidden ml-auto" onClick={toggle} />}
          {!isShow && <AiOutlineMenu className="w-[1.7rem] h-[1.9rem] stroke-2 cursor-pointer lg:hidden ml-auto" onClick={toggle} />}
          <div className="ml-auto hidden lg:block">
            <button className="rounded-full lg:py-2.5  py-2 px-4 border-[1px] mandaloretitle tracking-[1px] lg:tracking-[1.8px] text-[12px] lg:text-[14px] whitespace-nowrap">
              connect wallet
            </button>
          </div>
        </nav>
      </div>
      <header className="header flex flex-col bg-black text-white top-0 left-0 z-50 relative min-h-screen bg-[url('/images/spacex/header.png')] bg-cover bg-right">
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[-1]"></div>
        <div className="w-[90rem] px-4 lg:px-0 mx-auto mt-auto mandaloretitle text-[#ffffff99] lg:text-[#FFFFFF66]">
          <div className="whitespace-pre text-md md:text-xl lg:text-sm	">
            <div className="mb-3 lg:mb-0">First stage – S-IC</div>
            <div className="mb-3 lg:mb-0">Length 138.0 ft (42.1 m) </div>
            <div className="mb-3 lg:mb-0">Diameter 33.0 ft (10.1 m) </div>
            <div className="mb-3 lg:mb-0">Empty mass 287,000 lb (130,000 kg) </div>
            <div className="mb-3 lg:mb-0">Gross mass 5,040,000 lb (2,290,000 kg) </div>
            <div className="mb-3 lg:mb-0">Engines 5 Rocketdyne F-1 </div>
            <div className="mb-3 lg:mb-0">Thrust 7,891,000 lbf (35,100 kN) sea level </div>
            <div className="mb-3 lg:mb-0">Specific impulse 263 seconds (2.58 km/s) sea level</div>
          </div>
        </div>
        <div className="mt-6 lg:mt-12 lg:w-[90rem] px-4 lg:mx-auto">
          <button className="rounded-full px-8 py-3 border-[1px] mandaloretitle tracking-[1.8px] text-[14px] items-center flex">
            timeline
            <BsChevronCompactRight className="ml-2 w-2 h-2 stroke-2" />
            <BsChevronCompactRight className="w-2 h-2 stroke-2" />
            <BsChevronCompactRight className="w-2 h-2 stroke-2" />
          </button>
        </div>

        <div className="mt-6 lg:mt-16 mb-10 lg:w-[90rem] mx-auto xl:flex">
          <div className="xl:border-[0.5px] border-[#FFFFFF33] rounded-lg w-[100vw] max-w-[20rem]  p-4 h-fit hidden md:block">
            <video src="/videos/w-x-header.mp4" className="lg:w-full lg:h-auto rounded-md" muted autoPlay={'autoplay'} preload="auto" loop></video>
          </div>
          <div className="lg:mt-20 w-[100vw] flex-1 flex flex-wrap px-4 xl:px-0">
            {infomation.map((item, index) => {
              return (
                <div className="last:flex-1 relative mr-4 border-t-[1px] border-[#FFFFFF33] mt-4 lg:mt-10 xl:mt-0" key={index}>
                  <div className="absolute w-2 h-2 translate-x-[-50%] translate-y-[-50%] rounded-full bg-white" />
                  <div className="mt-4 px-6">
                    <div className="text-[#FFFFFF66] mandaloretitle text-xl 2xl:text-[12px] 2xl:tracking-[2px]">{item.label}</div>
                    <div className="tracking-[1px] font-bold whitespace-nowrap text-xl 2xl:text-[20px] mandaloretitle">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 lg:mt-20">
            <div className="flex xl:translate-y-[-50%] justify-center">
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
    </>
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
