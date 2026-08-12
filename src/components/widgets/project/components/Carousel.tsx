'use client'

import {
  Carousel as CarouselShad,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay"

interface ICarousel {
    images: string[],
    delay?: number
}

export function Carousel({ images = [], delay }: ICarousel) {
    return(
        <CarouselShad
 
            className="h-full max-h-[480px] shadow-md rounded-md"
            plugins={ delay ? [Autoplay({ delay })] : []}
        >
        <CarouselContent className="h-full max-h-[480px] rounded-md">
            {
                images.length && (
                    images.map((shot, index) => (
                        <CarouselItem key={index}>
                            <Image
                                className="rounded-md w-full h-full max-h-[480px]"
                                src={`/${shot}`}
                                width={900}
                                height={480}
                                alt={shot}
                            /> 
                        </CarouselItem>
                    ))
                )
            }
        </CarouselContent>
        </CarouselShad>
    )
}