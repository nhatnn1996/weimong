import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BiBadgeCheck } from 'react-icons/bi';

const menu = [
  { children: 'Home', href: '/' },
  { children: 'Vision', href: '/vison' },
  { children: 'Weimong-meta', href: '/weimong-meta' },
  { children: 'Roadmap', href: '/roadmap' },
  { children: 'Technology', href: '/technology' },
  { children: 'Partner', href: '/partner' }
];

const SlideLeft = () => {
  const router = useRouter();
  useEffect(() => {}, []);

  return (
    <nav className="min-w-[23.563rem] max-w-[23.563rem] bg-[#171717]  py-[3.125rem] grandstander min-h-screen shadow-sm">
      <div className="image px-[5.875rem]">
        <Image src="/images/weimong/logo.png" width={'12.375rem'} layout="responsive" height="3.25rem" alt="not found logo" />
      </div>
      <ul className="mt-[10.75rem] text-base leading-9 text-white text-gray">
        {menu.map((element, index) => {
          const isActive = element.href === router.pathname ? 'menu-active border-left-active' : '';
          return (
            <li className={`mb-6  whitespace-nowrap pl-[5.875rem]`} key={index}>
              <Link href={element.href} passHref>
                <a className={`flex items-center h-11 ease-in-out duration-300 ${isActive}`}>
                  <span className="flex items-center">
                    <IconRender isOpen={element.href === router.pathname} />
                    {element.children}
                  </span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-30px' }
};

const IconRender = ({ isOpen }) => {
  return (
    <motion.span animate={isOpen ? 'open' : 'closed'} initial={'closed'} variants={variants} transition={{ duration: 0.2 }}>
      <BiBadgeCheck className="mr-4 mb-2" />
    </motion.span>
  );
};

export default SlideLeft;
