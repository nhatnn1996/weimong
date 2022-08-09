export default function Home() {
  const list = [
    // {
    //   first: 'Round',
    //   second: 'Percent (%)',
    //   third: 'Allocation',
    //   fourth: 'Vesting'
    // },
    {
      first: 'Seed round',
      second: '2,0%',
      third: '2.000.000',
      fourth: '10% released at TGE, cliff 6 months then linear 2 years, unlock each quarter'
    },
    {
      first: 'Private round',
      second: '5,0%',
      third: '5.000.000',
      fourth: '15% released at TGE, cliff 3 months then linear 2 years, unlock each quarter'
    },
    {
      first: 'Public round',
      second: '1,0%',
      third: '1.000.000',
      fourth: 'Unlock TGE 50%, cliff 3 months then unlock'
    },
    {
      first: 'Team & Advisors',
      second: '23%',
      third: '23.000.000',
      fourth: '2 year cliff, linear weekly vesting next 30 months'
    },
    {
      first: 'Marketing',
      second: '8,0%',
      third: '8.000.000',
      fourth: '5% TGE, linear weekly vesting next 24 months'
    },
    {
      first: 'Liquidity Reserves',
      second: '4,0%',
      third: '4.000.000',
      fourth: '50% TGE, Strategic Release'
    },
    {
      first: 'P2E',
      second: '25,0%',
      third: '14.000.000',
      fourth: 'Linear weekly vesting 2 years'
    },
    {
      first: 'Stacking',
      second: '25,0%',
      third: '25.000.000',
      fourth: 'Linear weekly vesting 2 years'
    },
    {
      first: 'Ecosystem Fund',
      second: '18,0%',
      third: '18.000.000',
      fourth: 'Linear weekly vesting 2 years'
    }
  ];
  return (
    <div className="py-10 z-10">
      <div className="xl:flex">
        <div className="xl:w-[30%]">
          <div className="flex h-full items-end">
            <img src="/images/chest.png" alt="not foud" />
          </div>
        </div>

        <div className="xl:w-[65%] xl:ml-auto">
          <div className="text-5xl 2xl:text-6xl bubikglitch text-center mb-16 2xl:20">Token Allocation</div>
          <div className="hidden xl:block">
            {list.map((element) => {
              return (
                <div className="flex text-xs py-3 2xl:text-base" key={element.first}>
                  <div className="xl:w-[20%]  font-bold text-[#FF9E00]">{element.first}</div>
                  <div className="xl:w-[20%] font-bold xl:text-centertext-[#AE23BD]">{element.second}</div>
                  <div className="xl:w-[20%]">{element.third}</div>
                  <div className="xl:w-[40%]">{element.fourth}</div>
                </div>
              );
            })}{' '}
          </div>
          <div className="xl:hidden">
            {list.map((element) => {
              return (
                <div className="flex shadow p-2 my-5 rounded-md text-xs py-3 2xl:text-base flex-wrap" key={element.first}>
                  <div className="w-[40%] font-bold text-[#FF9E00] xl:hiden">Round: </div>
                  <div className="w-[60%] xl:w-[20%] font-bold text-[#FF9E00]">{element.first}</div>
                  <div className="w-[40%] font-bold text-[#AE23BD] xl:hiden">Percent (%):</div>
                  <div className="w-[60%] xl:w-[20%] font-bold  text-[#AE23BD]">{element.second}</div>
                  <div className="w-[40%] xl:hiden">{'Allocation'}</div>
                  <div className="w-[60%] xl:w-[20%] ">{element.third}</div>
                  <div className="w-[40%] xl:hiden">{'Vesting'}</div>
                  <div className="w-[60%] xl:w-[40%]">{element.fourth}</div>
                </div>
              );
            })}{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
