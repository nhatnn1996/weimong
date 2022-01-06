import Image from 'next/image';
const Header = () => {
  return (
    <header className="header bg-black text-white">
      <nav className="flex py-10 px-6 justify-center text-xl">
        <ul className="flex-1 flex justify-end gap-24 items-center">
          <li>
            <a href="#">Weimong Miner</a>
          </li>
          <li>
            <a href="#">Whitepaper</a>
          </li>
        </ul>
        <div className="logo px-24 items-center translate-x-8 translate-y-[-0.5rem]">
          <Image src="/images/logo.svg" className="cursor-pointer" alt="" layout="fill" height="10rem" width="10rem" />
        </div>
        <ul className="flex-1 flex justify-start gap-24 items-center">
          <li>
            <a href="#">Markeplace</a>
          </li>
          <li>
            <button className="rounded-full shadow-md px-6 py-2 bg-blue-500 text-white">Login</button>
          </li>
        </ul>
      </nav>
      <div className="banner">
        <video src="/videos/header.mp4" className="w-full" muted autoPlay={'autoplay'} preLoad="auto" loop>
          something
        </video>
      </div>
    </header>
  );
};

export default Header;
