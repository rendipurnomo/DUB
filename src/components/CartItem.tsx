
import { ProductProps } from '../../type';
import Image from 'next/image';
import { urlFor } from '@/lib/sanityClient';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from '@/redux/umkmSlice';
import { Trash } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  item: ProductProps;
}

const CartItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  
  const handleDecreaseQuantity = () => {
    if (item?.quantity > 1) {
      dispatch(decreaseQuantity({ _id: item?._id }));
      toast.success('Product reduced successully');
    }
    
  }
  return (
    <div className="w-full justify-between flex mb-4 py-2 mt-8">
      <div className="flex items-center gap-2">
        <Trash
          size={20}
          onClick={() => {
            dispatch(deleteProduct(item._id));
            toast.success(
              `${item?.title.substring(0, 12)}... deleted from cart`
            );
          }}
          className="text-primeColor hover:text-red-500 cursor-pointer duration-300"
        />
        <Link
          className="flex flex-col justify-center"
          href={`/product/${item?.slug?.current}`}>
          <Image
            src={urlFor(item?.image).url()}
            alt="product image"
            width={50}
            height={50}
            className="w-16 h-16 object-cover rounded-md"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-xs">{item?.title.substring(0, 20)}</h1>
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Button onClick={handleDecreaseQuantity} variant={'outline'}>
            -
          </Button>
          <p>{item?.quantity}</p>
          <Button
            onClick={() => {
              dispatch(increaseQuantity({ _id: item?._id }));
              toast.success('Product added successully');
            }}
            variant={'outline'}>
            +
          </Button>
        </div>
        <p>${item.price * item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
