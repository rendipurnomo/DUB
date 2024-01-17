'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { ListItem } from './ListItem';
import Logo from '../ui/Logo';
import { useEffect, useState } from 'react';
import { categories, urlFor } from '@/lib/sanityClient';
import Image from 'next/image';

const DesktopNav = () => {
  const [category, setCategory] = useState([]);

  const fetchCategories = async () => {
    const result = await categories();
    setCategory(result);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="hidden lg:flex gap-x-8 items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Lobby</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/">
                      <Logo />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        UMKM Digital
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Semangat mengembangkan UMKM Go Digital
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/shop" title="Products">
                  All the products we have to offer
                </ListItem>
                <ListItem href="/shop" title="Categories">
                  See all categories we have
                </ListItem>
                <ListItem title="Tentang UMKM">
                  Perusahaan kami mengembangkan UMKM untuk bisa bersaing di pasar global
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2">
                {category &&
                  category.map((item: any) => (
                    <div key={item?._id} className="flex gap-2">
                      <Image
                        src={urlFor(item?.image).url()}
                        width={50}
                        height={50}
                        className='object-cover rounded-md w-12 h-12'
                        alt={item?.title}
                      />
                      <ListItem
                        href={`/shop/category/${item.slug?.current}`}
                        title={item?.title}>
                        {item?.description}
                      </ListItem>
                    </div>
                  ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
