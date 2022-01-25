import Image from 'next/image';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegramPlane, FaRedditAlien, FaFacebookF } from 'react-icons/fa';
import { RiDiscordFill } from 'react-icons/ri';

const socials = [FaFacebookF, FaTelegramPlane, FaRedditAlien, AiOutlineTwitter, RiDiscordFill];

const Footer = () => {
  return (
    <div className="bg-[#242424] py-16 relative">
      <div className="lg:w-[90rem] mx-auto flex">
        <div className="w-1/2 lg:w-2/12 mx-auto">
          <Image src="/images/spacex/logo-big.png" width="100%" height={'25.6%'} layout="responsive" alt="big logo" />
        </div>
        <div className="w-10/12 flex justify-center lg:justify-end items-center absolute bottom-[100%] left-[50%] lg:relative translate-y-[-100%] translate-x-[-50%]">
          {socials.map((Icon, index) => {
            return (
              <div className="first:ml-0 ml-4 lg:ml-6 w-10 h-10 lg:w-16 lg:h-16 rounded-full border-[0.5px] border-[#FFFFFF33] flex items-center justify-center" key={index}>
                <Icon className="w-5 h-5 lg:w-7 lg:h-7 " />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
