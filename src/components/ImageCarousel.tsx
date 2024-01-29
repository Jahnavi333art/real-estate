import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export type CarouselImageType = {
  url: string;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImageType[];
  height?: string | number;
  width?: string | number;
};

const ImageCarousel = ({
  images,
  height = "20rem",
  width = "100%",
}: ImageCarouselProps) => {
  return (
    <Carousel>
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.url}>
            <div className="relative" style={{ width, height }}>
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageCarousel;
