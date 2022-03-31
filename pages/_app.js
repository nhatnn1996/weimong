import '../styles/globals.css';
import SlideLeft from '@/components/layouts/weimong/slide';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <SlideLeft  />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
