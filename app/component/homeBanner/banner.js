import "./banner.css";
import * as React from "react";
import Image from "next/image";

import secure from "../../assets/images/secure.png";
import support from "../../assets/images/support.png";
import gift from "../../assets/images/gift.png";
import airplanePaper from "../../assets/images/airplanePaper.png";

export function HomeBanner() {
  return (
    <>
      <div className="container">
        <div className="icon-wrapper">
          <Image src={gift} alt="Free Delivery"></Image>
          <div className="icon-wrapper-item">
            <p>Free Delivery</p>
            <span>For all orders over 2000LE</span>
          </div>
        </div>
        <div className="icon-wrapper">
          <Image src={airplanePaper} alt="3 Days Return"></Image>
          <div className="icon-wrapper-item">
            <p>30 Days Return</p>
            <span>If goods have problems</span>
          </div>
        </div>
        <div className="icon-wrapper">
          <Image src={secure} alt="Secure Payment"></Image>
          <div className="icon-wrapper-item">
            <p>Secure Payment</p>
            <span>100% Secure Payment</span>
          </div>
        </div>
        <div className="icon-wrapper">
          <Image src={support} alt="24/7 Support"></Image>
          <div className="icon-wrapper-item">
            <p>24/7 Support</p>
            <span>Dedicated Support</span>
          </div>
        </div>
      </div>
    </>
  );
}
