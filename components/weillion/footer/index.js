import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import Link from 'next/link';

const Footer = () => {
  const links = [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Help', href: '#' },
    { label: 'User Generated Contend Policies', href: '#' }
  ];
  return (
    <footer className="mt-10 md:pt-32 pb-10">
      <div className="container mx-auto border-t-[1px] border-black-500 md:flex items-center justify-between">
        <div className="flex items-center justify-center gap-3 px-4 pt-8">
          <Link href="#" passHref><AiOutlineTwitter className="w-8 h-8" /></Link>
          <Link href="#" passHref><SiDiscord className="w-8 h-8" /></Link>
          <Link href="#" passHref><AiFillInstagram className="w-8 h-8" /></Link>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left">
          {links.map((element) => (
            <Link href={element.href} key={element.href}>
              <a className="text-xl-s md:border-r-[1px] px-2 font-bold mt-4"> {element.label} </a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;