"use client";
import "./page.css";
import React from "react";

import { AdvertisePanel } from "./component/imageSlider";
import { Footer } from "./component/footer/footer";
import { ProductGrid } from "./component/productGrid/productsGrid";
import { Header } from "./component/header/header";
import { HomeBanner } from "./component/homeBanner/banner";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { lang, langLoading } = useSelector((state) => state.lang);

  const [isSearching, setIsSearching] = useState(false);
  const [items, setItems] = useState([]);

  // const myNextIcon = ">";
  // const myPerviousIcon = "<";

  const handleInputChange = (event) => {
    if (event.target.value == "") {
      setIsSearching(false);
      getProducts("http://localhost:3000/api/v1/products");
    } else {
      setIsSearching(true);
      getProducts(
        "http://localhost:3000/api/v1/products/search/" + event.target.value
      );
    }
    if (event) console.log(event.target.value);
  };

  const getProducts = async (url) => {
    try {
      const response = await fetch(url); // Assuming an API route
      let productData = await response.json();
      if (productData.length > 0) {
        productData = productData.slice(0, 8);
        setItems(productData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getProducts("http://localhost:3000/api/v1/products");
  }, []);

  // let pages = [1, 2, 3, 4, 5];
  // const [currentPage, setCurrentPage] = useState(1);

  // const handlePageClick = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  // const handleNextClick = () => {
  //   if (currentPage != pages.length) {
  //     let myPage = currentPage + 1;
  //     setCurrentPage(myPage);
  //     window.location.href = `#${currentPage}`;
  //   }
  // };
  // const handlePerviousClick = () => {
  //   if (currentPage != 1) {
  //     let myPage = currentPage - 1;
  //     setCurrentPage(myPage);
  //     window.location.href = `#${currentPage}`;
  //   }
  // };

  //   <div className="pagination">
  //   <button onClick={handlePerviousClick}>
  //     {myPerviousIcon} Pervious
  //   </button>
  //   {pages.map((pageNumber) => (
  //     <a
  //       key={pageNumber}
  //       href="#"
  //       className={`page ${currentPage === pageNumber ? "active" : ""}`}
  //       onClick={() => handlePageClick(pageNumber)}
  //     >
  //       {pageNumber}
  //     </a>
  //   ))}
  //   <button onClick={handleNextClick}>next {myNextIcon}</button>
  // </div>

  return (
    <body>
      <Header onButtonClick={handleInputChange}></Header>
      {/* {<div>orsa {lang}</div>} */}
      <div className="main-content">
        {!isSearching && (
          <div className="image-slider">
            <AdvertisePanel></AdvertisePanel>
          </div>
        )}
        {!isSearching && <HomeBanner></HomeBanner>}
        <ProductGrid data={items}></ProductGrid>
        <div className="seeMore">
          <a href="/categories">
            {langLoading ? "..." : lang == "en" ? "see more" : "تفقد المزيد"}
          </a>
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </body>
  );
}
