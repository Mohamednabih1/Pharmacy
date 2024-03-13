"use client";

import ImageFallback from "./utils/ImageFallback";
import coming_soon_img from "@/assets/ProductAssets/coming_soon.jpg";
import { Link } from "@/lib/navigation";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { useLocale } from "next-intl";
import useTextDirection from "@/lib/useTextDirection";

export default function DiscoverProduct({
  image,
  textTitle,
  textSubTitle,
  para1,
  para2,
  href,
  animateLoop,
}: {
  image: string;
  textTitle: string;
  textSubTitle: string;
  para1: string;
  para2: string;
  href: string;
  animateLoop: boolean;
}) {
  const direction = useTextDirection(useLocale());

  const discoverVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4, duration: 1 },
    },
  };

  const discoverVariantsImg = {
    hidden: { opacity: 0, x: direction == "rtl" ? -500 : 500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 15 },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref);
  const [oneTimeAnimate, setOneTimeAnimate] = useState(true);

  const animation_variant =
    isInView == true
      ? "visible"
      : oneTimeAnimate === false
      ? "visible"
      : "hidden";

  function handleAnimationEnd() {
    if (animateLoop === false) {
      setOneTimeAnimate(() => false);
    }
  }

  const refImg = useRef(null);
  const isInViewImg = useInView(refImg);
  const [oneTimeAnimateImg, setOneTimeAnimateImg] = useState(true);

  const animation_variant_img =
    isInViewImg == true
      ? "visible"
      : oneTimeAnimateImg === false
      ? "visible"
      : "hidden";

  function handleAnimationEndImg() {
    if (animateLoop === false) {
      setOneTimeAnimateImg(() => false);
    }
  }

  return (
    <div
      dir={direction}
      className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center"
    >
      <motion.div
        variants={discoverVariants}
        initial="hidden"
        animate={animation_variant}
        className={`px-5 py-5 md:py-10 flex flex-col h-full w-full md:gap-5 text-center ${
          direction == "rtl" ? "md:text-right" : "md:text-left"
        }`}
        ref={ref}
        onAnimationComplete={handleAnimationEnd}
      >
        <motion.h1
          variants={discoverVariants}
          className="text-3xl font-semibold pb-4"
        >
          {textTitle}
        </motion.h1>
        <motion.p
          variants={discoverVariants}
          className="text-muted-foreground pb-2"
          style={{
            fontSize: direction == "rtl" ? "14px" : "12px",
            lineHeight: direction == "rtl" ? "20px" : "16px",
          }}
        >
          {textSubTitle}
        </motion.p>

        <motion.div
          variants={discoverVariants}
          className="flex justify-center items-center gap-4 mt-2"
        >
          <div className="w-full h-full">
            <h3
              className={`font-medium`}
              style={{
                fontSize: direction == "rtl" ? "18px" : "14px",
                lineHeight: direction == "rtl" ? "24px" : "20px",
              }}
            >
              {direction == "rtl" ? "انتعش" : "Revitalize"}
            </h3>
            <p
              className="text-muted-foreground"
              style={{
                fontSize: direction == "rtl" ? "14px" : "12px",
                lineHeight: direction == "rtl" ? "20px" : "16px",
              }}
            >
              {para1}
            </p>
          </div>

          <div className="w-full h-full">
            <h3
              className="font-medium"
              style={{
                fontSize: direction == "rtl" ? "18px" : "14px",
                lineHeight: direction == "rtl" ? "24px" : "20px",
              }}
            >
              {direction == "rtl" ? "تحول" : "Transform"}
            </h3>
            <p
              className="text-muted-foreground"
              style={{
                fontSize: direction == "rtl" ? "14px" : "12px",
                lineHeight: direction == "rtl" ? "20px" : "16px",
              }}
            >
              {para2}
            </p>
          </div>
        </motion.div>

        <motion.div variants={discoverVariants}>
          <Link href={href} className="mt-10 flex justify-center items-center">
            <Button
              variant={"outline"}
              className="hover:bg-[--main-color-gold] px-4 sm:px-8 border-2 border-[--main-color-gold]"
            >
              {direction == "rtl" ? "استكشف المنتج" : "Explore Product"}
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <div ref={refImg}>
        <motion.div
          variants={discoverVariantsImg}
          initial="hidden"
          animate={animation_variant_img}
          onAnimationComplete={handleAnimationEndImg}
          className="p-5 flex flex-col justify-center items-center h-full w-full relative"
        >
          <ImageFallback
            src={image}
            fallbackSrc={coming_soon_img}
            alt="productCard"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
}
