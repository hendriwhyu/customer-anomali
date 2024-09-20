import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import useStarVisualization from '@/hooks/useStarVisulization';
import { TypographyH4, TypographyP } from '@/components/ui/typography';

function ProductCard() {
  const star = useStarVisualization(4.6, 5, {
    fontSize: '16px',
    color: 'black',
  });

  return (
    <Card>
      <CardHeader>
        <img
          alt="Product image"
          className="aspect-square w-full rounded-md object-cover"
          height="176"
          src="/src/assets/product_1.png"
          width="176"
        />
      </CardHeader>
      <CardContent>
        <TypographyH4 text="Organic European Linen sheet" />
        <div className="flex flex-row">
          <TypographyP text={'4.6'} />
          {star}
        </div>
        <TypographyP text="$ 10.99" />
      </CardContent>
    </Card>
  );
}

export default ProductCard;
