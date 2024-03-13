"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageFallback({ src, fallbackSrc, ...rest }: any) {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      alt=""
      {...rest}
      src={imgSrc}
      onLoad={(result) => {
        const e = result.target as HTMLImageElement;
        if (e.naturalWidth === 0) {
          // Broken image
          set_imgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        set_imgSrc(fallbackSrc);
      }}
    />
  );
}
