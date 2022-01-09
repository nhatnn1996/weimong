import Image from 'next/image';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

const Header = () => {
  const [isShow, setShow] = useState(false);

  const menuMobile = [
    { label: 'Weimong Miner', href: '#' },
    { label: 'Whitepaper', href: '#' },
    { label: 'Markeplace', href: '#' }
  ];

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
    <header className="header bg-black text-white">
      <nav className="py-8 px-6 justify-center text-xl hidden md:flex">
        <ul className="flex-1 flex justify-end gap-24 items-center">
          <li className="text-2xl">
            <a href="#">Weimong Miner</a>
          </li>
          <li className="text-2xl">
            <a href="#">Whitepaper</a>
          </li>
        </ul>
        <div className="logo px-24 items-center translate-x-6 translate-y-[-0.5rem]">
          <Image src="/images/logo.svg" className="cursor-pointer" alt="" layout="fill" height="10rem" width="10rem" />
        </div>
        <ul className="flex-1 flex justify-start gap-24 items-center">
          <li className="text-2xl">
            <a href="#">Markeplace</a>
          </li>
          <li className="text-2xl">
            <button className="rounded-full shadow-md px-6 py-1 bg-blue-500 text-white">Login</button>
          </li>
        </ul>
      </nav>
      <nav className="py-1 px-6 bg-black sticky top-0 left-0 justify-between text-xl flex md:hidden items-center">
        <div className="w-24">
          <Image
            src="/images/logo.svg"
            className="cursor-pointer "
            alt=""
            layout="responsive"
            width="100%"
            height="60%"
          />
        </div>
        <div>
          {isShow && <AiOutlineClose onClick={toggle} />}
          {!isShow && <GiHamburgerMenu onClick={toggle} />}
        </div>

        <div
          className={`fixed top-[49px] left-0 w-full h-screen bg backdrop-blur-xl overflow-hidden transition ease-in-out ${
            isShow ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="py-4 px-6 flex flex-col items-center text-black">
            {menuMobile.map((element, index) => (
              <Link href={element.href} key={index} passHref>
                <a href="" className="mt-4">
                  {element.label}
                </a>
              </Link>
            ))}
            <button className="rounded-full shadow-md px-6 py-1 bg-blue-500 text-white mt-6">Login</button>
            <button className="rounded-full shadow-md px-6 py-1 bg-blue-500 text-white mt-6">Register</button>
          </div>
        </div>
      </nav>
      <div className="banner">
        <video src="/videos/header.mp4" className="w-full" muted autoPlay={'autoplay'} preload="auto" loop>
          something
        </video>
      </div>
    </header>
  );
};

export default Header;
