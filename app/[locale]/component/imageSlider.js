import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Ad1 from "../assets/pharmacy/2.jpg";
import Ad2 from "../assets/pharmacy/1.png";
import Ad3 from "../assets/pharmacy/3.jpg";

export function AdvertisePanel() {
  return (
    <Carousel className="w-full h-1/2">
      <CarouselContent>
        {/* {Array.from({ length: 2 }).map((_, index) => ( */}
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-auto items-center justify-center p-6 min-h-80">
                <span className="text-4xl font-semibold">
                  <Image alt="image" src={Ad1}></Image>
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-auto items-center justify-center p-6 min-h-80">
                <span className="text-4xl font-semibold">
                  {" "}
                  <Image alt="image" src={Ad2}></Image>
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-auto items-center justify-center p-6 min-h-80">
                <span className="text-4xl font-semibold">
                  <Image alt="image" src={Ad3}></Image>
                </span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        {/* ))} */}sad
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
