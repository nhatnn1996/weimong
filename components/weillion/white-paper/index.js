const WhitePaper = () => {
    return (
      <div className="bg-black px-12 py-12">
        <div className="white-paper bg-[url('/images/background-whitepaper.png')] py-20 text-white bg-contain bg-no-repeat 2xl:container mx-auto">
          <div className="text-3xl md:text-5xl leading-tight text-center">
            WEIMONG is a party game of <br />
            teamwork and betrayal.
          </div>
          <div className="text-xl-s text-center mt-16">
            Crewmates work together to complete tasks before one or <br className="hidden xl:block" /> more Impostors can kill everyone aboard.
          </div>
  
          <div className="text-center">
            <button className="rounded-xl mt-16 px-12 py-6 font-bold text-2xl-s bg-teal-800">READ WHITEPAPER</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhitePaper;