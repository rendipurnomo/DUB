import React from 'react';
import Container from './Container';
import { ProductProps } from '../../type';
import Product from './Product';

const Marquee = ({ products }: { products: ProductProps[] }) => {
  return (
    <Container>
      <h1 className="text-3xl font-bold text-center">Recomended Product</h1>
      <div className="relative overflow-x-hidden">
        <div className="flex w-[300%] md:w-full gap-4 py-12 md:px-2 animate-marquee3 whitespace-nowrap md:animate-marquee">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
          <div className="hidden absolute md:flex gap-4 py-12 px-2 top-0 animate-marquee2 whitespace-nowrap">
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
      </div>
    </Container>
  );
};

export default Marquee;
