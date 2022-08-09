import PageOne from '@/components/devilsilly/paegOne';
import PageTwo from '@/components/devilsilly/pageTwo';
import PageThree from '@/components/devilsilly/pageThree';
import PageFour from '@/components/devilsilly/pageFour';
import { motion } from 'framer-motion';
import { variants } from '@/utils/conig';
import useSlider from 'hooks/slide';
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const slider = [
  { component: <PageOne />, title: 'SillyMong Discovery' },
  { component: <PageTwo />, title: "Devil's House" },
  { component: <PageThree />, title: 'Squid SillyMong Games' },
  { component: <PageFour />, title: 'SillyMong Mining' }
];
export default function Home() {
  const lengthSlider = slider.length;
  const [active, setActive] = useSlider({ length: slider.length, loop: true, duration: 1000000 });
  const { component, title } = slider[active];
  return (
    <div className="py-10 z-10">
      <div className="justify-center min-h-[3rem] hidden xl:flex">
        {slider.map((element, index) => {
          const clxActive = index === active ? 'text-3xl bubikglitch ' : 'text-2xl-s  text-gray-200';
          return (
            <div
              key={'class' + index}
              className={'mx-10 whitespace-nowrap duration-1000 cursor-pointer ' + clxActive}
              onClick={() => setActive(index)}
            >
              {element.title}
            </div>
          );
        })}
      </div>
      <div className="xl:hidden text-center text-2xl-s">{title}</div>
      <div className="relative pb-10 xl:pb-0">
        <motion.div key={active} variants={variants} initial="hidden" animate="enter" exit="exit" transition={{ duration: 1, type: 'linear' }}>
          {component}
        </motion.div>

        <div className="fixed xl:static justify-center border-t-[0px] xl:border-[0px] bottom-0 left-0 w-full bg-white px-5 py-4 flex">
          <ChevronLeftIcon
            className="w-6 h-6 mr-auto fill-gray-400 xl:hidden"
            onClick={() => {
              setActive(active - 1);
            }}
          />
          <div className="xl:top-[calc(100%+30px)] xl:block w-fit h-fit xl:left-0 left-4 xl:absolute">
            <b className=" text-3xl xl:text-5xl">0{active + 1}</b>{' '}
            <span className="text-2xl font-bold 2xl:text-4xl text-gray-300">/0{lengthSlider}</span>
          </div>
          <div className="xl:top-[calc(100%+30px)] right-[20%] xl:absolute hidden xl:flex">
            {slider.map((element, index) => {
              const clxActive =
                index === active ? 'border-[#FF7A00] bg-[#FF7A00] border-[2px] xl:w-[3rem] ' : 'w-[2.7rem] bg-gray-200 border-gray-200  xl:w-[2rem]';
              return (
                <div
                  key={index}
                  className={'mx-3 rounded-full h-4 w-4 xl:h-2 cursor-pointer border-[2px] xl:rounded-md duration-1000 ' + clxActive}
                  onClick={() => setActive(index)}
                ></div>
              );
            })}
          </div>
          <ChevronRightIcon
            className="w-6 h-6 ml-auto  fill-gray-400 xl:hidden"
            onClick={() => {
              setActive(active + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
