import PageOne from '@/components/devilsilly/paegOne';
import PageTwo from '@/components/devilsilly/pageTwo';
import PageThree from '@/components/devilsilly/pageThree';
import PageFour from '@/components/devilsilly/pageFour';
import { motion } from 'framer-motion';
import { variants } from '@/utils/conig';
import useSlider from 'hooks/slide';

const slider = [
  { component: <PageOne />, title: 'SillyMong Discovery' },
  { component: <PageTwo />, title: "Devil's House" },
  { component: <PageThree />, title: 'Squid SillyMong Games' },
  { component: <PageFour />, title: 'SillyMong Mining' }
];
export default function Home() {
  const lengthSlider = slider.length;
  const [active, setActive] = useSlider({ length: slider.length, loop: true, duration: 10 });
  const component = slider[active].component;
  return (
    <div className="py-10 z-10">
      <div className="flex justify-center">
        {slider.map((element, index) => {
          const clxActive = index === active ? 'text-3xl' : 'text-2xl  text-gray-200';
          return (
            <div key={'class' + index} className={'mx-10 duration-1000 cursor-pointer ' + clxActive} onClick={() => setActive(index)}>
              {element.title}
            </div>
          );
        })}
      </div>
      <div className="relative">
        <motion.div key={active} variants={variants} initial="hidden" animate="enter" exit="exit" transition={{ duration: 1, type: 'linear' }}>
          {component}
        </motion.div>
        <div className="bottom-0 left-0 absolute">
          <b className="text-5xl">0{active + 1}</b> <span className="text-4xl text-gray-300">/0{lengthSlider}</span>
        </div>
        <div className="top-[110%] right-[20%] absolute flex">
          {slider.map((element, index) => {
            const clxActive = index === active ? 'border-[#FF7A00] border-[2px] w-[3rem]' : 'w-[2.5rem] bg-gray-200 border-gray-200 w-[4rem]';
            return (
              <div
                key={index}
                className={'mx-3 h-2 cursor-pointer border-[2px] rounded-md duration-1000 ' + clxActive}
                onClick={() => setActive(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
