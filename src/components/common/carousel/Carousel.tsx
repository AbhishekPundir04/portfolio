"use client";

import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: StaticImageData[];
  autoPlay?: boolean;
  showMultiple?:boolean;
}

export function Carousel({ images, autoPlay = true,showMultiple=false }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true ,});

  useEffect(() => {
    if (!autoPlay || !emblaApi) return;
    let interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, emblaApi]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="relative w-full h-[400px] overflow-hidden mb-8">
      <div ref={emblaRef} className="overflow-hidden h-full  rounded-lg">
        <div className="flex h-full">
          {images.map((src, index) => (
            <div key={index} className="min-w-full h-full relative ">
              <a href="/">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                layout="fill"
                priority
                className="object-cover"
              />
              </a>

            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/60 backdrop-blur-md rounded-full p-1 shadow-lg"
        onClick={scrollPrev}
      >
        <ChevronLeft size={32} />
      </button>

      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/60 backdrop-blur-md rounded-full p-1 shadow-lg"
        onClick={scrollNext}
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 bg-white rounded-full opacity-75"
          />
        ))}
      </div>
    </div>
  );
}
