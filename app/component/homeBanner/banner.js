import "./banner.css";
import * as React from "react";
import Image from "next/image";

import secure from "../../assets/images/secure.png";
import support from "../../assets/images/support.png";
import gift from "../../assets/images/gift.png";
import airplanePaper from "../../assets/images/airplanePaper.png";
import { useSelector } from "react-redux";

export function HomeBanner() {
  const { lang, langLoading } = useSelector((state) => state.lang);

  return (
    <>
      {langLoading ? (
        "..."
      ) : lang == "en" ? (
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
      ) : (
        <div className="container">
          <div className="icon-wrapper">
            <div className="icon-wrapper-item">
              <p>التوصيل المجاني</p>
              <span>لجميع الطلبات أكثر من 2000 جنيه مصرى</span>
            </div>
            <Image src={gift} alt="Free Delivery"></Image>
          </div>
          <div className="icon-wrapper">
            <div className="icon-wrapper-item">
              <p>إرجاع خلال 30 يومًا</p>
              <span>إذا كانت البضائع بها مشاكل</span>
            </div>
            <Image src={airplanePaper} alt="3 Days Return"></Image>
          </div>
          <div className="icon-wrapper">
            <div className="icon-wrapper-item">
              <p>الدفع الآمن</p>
              <span>دفع آمن بنسبة %100</span>
            </div>
            <Image src={secure} alt="Secure Payment"></Image>
          </div>
          <div className="icon-wrapper">
            <div className="icon-wrapper-item">
              <p>دعم على مدار الساعة </p>
              <span>الدعم المخصص</span>
            </div>
            <Image src={support} alt="24/7 Support"></Image>
          </div>
        </div>
      )}
    </>
  );
}
