import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

function MainCard() {
  return (
    <div className="py-4">
      <div className="flex min-h-[480px] px-4 md:px-6 lg:px-8 pb-6 gap-4 lg:gap-8 justify-end flex-col self-stretch rounded-xl bg-[url('/src/assets/main-card-image.jpg')] bg-cover bg-center">
        <div className="flex flex-col items-start gap-2 text-black">
          <h3 className="font-black text-5xl">
            Explore our branded collections
          </h3>
          <h4 className="text-base">
            Discover the latest in branded clothing and accessories. Elevate
            your style with our curated collections
          </h4>
        </div>
        <Link to="/login">
          <Button className="min-w-[84px] max-w-[120px]">Shop Now</Button>
        </Link>
      </div>
    </div>
  );
}

export default MainCard;
