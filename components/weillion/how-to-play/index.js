import Image from 'next/image';
const HowToPlay = () => {
  return (
    <div className="bg-black py-4 my-20 md:my-48 container mx-auto">
      <div className="text-5xl text-center font-bold">HOW TO PLAY</div>
      <div className="md:text-5xl font-[200] leading-snug mt-4 md:pt-20 px-8  lg:px-32 text-center">
        Prepare for departure but beware the Impostor! Play with 10-15 players online or via local WiFi as you{' '}
        <span className="text-red-600">attempt to hold your spaceship together and survive</span> , but be careful. Two
        or more random players among the crew are infected persons bent on killing everyone!
      </div>
    </div>
  );
};

export default HowToPlay;