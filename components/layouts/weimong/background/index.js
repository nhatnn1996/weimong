import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ButtonLogin } from '@/components/common/button';

const bgTopFollowPathname = {
  '/': { x: '-30%', width: '26rem' },
  '/vison': { x: '30%', width: '28rem' }
};

const bgLeftFollowPathname = {
  '/': { x: 0 },
  '/vison': { x: '-100%' }
};
const bgRightFollowPathname = {
  '/': { x: 0 },
  '/vison': { x: '100%' }
};

const transition = {
  duration: 0.3,
  type: 'ease-in',
};

const BackgroundMotion = () => {
  const router = useRouter();
  const { pathname } = router;
  useEffect(() => {}, []);

  return (
    <div className="overflow-hidden w-full absolute h-full z-20 top-0 left-0">
      <motion.div
        variants={{ run: bgTopFollowPathname[pathname] }}
        animate="run"
        className="absolute top-0 right-0 w-[30rem]"
        transition={transition}
      >
        <Image src="/images/weimong/bg-top.png" width={'35.893rem'} layout="responsive" height="8.375rem" alt="not found background-top" />
      </motion.div>

      <motion.div
        variants={{ run: bgLeftFollowPathname[pathname] }}
        animate="run"
        className="absolute top-[20%] left-0 w-[9.563rem] h-[24.25rem]"
        transition={transition}
      >
        <Image src="/images/weimong/bg-left.png" width={'9.563rem'} layout="responsive" height="24.25rem" alt="not found background-top" />
      </motion.div>

      <motion.div
        variants={{ run: bgRightFollowPathname[pathname] }}
        animate="run"
        className="absolute top-[30%] right-0 w-[6.313rem] h-[11.188rem]"
        transition={transition}
      >
        <Image src="/images/weimong/bg-right.png" width={'6.313rem'} layout="responsive" height="11.188rem" alt="not found background-top" />
      </motion.div>

      <div className="absolute top-10 right-10">
        <ButtonLogin />
      </div>
    </div>
  );
};

export default BackgroundMotion;
