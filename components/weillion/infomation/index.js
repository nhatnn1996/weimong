import Image from 'next/image';
const Infomation = () => {
  const data = [
    {
      image: '/images/icon1.png',
      title: 'Weimong Earth 100,000 NFT ',
      description:
        '(Celebrities will be uniquely represented on the planet) WEIMONG is the mascot that exploration. WEIMONG represents the main 8 planets in our solar system'
    },
    {
      image: '/images/icon2.png',
      title: 'Weimong Earth 100,000 NFT ',
      description:
        '(Celebrities will be uniquely represented on the planet) WEIMONG is the mascot that exploration. WEIMONG represents the main 8 planets in our solar system'
    },
    {
      image: '/images/icon3.png',
      title: 'Weimong Earth 100,000 NFT ',
      description:
        '(Celebrities will be uniquely represented on the planet) WEIMONG is the mascot that exploration. WEIMONG represents the main 8 planets in our solar system'
    }
  ];
  return (
    <div className="bg-black p-10 md:p-24 md:py-56 text-center">
      <div className="container md:grid grid-cols-3 gap-40 mx-auto">
        {data.map((element, index) => (
          <div key={index} className="text-white py-8">
            <Image layout="responsive" objectFit="contain" src={element.image} alt="" width="100%" height="50%" />
            <div className="text-3xl my-2 font-bold ">{element.title}</div>
            <div className="text-2xl-s">{element.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infomation;