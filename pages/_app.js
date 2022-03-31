import '../styles/globals.css';
import SlideLeft from '@/components/layouts/weimong/slide';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 }
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="flex w-screen">
      <SlideLeft />
      <AnimatePresence exitBeforeEnter>
        <div className="bg-black bg-[url(/images/weimong/bg.jpg)] w-full min-h-screen bg-[length:50%_auto]">
          <motion.main
            key={router.pathname}
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear', duration: 0.2 }} // Set the transition to linear
            className=""
          >
            <Component {...pageProps} />
          </motion.main>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
