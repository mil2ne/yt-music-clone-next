import { PlayList } from "@/types";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PlayListCarouselProps {
  title: string;
  subTitle?: string;
  thumbnail?: React.ReactNode;
  playlistArray?: PlayList[];
}

const PlayListCarousel: React.FC<PlayListCarouselProps> = ({
  title,
  subTitle,
  thumbnail,
  playlistArray,
}) => {
  return (
    <div className="w-full">
      <Carousel>
        <div className=" flex flex-row justify-between items-end my-2">
          <article className=" flex flex-row gap-3">
            {thumbnail}
            <div className="flex flex-col">
              <div>
                {subTitle && (
                  <div className=" text-neutral-500">{subTitle}</div>
                )}
              </div>
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">Card</div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default PlayListCarousel;
