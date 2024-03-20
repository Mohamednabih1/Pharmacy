"use client";
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

import "./header.css";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading } from "@/redux/slices/cartSlice";
import { hideFavoriteLoading } from "@/redux/slices/favoriteSlice";
import { saveLangValue, hideLangLoading } from "@/redux/slices/langSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import React from "react";

export const Header = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [categoriesList, setCategoriesList] = useState([]);

  const onSearchChange = (event) => {
    props.onButtonClick(event);
  };

  function myFunction(header, sticky) {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      header.setAttribute("style", "margin-top:0%;position:fixed;");
    } else {
      header.classList.remove("sticky");
      header.setAttribute("style", "margin-top:2.5%");
    }
  }

  const getCategoriesList = async (url) => {
    try {
      const response = await fetch(url);
      let CategoriesListData = await response.json();
      if (CategoriesListData.length > 0) {
        setCategoriesList(CategoriesListData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const changeLang = () => {
    if (lang == "en") {
      dispatch(saveLangValue("ar"));
    } else {
      dispatch(saveLangValue("en"));
    }
  };
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
    };

    if (router.events) {
      router.events.on("routeChangeStart", handleRouteChange);

      return () => {
        router.events.off("routeChangeStart", handleRouteChange);
      };
    }
  }, [router.events]);

  useEffect(() => {
    getCategoriesList("http://localhost:3000/api/v1/category");

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    window.onscroll = function () {
      var header = document.getElementById("myHeader");
      var sticky = header.offsetTop;
      myFunction(header, sticky);
    };

    dispatch(hideLoading());
    dispatch(hideLangLoading());
    dispatch(hideFavoriteLoading());
  }, [dispatch]);
  const { lang, langLoading } = useSelector((state) => state.lang);
  const { loading, cartItems } = useSelector((state) => state.cart);
  const { favoriteLoading, favoriteItems } = useSelector(
    (state) => state.favorite
  );

  return (
    <div>
      <div className="Header-top">
        <div className="Header-top-left">
          <div className="Header-top-left-item">
            {langLoading ? (
              "..."
            ) : lang == "ar" ? (
              <>
                اتصل بنا : 01151129517{" "}
                <Image id="Header-top-image" src={phone} alt="email"></Image>
              </>
            ) : (
              <>
                <Image id="Header-top-image" src={phone} alt="phone"></Image>
                Call us : 01151129517
              </>
            )}
          </div>
          <div className="divider"></div>
          <div className="Header-top-left-item">
            {langLoading ? (
              "..."
            ) : lang == "ar" ? (
              <>
                البريد الإلكتروني: orsa@onFire.com{" "}
                <Image id="Header-top-image" src={email} alt="email"></Image>
              </>
            ) : (
              <>
                <Image id="Header-top-image" src={email} alt="email"></Image>
                Email : orsa@onFire.com
              </>
            )}
          </div>
        </div>
        <div className="Header-top-right">
          <div className="Header-top-right-item">
            {langLoading ? (
              "..."
            ) : lang == "ar" ? (
              <>
                العنوان:أورسا الجامج{" "}
                <Image id="Header-top-image" src={location} alt="location" />
              </>
            ) : (
              <>
                <Image id="Header-top-image" src={location} alt="location" />
                Address : orsa at me
              </>
            )}
          </div>
          <div className="divider"></div>
          <div className="Header-top-right-box" onClick={changeLang}>
            <div>
              {langLoading
                ? "..."
                : lang == "en"
                ? " تغير اللغه"
                : "switch language"}
            </div>
          </div>
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
              onChange={onSearchChange}
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
          <div className="cart-container" href={"/cart"}>
            <Link href={"/favorite"}>
              <div className="cart-badge">
                {favoriteLoading ? "..." : favoriteItems.length}
              </div>
            </Link>
            <Link href={"/favorite"}>
              <Image id="header-middle-image" src={favorite} alt="favorite" />
            </Link>
          </div>

          {/* <Link className="right-header-content" href="/logging">
            <Image id="profile" src={profile} alt="profile"></Image>
          </Link> */}
        </div>
      </div>

      {langLoading ? (
        "..."
      ) : lang == "en" ? (
        <div className="header-bottom" id="myHeader">
          <div className="dropdown">
            <a href="/">
              <span>Home</span>
            </a>
          </div>{" "}
          <div className="dropdown">
            <a href="/categories">
              <span>Categories</span>
            </a>
            <div className="dropdown-content">
              {categoriesList.length > 0 &&
                categoriesList.map((category) => (
                  <div key={category._id} className="item">
                    <Link href={`/categories/${category._id}`}>
                      <div className="itemDec">{category.name}</div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="dropdown">
            <a href="/location">
              <span>Location</span>
            </a>
          </div>
          <div className="dropdown">
            <a href="/about">
              <span>About us</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="header-bottom" id="myHeader">
          <div className="dropdown">
            <a href="/about">
              <span>من نحن</span>
            </a>
          </div>
          <div className="dropdown">
            <a href="/location">
              <span>فروعنا</span>
            </a>
          </div>
          <div className="dropdown">
            <a href="/categories">
              <span>الاقسام</span>
            </a>
            <div className="dropdown-content">
              {categoriesList.length > 0 &&
                categoriesList.map((category) => (
                  <div key={category._id} className="item">
                    <Link href={`/categories/${category._id}`}>
                      <div className="itemDec">{category.name}</div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className="dropdown">
            <a href="/">
              <span>الصفحة الرئيسية</span>
            </a>
          </div>{" "}
        </div>
      )}
    </div>
  );
};
