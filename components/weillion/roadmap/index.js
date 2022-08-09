import mockup from './mockup';

const Roadmap = () => {
  return (
    <div className="bg-black px-4xl:px-40 container mx-auto border-neutral-800 border-x-[1px]">
      <div className="text-5xl text-center font-bold py-20">ROADMAP</div>
      <div className="grid grid-cols-1 ms:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 ">
        {mockup.map((element, index) => (
          <div key={index} className='mb-12'>
            <div className={`flex items-center mb-6 lg:mt-0  ${element.isActive ? '' : 'opacity-[0.3]'}`}>
              <div>
                <div className="w-5 h-5 rounded-full bg-white" />
              </div>
              <div className="w-full h-[1px] bg-slate-50" />
            </div>
            <div className="text-2xl-s font-bold">{element.title}</div>
            <div className="text-sm font-light mt-1">{element.time}</div>
            {element.list_content.map((text) => (
              <div key={text} className="text-xl-s mt-6">
                {text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;