import Image from 'next/image';
import Link from 'next/link';
const Blog = () => {
  const data = [
    {
      image: '/images/thumnail-blog.png',
      title: 'Weimong  Public',
      description:
        '(Celebrities will be uniquely represented on the planet) WEIMONG is the mascot that exploration. WEIMONG represents the main 8 planets in our solar system'
    },
    {
      image: '/images/thumnail-blog.png',
      title: 'Weimong  Public',
      description:
        '(Celebrities will be uniquely represented on the planet) WEIMONG is the mascot that exploration. WEIMONG represents the main 8 planets in our solar system'
    },
    {
      image: '/images/thumnail-blog.png',
      title: 'Weimong  Public',
      description:
        '(Celebrities will be uniquely represented on the planet) WEIMONG is the mascot that exploration. WEIMONG represents the main 8 planets in our solar system'
    }
  ];
  return (
    <div className="bg-black py-4">
      <div className="container md:grid px-4lg:px-4 xl:px-0 grid-cols-3 gap-12 mx-auto">
        {data.map((element, index) => (
          <div key={index} className="text-white py-8">
            <Image layout="responsive" objectFit="contain" src={element.image} alt="" width="100%" height="60%" />
            <div className="text-3xl my-6 md:my-12 font-bold ">{element.title}</div>
            <div className="text-xl-s">{element.description}</div>
            <Link href="#" passHref>
              <a className="inline-block bg-blue-700 hover:bg-blue-500 transition py-4 px-8 mt-8 rounded-full">
                Read more
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;