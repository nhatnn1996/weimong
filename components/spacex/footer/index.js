import Image from 'next/image';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegramPlane, FaRedditAlien, FaFacebookF } from 'react-icons/fa';
import { RiDiscordFill } from 'react-icons/ri';

const socials = [FaFacebookF, FaTelegramPlane, FaRedditAlien, AiOutlineTwitter, RiDiscordFill];

const Footer = () => {
  return (
    <div className="bg-[#242424] py-16">
      <div className="w-[90rem] mx-auto flex">
        <div className="w-2/12">
          <Image src="/images/spacex/logo-big.png" width="100%" height={'25.6%'} layout="responsive" alt="big logo" />
        </div>
        <div className="w-10/12 flex justify-end items-center">
          {socials.map((Icon, index) => {
            return (
              <div className="first:ml-0 ml-6 w-16 h-16 rounded-full border-[0.5px] border-[#FFFFFF33] flex items-center justify-center" key={index}>
                <Icon className="w-7 h-7 " />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
