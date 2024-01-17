'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { ProductProps } from '../../../type';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { StateProps } from '../../../type';
import { useSession } from 'next-auth/react';
import CartItem from '../CartItem';
import emptyCart from '../../aseets/emptyCart.png';
import { resetCart } from '@/redux/umkmSlice';
import Price from '../Price';
import { useRouter } from 'next/navigation';

interface Props {
  item: ProductProps;
}

const CartSheet = () => {
  const { productData } = useSelector((state: StateProps) => state.umkm);
  const dispatch = useDispatch();
  const [totalAmt, setTotalAmt] = useState(0);
  const { data: session } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item?.price * item?.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);

  const handleReset = () => {
    const confirmed = window.confirm('Are you sure to reset your Cart?');
    confirmed && dispatch(resetCart());
    toast.success('Cart resetted successfully!');
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative" variant="ghost">
          <ShoppingCart />
          <div className="h-5 w-5 bg-primary rounded-full flex items-center justify-center absolute top-0 right-0">
            <span className="text-xs font-semibold text-white">
              {productData?.length}
            </span>
          </div>
        </Button>
      </SheetTrigger>
      {productData?.length > 0 ? (
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Product in Cart</SheetTitle>
          </SheetHeader>
          {productData.map((item) => (
              <CartItem key={item?._id} item={item} />
          ))}
          <Button
            size={'sm'}
            className="flex gap-2"
            onClick={handleReset}
            variant={'ghost'}>
            <Trash className="w-5 h-5 text-red-500" />
            Reset cart
          </Button>
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">Total</p>
            <p className="text-xl font-semibold">
              <Price amount={totalAmt} />
            </p>
          </div>
          <SheetClose asChild>
          <Button
            onClick={() => router.push('/cart')}
            size={'sm'}
            className="w-full mt-5 border-2 border-primary rounded-md py-2">
            Beli Sekarang
          </Button>
          </SheetClose>
          <SheetClose
            asChild
            className="w-full mt-5 border-2 border-primary rounded-md py-2 flex items-center justify-center">
            <Button variant={'ghost'} size={'sm'} onClick={() => router.push('/shop')}>Continue Shopping</Button>
          </SheetClose>
        </SheetContent>
      ) : (
        <SheetContent className="h-full flex flex-col justify-center items-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <Image src={emptyCart} alt="emptyCart" width={300} height={300} />
          </motion.div>
          <SheetClose
            asChild
            className="w-full mt-5 border-2 border-primary rounded-md py-2 flex items-center justify-center">
            <Link href={'/shop'}>Continue Shopping</Link>
          </SheetClose>
        </SheetContent>
      )}
    </Sheet>
  );
};

export default CartSheet;
