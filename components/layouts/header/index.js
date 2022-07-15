import { MenuIcon } from '@/components/icons';
import Image from 'next/image';
import { useState } from 'react';
import SlideLeft from '../slider';
const Header = () => {
  const [state, setState] = useState(false);
  return (
    <header className="header flex justify-between py-4 xl:py-7">
      <button
        className="min-w-[80px]"
        onClick={() => {
          setState(true);
        }}
      >
        <MenuIcon className="cursor-pointer" />
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
      <button className="">
        <div className="bg-gradient-oranger pt-4 pb-3 px-7 text-white hover:shadow-md hover:translate-y-[-2px] duration-200">Login</div>
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
