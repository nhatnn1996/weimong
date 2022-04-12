import '../styles/globals.css';
import 'animate.css';
import { useEffect } from 'react';
import Head from 'next/head';
import SlideLeft from '@/components/layouts/weimong/slide';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import BackgroundMotion from '@/components/layouts/weimong/background/index';

// const isServer = typeof window === 'undefined';
// const WOW = !isServer ? require('wowjs') : null;
// console.log("load image")

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 }
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // useEffect(() => {
  //   new WOW.WOW({}).init();
  // }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <div className="flex w-screen h-screen relative overflow-y-hidden overflow-x-hidden">
        <SlideLeft />
        <AnimatePresence exitBeforeEnter>
          <div className="bg-black bg-[url(/images/weimong/bg.jpg)] w-full min-h-screen bg-[length:100%_auto] overflow-y-scroll relative">
            <BackgroundMotion />
            <motion.main
              key={router.pathname}
              variants={variants} // Pass the variant object into Framer Motion
              initial="hidden" // Set the initial state to variants.hidden
              animate="enter" // Animated state to variants.enter
              exit="exit" // Exit state (used later) to variants.exit
              transition={{ type: 'linear', duration: 0.3 }} // Set the transition to linear
            >
              <Component {...pageProps} />
            </motion.main>
          </div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
