'use client';

import Container from '@/components/Container';
import { products } from '@/lib/sanityClient';
import React, { useEffect, useState } from 'react';
import { ProductProps } from '../../../../type';
import Product from '@/components/Product';
import { Filter } from '@/components/Filter';

const ShopPage = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await products();
        setProductData(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <Container>
      <div className="flex items-center justify-between pb-10">
        <h2 className="text-2xl text-primeColor font-bold">All Products</h2>
        <Filter />
      </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {productData?.map((item: ProductProps) => (
            <Product key={item?._id} product={item} />
          ))}
        </div>
    </Container>
  );
};

export default ShopPage;
