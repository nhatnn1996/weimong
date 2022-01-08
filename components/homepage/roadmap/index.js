import mockup from './mockup';

const Roadmap = () => {
  return (
    <div className="bg-black pb-20 md:pb-48 container mx-auto">
      <div className="text-5xl text-center font-bold">ROADMAP</div>
      <div className="grid grid-cols-1 ms:grid-cols-2 md:grid-cols-6 mt-20 px-10 md:px-40 ">
        {mockup.map((element, index) => (
          <div key={index}>
            <div className={`flex items-center mb-6 mt-6 md:mt-0  ${element.isActive ? '' : 'opacity-[0.3]'}`}>
              <div>
                <div className="w-5 h-5 rounded-full bg-white" />
              </div>
              <div className="w-full h-[1px] bg-slate-50" />
            </div>
            <div className="text-2xl font-bold">{element.title}</div>
            <div className="text-sm font-light mt-1">{element.time}</div>
            {element.list_content.map((text) => (
              <div key={text} className="text-xl mt-6">
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
