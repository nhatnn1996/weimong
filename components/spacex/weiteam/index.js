import Image from 'next/image';

const teams = [
  { name: 'ADAM DO', position: '(Founder/CEO) ', descirption: 'Pilot commander', image: '/images/spacex/team/adam.jpeg' },
  { name: 'Chien Phan', position: '(COO, Co-Founder)', descirption: 'Ground commander of space crafts', image: '/images/spacex/team/chien.jpeg' },
  { name: 'Manh Pham', position: '(AI, Solution & Product)', descirption: 'Flight engineer', image: '/images/spacex/team/manh.jpeg' },
  {
    name: 'Kenvin Nguyen',
    position: '(CTO/Blockchain Developer)',
    descirption: 'Flight engineer, Load commander',
    image: '/images/spacex/team/anhkinh.png'
  },
  {
    name: 'Stefano Tsai',
    position: '(Product Manager)',
    descirption: 'Module Pilot, Commander Spece object specialist',
    image: '/images/spacex/team/tsai2.png'
  },
  { name: 'Cuong Nguyen', position: '(Animator)', descirption: 'Module Pilot, Mission specialist', image: '/images/spacex/team/cuong.png' },
  { name: 'Nhat Ngoc', position: '(Frontend Developer)', descirption: 'Module Pilot', image: '/images/spacex/team/nhat.png' },
  { name: 'Huong Ngo', position: '(Artist)', descirption: 'Mission Specialist', image: '/images/spacex/team/anhhuong.png' },
  { name: 'Hai Luong', position: '(Game Developer)', descirption: 'Flight engineer', image: '/images/spacex/team/hai.jpeg' },
  { name: 'Sam', position: '(Designer)', descirption: 'Science Pilot', image: '/images/spacex/team/sam.jpeg' }
];

const WeiTeam = () => {
  return (
    <div className="bg-[#242424] py-4 lg:py-20 mt-32 lg:mt-0 ">
      <div className=" lg:w-[90rem] mx-auto">
        <div className="mandaloretitle top-0 left-0 opacity-75 text-stroke text-transparent text-6xl lg:text-8xl tracking-[2px] lg:tracking-[16px] px-4 lg:px-0">
          wei-team
        </div>
        <div className="lg:border-b-[2px] lg:border-[#7a7a7a] mt-12 lg:mt-24 "></div>
        <div className="lg:flex px-4 lg:px-0 lg:w-[100vh] justify-center">
          <div className="lg:w-4/12 flex items-center lg:justify-center">
            <CEO data={teams[0]} />
          </div>
          <div className="lg:w-5/12 mt-20 lg:mt-0 relative px-2  lg:ml-32">
            <div className="absolute h-[calc(100%-30px)] w-full top-[3rem] left-0 bg-black lg:bg-none rounded-lg z-0 lg:hidden"></div>
            <div className="flex mt-4 lg:mt-12 justify-between lg:gap-20 lg:mr-10">
              <Team data={teams[1]} />
              <Team data={teams[2]} />
              <Team data={teams[3]} />
            </div>
            <div className="flex mt-4 lg:mt-12  justify-between  lg:gap-20 lg:ml-32">
              <Team data={teams[4]} />
              <Team data={teams[5]} />
              <Team data={teams[6]} />
            </div>
            <div className="flex mt-4 lg:mt-12 justify-between lg:gap-20 lg:mr-10">
              <Team data={teams[7]} />
              <Team data={teams[8]} />
              <Team data={teams[9]} />
            </div>
            <div className="mt-16   text-[#FFFFFF66] relative z-10 px-3 lg:hidden">
              <div className="w-fullpt-4 border-t-[1px] border-[#FFFFFF66]"></div>
              <div className="text-xs p-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeiTeam;

const CEO = ({ data }) => {
  return (
    <div className="lg:w-[10rem] flex lg:block items-center">
      <div className="h-[10rem] w-[10rem] lg:h-[20rem] lg:w-[20rem] rounded-full adam flex justify-center items-center p-4">
        <div className="w-full h-full">
          <Image
            className="rounded-full"
            src={data.image || '/images/spacex/footer.png'}
            objectFit="cover"
            layout="responsive"
            width="100%"
            height="100%"
            alt="adam"
          />
        </div>
      </div>
      <div className="ml-6">
        <div className="text-2xl font-black tracking-widest lg:text-center lg:mt-6 uppercase">
          <span className="font-light mr-5 ">/</span> {data.name} <span className="font-light ml-5">/</span>
        </div>
        <div className="opacity-50 text-sm mt-3 text-center">
          {data.position} - {data.descirption}
        </div>
      </div>
    </div>
  );
};

const Team = ({ data }) => {
  return (
    <div className="w-[9rem] lg:w-[10rem] flex flex-col items-center lg:block relative z-10">
      <div className="h-[5rem] w-[5rem] lg:h-[10rem] lg:w-[10rem] rounded-full flex justify-center items-center lg:p-4">
        <div className="w-full h-full">
          <Image
            className="rounded-full"
            src={data.image || '/images/spacex/footer.png'}
            objectFit="cover"
            layout="responsive"
            width="100%"
            height="100%"
            alt="adam"
          />
        </div>
      </div>
      <div className="text-md font-black lg:tracking-widest  text-xs lg:text-md text-center mt-3 uppercase">
        <span className="font-light mr-0.5 lg:mr-2 ">/</span> {data.name} <span className="font-light ml-0.5 lg:ml-2">/</span>
      </div>
      <div className="opacity-50  mt-3 text-xs lg:text-md text-center">{data.position}</div>
      <div
        className="opacity-50 text-xs mt-3 text-center  text-sx lg:text-md"
        //Why can't use module.css????
        style={{ margin: '0 auto' }}
      >
        {data.descirption}
      </div>
    </div>
  );
};
