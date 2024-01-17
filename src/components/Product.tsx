'use client';

import Link from 'next/link';
import { ProductProps, StateProps } from '../../type';
import Image from 'next/image';
import { urlFor } from '@/lib/sanityClient';
import { BsArrowsFullscreen } from 'react-icons/bs';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/redux/umkmSlice';
import toast from 'react-hot-toast';
import Price from './Price';

interface Props {
  product: ProductProps;
  bg?: string;
}

const Product = ({ product, bg }: Props) => {
  const { productData } = useSelector((state: StateProps) => state.umkm);

  const dispatch = useDispatch();

  const handleAddToCart = () => {

    if(productData.find((item) => item._id === product._id)) {
      toast.error(`${product?.title.substring(0, 12)}... already in cart`);
      return;
    }
    dispatch(addToCart(product));
    toast.success(`${product?.title.substring(0, 12)}... added to cart`);
  }

  return (
    <div className="w-full relative group shadow-md duration-200 shadow-gray-500 rounded-md overflow-hidden group">
      <div className="w-full h-60 md:h-72 flex items-center justify-center bg-background overflow-hidden">
        <div className={`relative ${bg} w-full`}>
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product?.image).url()}
              alt="product image"
              width={700}
              height={700}
              className="w-full h-72 object-cover"
            />
          </Link>
          <div className="abosute bottom-0 flex flex-col md:flex-row items-center gap-5 justify-center translate-y-[110%] group-hover:-translate-y-20 md:group-hover:-translate-y-5 transition-transform duration-300">
            <button
              onClick={handleAddToCart}
              className="bg-green-500 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-green-700 hover:text-white duration-200">
              <span>
                <AiOutlineShopping />
              </span>
              Add to bag
            </button>
            <Link
              href={`/product/${product?.slug?.current}`}
              className="bg-green-500 text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:bg-green-700 hover:text-white duration-200">
              <span>
                <BsArrowsFullscreen />
              </span>
              Quick view
            </Link>
          </div>
          {product?.isnew && (
            <div className="absolute top-5 right-5 z-10">
              <p className="bg-primary px-4 py-1 text-white flex justify-center items-center text-sm font-semibold hover:bg-primary/70 duration-300 cursor-pointer rounded-md">
                New
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-80 py-2 flex flex-col gap-1 px-4">
        <div className="flex flex-col">
          <h2 className="text-sm md:text-lg text-primeColor font-bold">
            {product?.title.substring(0, 15)}
          </h2>
          <div className="flex items-center gap-2">
            <Price className="font-semibold text-red-500" amount={product?.price} />
            <Price
              className="text-[#767676] text-xs line-through"
              amount={product?.rowprice}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#767676] text-xs md:text-sm">
            a product by{' '}
            <span className="font-semibold text-primeColor">
              {product?.brand}
            </span>
          </p>
          <div className="flex items-center gap-1">
            <MdOutlineStarPurple500 className="text-sm md:text-lg text-yellow-500" />
            <span className="font-medium text-xs">{product?.ratings}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
