"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  // ✅ Image list from /public folder
  const images = [
    "/images/clothes.jpg",
    "/images/laptop.jpg",
    "/images/makeup.jpg",
    "/images/clothes.jpg",
    "/images/laptop.jpg",
    "/images/makeup.jpg",
 
  ];
   

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-screen-xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index} className="w-full">
            <Card className="w-full border-0 shadow-none">
              <CardContent className="flex items-center justify-center p-0">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={1920}
                  height={600}
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
                  priority={index === 0} // faster load for first image
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="text-green-600 hover:text-green-800" />
      <CarouselNext className="text-green-600 hover:text-green-800" />
    </Carousel>
  );
}
