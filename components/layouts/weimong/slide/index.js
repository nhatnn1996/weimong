import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
  const [active, setActive] = useState(0);
  useEffect(() => {
    // menu.forEach((element) => {
    //   router.prefetch(element.href);
    // });
  }, []);

  return (
    <nav className="w-[23.563rem] max-w-[23.563rem] bg-[#171717] px-[5.875rem] py-[3.125rem] grandstander">
      <div className="image">
        <Image src="/images/weimong/logo.png" width={'12.375rem'} layout="responsive" height="3.25rem" alt="not found logo" />
      </div>
      <ul className="mt-[10.75rem] text-base leading-9 text-white text-gray">
        {menu.map((element, index) => {
          const isActive = element.href === router.pathname ? 'menu-active' : '';
          return (
            <li className={`mb-6 whitespace-nowrap`} key={index}>
              <Link href={element.href} passHref>
                <a className={`block ease-in-out duration-300 ${isActive}`}>{element.children}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SlideLeft;
