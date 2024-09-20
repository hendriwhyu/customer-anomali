import React from 'react';
import { TypographyH3 } from '@/components/ui/typography';
import ProductCard from '@/components/common/ProductCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

function ProductList() {
  return (
    <div className="flex flex-col gap-2 py-4">
      <TypographyH3 text="Featured Products" />
      <Carousel className="w-full py-2">
        <CarouselContent className="-ml-1 gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/3 lg:basis-1/4">
              <ProductCard />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default ProductList;
