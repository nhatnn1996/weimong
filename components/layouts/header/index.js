import { MenuIcon } from '@/components/icons';
import Image from 'next/image';
import { useState } from 'react';
import SlideLeft from '../slider';
const Header = () => {
  const [state, setState] = useState(false);
  return (
    <header className="header flex justify-between py-4 3xl:py-7">
      <button
        className="cursor-pointer"
        onClick={() => {
          setState(true);
        }}
      >
        <MenuIcon />
      </button>
      <nav className=" py-10 px-6 justify-center text-xl hidden">
        <ul className="flex-1 flex justify-end gap-24 items-center">
          <li>
            <a href="#">Weimong Miner</a>
          </li>
          <li>
            <a href="#">Whitepaper</a>
          </li>
        </ul>
        <div className="logo px-24 items-center translate-x-14 translate-y-[-1rem]"></div>
      </nav>
      <div className="w-[15rem] h-[6.75]">
        <Image src="/images/logo.png" className="cursor-pointer" alt="" layout="responsive" height="108" width="241" />
      </div>
      <button className="invisible">
        <MenuIcon />
      </button>

      <SlideLeft
        isShow={state}
        onClose={() => {
          setState(false);
        }}
      />
    </header>
  );
};

export default Header;
