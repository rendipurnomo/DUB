import React from 'react';
import Banner from '@/components/Banner';
import NewArrival from '@/components/NewArrival';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanityClient';
import HomeBanner from '@/components/HomeBanner';
import BestSellers from '@/components/BestSeller';
import YearProduct from '@/components/YearProduct';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import { pi } from '@/lib/pi';


const bannerQuery = groq`*[_type=='banner']{
  image,
  _id
} | order(_createdAt desc)`;

const newArrivalQuery = groq`*[_type == 'product' && position == 'New Arrivals']{
  ...
} | order(_createdAt desc)`;

const bestSellersQuery = groq`*[_type == 'product' && position == 'Bestsellers']{
  ...
 } | order(_createdAt asc)`;

const specialOffersQuery = groq`*[_type == 'product' && position == 'Special Offers']{
  ...
 } | order(_createdAt asc)`;

 const paginationQuery = groq`*[_type == "product" && _id > $lastId][$index]._id`;

const HomePage = async () => {
  // const userUid = process.env._PI_USER_UID!;
  // const paymentData = {
  //   amount: 1,
  //   memo: 'Refund for apple pie', // this is just an example
  //   metadata: { productId: 'apple-pie-1' },
  //   uid: userUid,
  // };

  // const paymentId = await pi.createPayment(paymentData);
  // console.log(paymentId);

  const pagination = await client.fetch(paginationQuery, {
    lastId: '',
    index: 0,
  })
  const banners = await client.fetch(bannerQuery);
  const newArrivalProducts = await client.fetch(newArrivalQuery);
  const bestSellersProducts = await client.fetch(bestSellersQuery);
  const specialOffersProducts = await client.fetch(specialOffersQuery);

  return (
    <main className="text-sm overflow-hidden min-h-screen">
      {/* <Banner banners={banners} /> */}
      <Hero />
      <Marquee products={newArrivalProducts} />
      <HomeBanner />
      <NewArrival products={newArrivalProducts} />
      <BestSellers products={bestSellersProducts} title="Our Bestsellers" />
      <YearProduct />
      {/* <BestSellers products={specialOffersProducts} title="Special Offers" /> */}
    </main>
  );
};

export default HomePage;
