import { ChevronRight } from 'lucide-react';
import React from 'react';
import Cube from './Cube/Cube';
import Container from './Container';
import Link from 'next/link';

const Hero = () => {
  return (
    <Container>
      <div className="flex max-md:flex-col gap-4">
        <div className="max-md:text-center md:w-1/2">
          <p className="text-lg md:text-xl md:tracking-wide font-bold mb-4 font-dela text-primary">
            Welcome to UMKM Digital Blockchain!
          </p>
          <h1 className="text-3xl md:text-5xl md:leading-normal font-bold mb-4 font-dela">
            Let’s Make Indonesia as World{' '}
            <span className="text-primary">#1</span> Marketplace Platform
          </h1>
          <p className="text-gray-600 mb-6">
            PT. UMKM Digital Blockchain adalah platform digital yang digunakan
            untuk mempromosikan produk-produk UMKM. Kami memberikan layanan
            terbaik dan terpercaya untuk para pelaku UMKM.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-primary px-8 py-3 rounded-md text-white font-medium hover:bg-primary/70 transition-all duration-300 ease-in-out shadow-main">
              <Link className="flex items-center gap-2" href="/shop">
                <span>Explore Products</span>
                <ChevronRight />
              </Link>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center h-60 sm:h-96 items-center">
          <Cube />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
