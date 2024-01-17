"use client";
import { Button } from '@/components/ui/button';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { categories } from '@/lib/sanityClient';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function Filter() {
  const [category, setCategory] = useState([]);
  const router = useRouter();

  const fetchCategories = async () => {
    const result = await categories();
    setCategory(result);
  }

  useEffect(() => {
    fetchCategories();
  },[])
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Filter <Plus className='w-4 h-4'/></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter</SheetTitle>
          <SheetDescription>
            Pilih Kategori
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-wrap gap-2 mt-8">
          {category?.map((item: any) => (
            <Button key={item?._id} onClick={() => router.push(`/shop/category/${item?.slug.current}`)} className="rounded-full min-w-28">{item?.title}</Button>
          ))}
        </div>
          <Button onClick={() => router.push('/shop')} className="rounded-full mt-5 w-full">All Products</Button>
      </SheetContent>
    </Sheet>
  );
}
