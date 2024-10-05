import { PlayList } from "@/types";
import React from "react";

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
    <div>{/* PlayListCarousel {thumbnail} {title} {subTitle}{" "} */}</div>
  );
};

export default PlayListCarousel;
