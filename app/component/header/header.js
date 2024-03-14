import Image from "next/image";

import logo from "../../assets/images/logo-full.png";
import phone from "../../assets/images/phone.png";
import email from "../../assets/images/email.png";
import location from "../../assets/images/location.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import youtube from "../../assets/images/youtube.png";
import linkedin from "../../assets/images/linkedin.png";
import cart from "../../assets/images/cart.png";
import person from "../../assets/images/person.png";
import search from "../../assets/images/search-white.png";
import favorite from "../../assets/images/favorite.png";

// import profile from "../../assets/profile.png";
import "./header.css";
// import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { hideLoading } from "@/redux/slices/cartSlice";
import { useEffect } from "react";

export function Header() {
  const dispatch = useDispatch();

  function myFunction(header, sticky) {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      header.setAttribute("style", "margin-top:0%");
    } else {
      header.classList.remove("sticky");
      header.setAttribute("style", "margin-top:2.5%");
    }
  }

  useEffect(() => {
    window.onscroll = function () {
      var header = document.getElementById("myHeader");
      var sticky = header.offsetTop;
      myFunction(header, sticky);
    };
    dispatch(hideLoading());
  }, [dispatch]);
  const { loading, cartItems } = useSelector((state) => state.cart);

  // const isMobile = true;
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <div className="Header-top">
        <div className="Header-top-left">
          <div className="Header-top-left-item">
            <Image id="Header-top-image" src={phone} alt="phone"></Image>
            Call us : 01151129517
          </div>
          <div className="divider"></div>
          <div className="Header-top-left-item">
            <Image id="Header-top-image" src={email} alt="email"></Image>
            Email : orsa@onFire.com
          </div>
        </div>
        <div className="Header-top-right">
          <div className="Header-top-right-item">
            <Image id="Header-top-image" src={location} alt="location" />
            Address : orsa at me
          </div>
          <div className="divider"></div>
          <div className="Header-top-right-box">switch language</div>
        </div>
      </div>

      <div className="header-middle">
        <div className="header-middle-left">
          <div className="header-middle-left-item">
            <Image id="header-middle-image" src={twitter} alt="twitter" />
          </div>
          <div className="header-middle-left-item">
            <Image id="header-middle-image" src={facebook} alt="facebook" />
          </div>
          <div className="header-middle-left-item">
            <Image id="header-middle-image" src={youtube} alt="youtube" />
          </div>
          <div className="header-middle-left-item">
            <Image id="header-middle-image" src={linkedin} alt="linkedin" />
          </div>
        </div>
        <div className="header-middle-center">
          <Link href={"/"}>
            <Image id="header-middle-center-image" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header-middle-right">
          <div className="search-box">
            <button className="btn-search">
              <Image
                id="header-middle-image-search"
                src={search}
                alt="search"
              />
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Type to Search..."
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="cart-container" href={"/cart"}>
            <Link href={"/cart"}>
              <div className="cart-badge">
                {loading ? "..." : cartItems.reduce((a, c) => a + c.qty, 0)}
              </div>
            </Link>
            <Link href={"/cart"}>
              <Image id="header-middle-image" src={cart} alt="cart" />
            </Link>
          </div>
          <Link href={"/logging"}>
            <Image id="header-middle-image" src={person} alt="person" />
          </Link>
          <Link href={"/favorite"}>
            <Image id="header-middle-image" src={favorite} alt="favorite" />
          </Link>
          {/* <Link className="right-header-content" href="/logging">
            <Image id="profile" src={profile} alt="profile"></Image>
          </Link> */}
        </div>
      </div>

      <div className="header-bottom" id="myHeader">
        <div className="dropdown">
          <span>Mouse over me</span>
          <div className="dropdown-content">
            <p>Hello World!</p>
          </div>
        </div>{" "}
        <div className="dropdown">
          <span>Mouse over me</span>
          <div className="dropdown-content">
            <p>Hello World!</p>
          </div>
        </div>{" "}
        <div className="dropdown">
          <span>Mouse over me</span>
          <div className="dropdown-content">
            <p>Hello World!</p>
          </div>
        </div>{" "}
        <div className="dropdown">
          <span>Mouse over me</span>
          <div className="dropdown-content">
            <p>Hello World!</p>
          </div>
        </div>
      </div>
    </>
  );
}
