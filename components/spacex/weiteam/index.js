import Image from 'next/image';

const teams = [
  { name: 'ADAM DO', position: '(Founder/CEO) ', descirption: 'Pilot commander', image: '/images/spacex/team/adam.jpeg' },
  { name: 'Chien Phan', position: '(COO, Co-Founder)', descirption: 'Ground commander of space crafts',  image: '/images/spacex/team/chien.jpeg' },
  { name: 'Manh Pham', position: '(AI, Solution & Product)', descirption: 'Flight engineer', image: '/images/spacex/team/manh.jpeg' },
  { name: 'Kenvin Nguyen', position: '(CTO/Blockchain Developer)', descirption: 'Flight engineer, Load commander', image: '/images/spacex/team/anhkinh.png' },
  { name: 'Stefano Tsai', position: '(Product Manager)', descirption: 'Module Pilot, Commander Spece object specialist', image: '/images/spacex/team/tsai2.png' },
  { name: 'Cuong Nguyen', position: '(Animator)', descirption: 'Module Pilot, Mission specialist', image: '/images/spacex/team/cuong.png' },  
  { name: 'Nhat Ngoc', position: '(Frontend Developer)', descirption: 'Module Pilot', image: '/images/spacex/team/nhat.png' },
  { name: 'Huong Ngo', position: '(Artist)', descirption: 'Mission Specialist', image: '/images/spacex/team/anhhuong.png' },
  { name: 'Hai Luong', position: '(Game Developer)', descirption: 'Flight engineer', image: '/images/spacex/team/hai.jpeg' },
  { name: 'Sam', position: '(Designer)', descirption: 'Science Pilot', image: '/images/spacex/team/sam.jpeg' },
];

const WeiTeam = () => {
  return (
    <div className="bg-[#242424] py-20">
      <div className="w-[90rem] mx-auto">
        <div className="mandaloretitle top-0 left-0 opacity-75 text-stroke text-transparent text-8xl tracking-[16px]">wei-team</div>
        <div className="border-b-[2px] border-[#7a7a7a] mt-24 flex mandalorecond text-xl "></div>
        <div className="flex  ">
          <div className="w-4/12 flex items-center justify-center">
            <CEO data={teams[0]} />
          </div>
          <div className="w-5/12">
            <div className="flex mt-12 gap-20 mr-10">
              <Team data={teams[1]} />
              <Team data={teams[2]} />
              <Team data={teams[3]} />
            </div>
            <div className="flex mt-12 gap-20 ml-32">
              <Team data={teams[4]} />
              <Team data={teams[5]} />
              <Team data={teams[6]} />
            </div>
            <div className="flex mt-12 gap-20 mr-10">
              <Team data={teams[7]} />
              <Team data={teams[8]} />
              <Team data={teams[9]} />
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
    <div className="w-[20rem]">
      <div className="h-[20rem] w-[20rem] rounded-full adam flex justify-center items-center p-4">
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
      <div className="text-2xl font-black tracking-widest text-center mt-6 uppercase">
        <span className="font-light mr-5 ">/</span> {data.name} <span className="font-light ml-5">/</span>
      </div>
      <div className="opacity-50 text-sm mt-3 text-center">
        {data.position} - {data.descirption}
      </div>
    </div>
  );
};

const Team = ({ data }) => {
  return (
    <div className="w-[14rem]">
      <div className="h-[14rem] w-[14rem] rounded-full flex justify-center items-center p-4">
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
      <div className="text-md font-black tracking-widest text-center mt-3 whitespace-nowrap uppercase">
        <span className="font-light mr-2 ">/</span> {data.name} <span className="font-light ml-2">/</span>
      </div>
      <div className="opacity-50 text-sm mt-3 whitespace-nowrap text-center">{data.position}</div>
      <div 
        className="opacity-50 text-sm mt-3 text-center w-[14rem]"
        //Why can't use module.css????
        style={{margin: "0 auto"}}
      >
        {data.descirption}
      </div>
    </div>
  );
};
