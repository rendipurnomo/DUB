import Container from '@/components/Container';
import Onsale from '@/components/Onsale';
import { client, urlFor } from '@/lib/sanityClient';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { ProductProps } from '../../../../../type';
import ProductInfo from '@/components/ProductInfo';
import { PortableText } from '@portabletext/react';
import { RichText } from '@/components/RichText';
import Marquee from '@/components/Marquee';

interface Props {
  params: {
    slug: string;
  };
}
export const revalidate = 0;

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'product']{
        slug
    }`;

  const slugs: any = await client.fetch(query);
  const slugRoutes = slugs.map((slug: any) => slug?.slug?.current);
  return slugRoutes?.map((slug: string) => ({
    slug,
  }));
};

const specialOffersQuery = groq`*[_type == 'product']{
    ...
   } | order(_createdAt asc)`;

const SinglePage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'product' && slug.current == $slug][0]{
    ...
  }`;

  const product: ProductProps = await client.fetch(query, { slug });
  const specialOffersProduct = await client.fetch(specialOffersQuery);

  return (
    <Container className="md:my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 bg-gray-100 rounded-2xl p-4">
        <div>
          <Onsale products={specialOffersProduct} />
        </div>
        <div className="h-full xl:col-span-2 flex items-center justify-center">
          <Image
            src={urlFor(product?.image).url()}
            alt="product image"
            className="w-[400px] h-[400px] object-cover rounded-md"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
          <ProductInfo product={product} />
        </div>
      </div>
      <Marquee products={specialOffersProduct} />
      <PortableText value={product?.body} components={RichText} />
    </Container>
  );
};

export default SinglePage;
