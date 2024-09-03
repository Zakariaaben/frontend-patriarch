import { PropsWithChildren, useEffect, useRef } from "react";

import { Carousel as NativeCarousel } from "@fancyapps/ui";
import "@fancyapps/ui/dist/carousel/carousel.css";

import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";

import { cn } from "@/lib/utils";
import type { OptionsType } from "@fancyapps/ui/types/Carousel/options";

interface Props {
  options?: Partial<OptionsType>;
  className?: string;
}

const defaults: Partial<OptionsType> = {
  Dots: false,
  Thumbs: {
    type: "modern",
  },
};

function FancyCarousel(props: PropsWithChildren<Props>) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const options = {
      ...defaults,
      ...(props.options || {}),
    };

    const instance = new NativeCarousel(container, options, { Thumbs });

    return () => {
      instance.destroy();
    };
  });

  return (
    <div className={cn(props.className, "f-carousel")} ref={containerRef}>
      {props.children}
    </div>
  );
}

export default FancyCarousel;
