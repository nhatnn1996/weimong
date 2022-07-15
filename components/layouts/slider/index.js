import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlienIcon, CloseIcon } from '@/components/icons';

const menu = [
  { children: 'Home', href: '/' },
  { children: 'Vision', href: '/vison' },
  { children: 'Weimong-meta', href: '/weimong-meta' },
  { children: 'Roadmap', href: '/roadmap' },
  { children: 'Technology', href: '/technology' },
  { children: 'Partner', href: '/partner' }
];

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' }
};

const SlideLeft = ({ isShow, onClose }) => {
  const router = useRouter();

  return (
    <motion.nav
      variants={variants}
      initial={'closed'}
      transition={{ duration: 0.2 }}
      animate={isShow ? 'open' : 'closed'}
      className=" bg-white py-[3.125rem] px-10 grandstander min-h-screen shadow-md fixed top-0 left-0 z-10 w-[30%]"
    >
      <div className="close w-full flex justify-end">
        <span onClick={onClose}>
          <CloseIcon className="cursor-pointer w-[20px] h-[20px] hover:rotate-90 duration-300" />
        </span>
      </div>
      <ul className="mt-[10.75rem] text-base text-[#AFAFAF] px-10">
        {menu.map((element, index) => {
          const isActive = element.href === router.pathname ? 'border-[#FF9E00]' : 'border-white';
          return (
            <li className={`mb-6 whitespace-nowrap px-16`} key={index}>
              <Link href={element.href} passHref>
                <a className={`rounded-2xl border-[2px] flex min-w-10 text-[#ff6d00] text-xl center  pb-3 py-4 ease-in-out duration-300 ${isActive} hover:bg-[#FF9E00] hover:text-white`} >
                  <span className="flex items-center">{element.children}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default SlideLeft;
