"use client";
import Image from "next/image";
import Fancybox from "./Fancybox";
import FancyCarousel from "./FancyCarousel";
export const Carousel = ({
  IMAGES,
}: {
  IMAGES: { id: number; imageSrc: string }[];
}) => {
  return (
    <>
      <div className="overflow-hidden">
        <div>
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            <FancyCarousel>
              {IMAGES.map((image, index) => (
                <div
                  key={index}
                  className="f-carousel__slide flex  relative aspect-video flex-1 h-fit"
                  data-fancybox="gallery"
                  data-src={image.imageSrc}
                >
                  <Image
                    alt=""
                    quality={70}
                    src={image.imageSrc}
                    layout="fill"
                    className="w-full h-auto"
                    objectFit="cover"
                  />
                </div>
              ))}
            </FancyCarousel>
          </Fancybox>
        </div>
      </div>
    </>
  );
};
