"use client";

import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
    images: StaticImageData[];

    autoPlay?: boolean;
}

export function CarouselMutiple({ images, autoPlay = true }: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, });

    useEffect(() => {
        if (!autoPlay || !emblaApi) return;
        let interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 3000);

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
        <div className="relative w-full h-[300px] overflow-hidden">
            <div ref={emblaRef} className="overflow-hidden  rounded-md">
                <div className="flex h-full">
                    {images.map((src, index) => (
                        <div key={index}
                            className="min-w-[25%] h-[300px] relative mx-2"
                        >
                            <a href="/">

                                <Image
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    layout="fill"
                                    priority
                                    className="object-cover rounded-md"
                                />
                            </a>

                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
}
