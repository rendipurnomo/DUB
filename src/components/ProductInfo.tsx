'use client';

import { useDispatch } from 'react-redux';
import { ProductProps } from '../../type';
import Price from './Price';
import { addToCart } from '@/redux/umkmSlice';
import toast from 'react-hot-toast';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

interface Props {
  product: ProductProps;
}
const ProudctInfo = ({ product }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold text-black">{product?.title}</h2>
      <div className="flex items-center gap-4">
        <p className="text-lg font-normal text-gray-500 line-through">
          <Price amount={product?.rowprice} />
        </p>

        <Price
          amount={product?.price}
          className="text-lg font-bold text-black"
        />

        <p className="text-sm text-black flex flex-col gap-2 md:flex-row">
          hemat{' '}
          <Price
            className="bg-green-700 text-white px-2 rounded-md"
            amount={product?.rowprice - product?.price}
          />
        </p>
      </div>
      <p className="text-sm tracking-wide text-gray-600">
        {product?.description}
      </p>
      <p className="text-sm text-gray-500">Be the first to leave a review.</p>
      <div className='flex flex-col gap-2'>
        <Button
          onClick={() => {
            dispatch(addToCart(product));
            toast.success(
              `${product?.title.substring(0, 12)}... added to cart`
            );
          }}>
          Add to Cart
        </Button>
        <Button
          className='bg-lime-600 hover:bg-lime-800'
          onClick={() => router.push('/cart')}>
          Beli Sekarang
        </Button>
      </div>
      <p className="font-normal text-sm">
        <span className="text-base font-medium">Categories:</span> Spring
        collection, Streetwear, Women Tags: featured SKU: N/A
      </p>
    </div>
  );
};

export default ProudctInfo;
