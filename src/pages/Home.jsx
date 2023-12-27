import { PlayCircle } from '@phosphor-icons/react';
import Helmet from '../components/Helmet';
import hero from '../assets/hero.png';
import Products from '../components/Products';
import Category from '../components/Category';

const Home = () => {
  return (
    <Helmet title="Home">
      <section className="max-md:min-h-screen px-2 md:px-6 mt-8 md:flex lg:items-center">
        <div className="flex-1 text-center md:text-left text-light">
          <h1 className="text-3xl font-tourney md:text-5xl lg:text-7xl mb-5">
            DIGITAL UMKM <span className="text-primary">BLOCKCHAIN</span>
          </h1>
          <p className="text-light/60 text-xs mb-5 md:text-base">
            Selamat datang di Digital UMKM, solusi terbaik untuk UMKM Anda. Jika
            Anda adalah pemilik bisnis kecil atau usaha mikro, maka Anda telah
            datang ke tempat yang tepat. Kami mengerti tantangan yang Anda
            hadapi dalam mengelola bisnis Anda, dan kami di sini untuk membantu
            Anda meraih sukses.
          </p>
          <div className="mt-5 flex flex-col md:flex-row gap-4 items-center md:items-center">
            <button className="bg-light rounded-full text-dark py-[14px] px-1 font-bold hover:bg-light/80">
              <span className="border-4 border-secondary px-3 py-2 rounded-full">
                Explore Collection
              </span>
            </button>
            <button className="flex gap-4 items-center justify-center">
              <PlayCircle className="text-primary" weight="fill" size={32} />
              Watch short video
            </button>
          </div>
        </div>
        <div className="relative flex-1">
          <img className="" src={hero} alt="hero" />
          <div className="absolute top-10 right-5 h-96 w-96 rounded-full blur-2xl bg-yellow-600/20 -z-10" />
        </div>
      </section>
      <Category />
      <Products color="yellow" />
      <Products color="green" />
    </Helmet>
  );
};

export default Home;
