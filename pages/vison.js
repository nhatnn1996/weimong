import LeftVision from '@/components/vision/left';
import Free from '@/components/vision/free';
import Owned from '@/components/vision/owned';
import Added from '@/components/vision/added';
import { motion, AnimatePresence } from 'framer-motion';
import { variants } from '@/utils/conig';
import useSlider from 'hooks/slide';

const slider = [{ component: <Free /> }, { component: <Owned /> }, { component: <Added /> }];

export default function Home() {
  const [active] = useSlider({ length: slider.length, loop: false, duration: 1000000 });
  return (
    <div className="py-10 z-10">
      <div className="xl:flex">
        <div className="w-full xl:w-[40%]">
          <LeftVision />
        </div>
        <div className="">
          {slider.map((element, index) => {
            if (active === index)
              return (
                <motion.div
                  key={active}
                  variants={variants}
                  initial="hidden"
                  animate="enter"
                  exit="exit"
                  transition={{ duration: 1, type: 'linear' }}
                >
                  {slider[index].component}
                </motion.div>
              );
          })}
          <AnimatePresence></AnimatePresence>
        </div>
      </div>
    </div>
  );
}
