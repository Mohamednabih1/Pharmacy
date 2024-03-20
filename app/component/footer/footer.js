import "./footer.css";
import Image from "next/image";
import logo from "../../assets/images/logoGreen.png";
import phone from "../../assets/images/phone.png";
import email from "../../assets/images/email.png";
import location from "../../assets/images/location.png";

import { useSelector } from "react-redux";

export function Footer() {
  const { lang, langLoading } = useSelector((state) => state.lang);

  return (
    <footer className="footer">
      {langLoading ? (
        <>...</>
      ) : lang == "en" ? (
        <>
          <div className="footer__addr">
            <h1 className="footer__logo">
              <Image id="footer-logo" src={logo} alt="logo"></Image>
            </h1>
            An injection puts a small amount of filler into a chosen area with
            the aim of helping to tempo rarely reduce the visibility
            <a className="footer__btn" href="mailto:example@gmail.com">
              Email Us
            </a>
          </div>
          <ul className="footer__nav">
            <li className="nav__item">
              <h2 className="nav__title">INFORMATION</h2>

              <ul className="nav__ul">
                <div className="footer-item">
                  <Image id="Header-top-image" src={phone} alt="phone"></Image>
                  Call us : 01151129517 اتصل بنا : 01151129517{" "}
                </div>

                <li>
                  <div className="footer-item">
                    <Image
                      id="Header-top-image"
                      src={email}
                      alt="email"
                    ></Image>
                    Email : orsa@onFire.com
                  </div>
                </li>

                <li>
                  <div className="footer-item">
                    <Image
                      id="Header-top-image"
                      src={location}
                      alt="location"
                    />
                    Address : orsa at me
                  </div>
                </li>
              </ul>
            </li>

            <li className="nav__item">
              <h2 className="nav__title">Legal</h2>

              <ul className="nav__ul">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Terms of Use</a>
                </li>

                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </li>
          </ul>{" "}
          <div className="legal">
            <p>&copy; 2019 Something. All rights reserved.</p>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="legal">
            <p>&copy; 2019 Something. All rights reserved.</p>
          </div>
          <ul className="footer__nav">
            <li className="nav__item">
              <h2 className="nav__title">معلومات</h2>
              <ul className="nav__ul">
                <div className="footer-item">
                  اتصل بنا : 01151129517
                  <Image id="Header-top-image" src={phone} alt="phone"></Image>
                </div>

                <li>
                  <div className="footer-item">
                    البريد الإلكتروني: orsa@onFire.com
                    <Image
                      id="Header-top-image"
                      src={email}
                      alt="email"
                    ></Image>
                  </div>
                </li>

                <li>
                  <div className="footer-item">
                    العنوان: أورسا في وجهي
                    <Image
                      id="Header-top-image"
                      src={location}
                      alt="location"
                    />
                  </div>
                </li>
              </ul>
            </li>

            <li className="nav__item">
              <h2 className="nav__title">قانوني</h2>

              <ul className="nav__ul">
                <li>
                  <a href="#">سياسة الخصوصية</a>
                </li>

                <li>
                  <a href="#">شروط الاستخدام</a>
                </li>

                <li>
                  <a href="#">خريطة الموقع</a>
                </li>
              </ul>
            </li>
          </ul>{" "}
          <div className="footer__addr">
            <h1
              className="footer__logo"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <Image id="footer-logo" src={logo} alt="logo"></Image>
            </h1>
            يتم الحقن بوضع كمية صغيرة من الحشو في المنطقة المختارة نادرًا ما
            يؤدي الهدف من المساعدة على الإيقاع إلى تقليل الرؤية
            <a className="footer__btn" href="mailto:example@gmail.com">
              ارسل لنا عبر البريد الإلكتروني{" "}
            </a>
          </div>
        </>
      )}
    </footer>
  );
}
