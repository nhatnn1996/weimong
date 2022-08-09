import Image from 'next/image';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
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
    <header className="header bg-black text-white sticky top-0 left-0 z-50">
      <nav className="py-8 px-4justify-center text-xl-s hidden md:flex">
        <ul className="flex-1 flex justify-end gap-24 items-center">
          <li className="text-2xl-s">
            <a href="#">Weimong Miner</a>
          </li>
          <li className="text-2xl-s">
            <a href="#">Whitepaper</a>
          </li>
        </ul>
        <div className="logo px-24 items-center translate-x-6 translate-y-[-0.5rem]">
          <Image src="/images/logo.svg" className="cursor-pointer" alt="" layout="fill" height="10rem" width="10rem" />
        </div>
        <ul className="flex-1 flex justify-start gap-24 items-center">
          <li className="text-2xl-s">
            <a href="#">Markeplace</a>
          </li>
          <li className="text-2xl-s">
            <button className="rounded-full shadow-md px-4py-1 bg-blue-500 text-white">Login</button>
          </li>
        </ul>
      </nav>
      <nav className="py-1 px-4bg-black  justify-between text-xl-s flex md:hidden items-center z-50">
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
          {isShow && <VscChromeClose onClick={toggle} />}
          {!isShow && <GiHamburgerMenu onClick={toggle} />}
        </div>

        <div
          className={`fixed top-[49px]  left-0 w-full h-screen bg backdrop-blur-xl overflow-hidden transition ease-in-out z-50 ${
            isShow ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="py-4 px-4flex flex-col items-center text-white">
            {menuMobile.map((element, index) => (
              <Link href={element.href} key={index} passHref>
                <a href="" className="mt-4">
                  {element.label}
                </a>
              </Link>
            ))}
            <button className="rounded-full shadow-md px-4py-1 bg-blue-500 text-white mt-6">Login</button>
            <button className="rounded-full shadow-md px-4py-1 bg-blue-500 text-white mt-6">Register</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;