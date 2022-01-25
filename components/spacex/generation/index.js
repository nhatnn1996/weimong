const title = ['Manufacturers: Weilion Energy', 'Platform: BSC (BEP20)', 'Smart Contrast: Unchane-able', 'concept: : nasa, eu space agency, spacex.'];
const Generation = () => {
  return (
    <div className="py-10 bg-[#242424]">
      <div className="relative mandaloretitle">
        <div className="absolute text-center top-0 left-0 text-[4rem] lg:text-[150px] tracking-[3px] lg:tracking-[24px] opacity-10 lg:opacity-40 w-full">
          generation
        </div>
        <div className="absolute text-center top-0 left-0 text-[4rem] lg:text-[150px] tracking-[2px] lg:tracking-[10px] opacity-10 w-full lg:opacity-30 translate-x-[20px]">
          generation
        </div>
        <div className="text-[4rem] lg:text-[150px] tracking-[1px] lg:tracking-[10px] text-center text-[#F5F5F5]">generation</div>
      </div>

      <div className="mandalore3d text-7xl text-[#858585] text-center block lg:hidden">upto</div>
      <div className="flex mt-4">
        <div className="w-1/3 flex justify-end">
          <div className="mandalore3d text-7xl text-[#858585] hidden lg:block">upto</div>
          <div className="relative mandalorecond text-[#FF6D00] leading-[250px] mx-10">
            <div className="absolute top-0 left-[-30px] text-[350px] opacity-30">1</div>
            <div className="absolute top-0 left-[-25px] text-[350px] opacity-40">1</div>
            <div className="absolute top-0 left-[-15px] text-[350px] opacity-60">1</div>
            <div className="text-[350px]">1</div>
          </div>
        </div>
        <div className="w-2/3 right-generation h-auto py-2">
          <div className="flex items-end">
            <div className="text-7xl mandaloretitle translate-x-[-7px]">billion</div>
            <div className="text-1xl opacity-50 mandaloretitle ml-3">of energy (Token)</div>
          </div>
          <div className="mandalore3d text-6xl mt-6">cost</div>
          <div className="flex items-end mt-4">
            <div className="text-4xl mandaloretitle text-[#FF6D00]">10 Million</div>
            <div className="text-1xl mandaloretitle ml-3 text-white/90 ">Weilion Tokens</div>
          </div>
          <div className=" border-t-[0.5px] border-t-[#FF6D00] mt-4" />
          <div className=" border-t-[0.5px] border-t-[#FF6D00] mt-2" />
        </div>
      </div>
      <div className="relative my-24 px-6">
        <div className="border-t-[0.5px] border-t-[#797979] absolute top-[50%] left-0 w-full" />
        <div className="relative z-10 w-[90rem] mx-auto mandaloretitle lg:flex justify-between ">
          {title.map((element, index) => (
            <div key={index} className="bg-[#242424] px-2">
              {element}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center px-6">
        <div className="lg:w-8/12">
          <div className="tamtam mt-0" style={{ '--bottom-right': '40px', '--weight': '3px' }}>
            <div className="border-b-[3px] border-[#7a7a7a] lg:px-10 flex justify-center mandalorecond px-4 text-2xl lg:text-4xl ">
              <div className="px-20 border-b-[2px] border-white py-3 lg:py-6 translate-y-[2px]">purpose</div>
              <div className="px-20 border-b-[2px] border-[#FFFFFF66] py-3 lg:py-6 text-[#FFFFFF66] translate-y-[2px]">advantages</div>
            </div>
            <div className="p-10 lg:p-20 text-md font-medium">
              <div className="mb-2">- Explore the endless universe and the most advanced technologies. </div>
              <div className="mb-2">- Expanding matrix Mission </div>
              <div className="mb-2">- Create a space-cosmic matrix through an infinitely expanding blockchain platform </div>

              <div className="mb-2">
                - Simulate and test logical hypotheses from the WEILION energy source into space through the Blockchain ecosystem{' '}
              </div>
              <div className="mb-2">- Convert discoveries to NFT assets and create a common playing field </div>
              <div>- Search for life on planets in space.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generation;
