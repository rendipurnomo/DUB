import React, { useState, useEffect, useTransition, useCallback } from 'react';
import { Link, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useRouter } from 'next/navigation';
import { client } from '@/lib/sanityClient';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

const SearchButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<any>(null)
  const [isPending, startTransition] = useTransition()
  const router = useRouter();

  const fetchProducts = async () => {
    const response = await client.fetch(`*[_type == "product" && title match "${query}*"]{...}`);
    setData(response)
  }

  useEffect(() => {
    fetchProducts()
  },[query])

  useEffect(() => {
    const handleKeyDown = (e:any) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!open) {
      setQuery('');
    }
  }, [open]);

  const handleSelect = useCallback((callback: () => unknown) => {
    setOpen(false);
    callback();
  }, []);
  return (
    <>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 rounded-full xl:rounded-md">
        <Search className="h-4 w-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search products...</span>
        <span className="sr-only">Search products</span>
        <kbd className="pointer-events-none absolute right-2 top-2 hidden h-6 select-none items-center gap-1 rounded-full border bg-muted px-1.5 text-xs font-medium opacity-100 xl:flex">
          <abbr title="Control" className="no-underline">
            Ctrl
          </abbr>
          K
        </kbd>
      </Button>
      <CommandDialog position="top" open={open} onOpenChange={setOpen}>
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Search products..."
        />
        <CommandList className="h-[150px] overflow-y-scroll">
          <CommandEmpty
            className={cn(isPending ? 'hidden' : 'py-6 text-center text-sm')}>
            No products found.
          </CommandEmpty>
          {isPending ? (
            <div className="space-y-1 overflow-hidden px-1 py-2">
              <Skeleton className="h-4 w-10 rounded" />
              <Skeleton className="h-8 rounded-sm" />
              <Skeleton className="h-8 rounded-sm" />
            </div>
          ) : (
            data &&
            data.map((product: any) => (
              <CommandGroup key={product._id}>
                <CommandItem
                  value={product.title}
                  onSelect={() =>
                    handleSelect(() =>
                      router.push(`/product/${product.slug.current}`)
                    )
                  }
                  className="text-sm">
                  {product.title}
                </CommandItem>
              </CommandGroup>
            ))
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchButton;
