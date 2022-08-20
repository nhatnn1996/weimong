import '../styles/globals.css';
import 'animate.css';
import Head from 'next/head';
import Header from '@/components/layouts/header';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

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
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="px-8 xl:pb-10 2xl:px-20">
        <Header />
      </div>
      <div className={'min-h-[calc(100vh-164px)] flex flex-col' + (Component.layout === 'full' ? '' : ' px-8 2xl:px-20')}>
        <motion.main
          className="flex-1"
          key={router.pathname}
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: 'linear', duration: 0.3 }} // Set the transition to linear
        >
          <Component {...pageProps} />
        </motion.main>
        {/* <div className="fixed bottom-2 right-6 hidden xl:block">Copyright © 2022 DevilSilly. All rights reserved.</div> */}
      </div>
    </>
  );
}

export default MyApp;
