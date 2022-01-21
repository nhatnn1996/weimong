import Image from 'next/image';

const teams = [
  { name: 'ADAM DO', description: '(Founder/CEO) ', image: '/images/spacex/team/adam.jpeg' },
  { name: 'Chien Phan', description: '(COO)', image: '/images/spacex/team/chien.jpeg' },
  { name: 'Stefano Tsai', description: '(Product Manager)', image: '/images/spacex/team/tsai2.png' },
  { name: 'Manh Pham', description: '(Solution & Product)', image: '/images/spacex/team/manh.jpeg' },
  { name: 'Kenvin Nguyen', description: '(CTO/Blockchain Developer)', image: '/images/spacex/team/anhkinh.png' },
  { name: 'Hai Luong', description: '(Game Developer)', image: '/images/spacex/team/hai.jpeg' },
  { name: 'Huong NV', description: '(Artist)', image: '/images/spacex/team/anhhuong.png' },
  { name: 'Sam', description: '(Designer)', image: '/images/spacex/team/sam.jpeg' },
  { name: 'Cuong Nguyen', description: '(Animator)', image: '/images/spacex/team/cuong.png' },
  { name: 'Nhat Nguyen', description: '(Frontend Developer)', image: '/images/spacex/team/nhat.png' }
];

const WeiTeam = () => {
  return (
    <div className="bg-[#242424] py-20">
      <div className="w-[90rem] mx-auto">
        <div className="mandaloretitle top-0 left-0 opacity-75 text-stroke text-transparent text-8xl tracking-[16px]">wei-team</div>
        <div className="border-b-[2px] border-[#7a7a7a] mt-24 flex mandalorecond text-xl "></div>
        <div className="flex">
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
      <div className="text-2xl font-black tracking-widest text-center mt-6">
        <span className="font-light mr-5">/</span> {data.name} <span className="font-light ml-5">/</span>
      </div>
      <div className="opacity-50 text-sm mt-10">{data.description}</div>
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
      <div className="text-md font-black tracking-widest text-center mt-3 whitespace-nowrap ">
        <span className="font-light mr-2">/</span> {data.name} <span className="font-light ml-2">/</span>
      </div>
      <div className="opacity-50 text-sm mt-3 whitespace-nowrap text-center">{data.description}</div>
    </div>
  );
};
