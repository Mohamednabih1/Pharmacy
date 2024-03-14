"use client";
import "./page.css";
import "./classes/product";

import { AdvertisePanel } from "./component/imageSlider";
import { Footer } from "./component/footer/footer";
import { ProductGrid } from "./component/productsGrid";
import { Header } from "./component/header/header";
import { HomeBanner } from "./component/homeBanner/banner";

import { useState, useEffect } from "react"; // Import necessary hooks

import { useDispatch } from "react-redux";
import { hideLoading } from "@/redux/slices/cartSlice";
// import { tes } from "/images/p1.jpg";

export default function Home() {
  const myNextIcon = ">";
  const myPerviousIcon = "<";
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(hideLoading());
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/products"); // Assuming an API route
        let productData = await response.json();
        if (productData.length > 0) {
          // parsedProducts = productData.map((data) => new ProductClass(data));
          console.log(productData);
          setItems(productData);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle errors appropriately (e.g., display error message to user)
      }
    };

    fetchData();
  }, [dispatch]);

  let pages = [1, 2, 3, 4, 5];
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleNextClick = () => {
    if (currentPage != pages.length) {
      let myPage = currentPage + 1;
      setCurrentPage(myPage);
      window.location.href = `#${currentPage}`;
    }
  };
  const handlePerviousClick = () => {
    if (currentPage != 1) {
      let myPage = currentPage - 1;
      setCurrentPage(myPage);
      window.location.href = `#${currentPage}`;
    }
  };

  return (
    <body>
      <Header></Header>
      <div className="main-content">
        <div className="image-slider">
          <AdvertisePanel></AdvertisePanel>
        </div>
        <HomeBanner></HomeBanner>
        <ProductGrid data={items}></ProductGrid>
        <div className="pagination">
          <button onClick={handlePerviousClick}>
            {myPerviousIcon} Pervious
          </button>
          {pages.map((pageNumber) => (
            <a
              key={pageNumber}
              href="#"
              className={`page ${currentPage === pageNumber ? "active" : ""}`}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </a>
          ))}
          <button onClick={handleNextClick}>next {myNextIcon}</button>
        </div>
      </div>

      <div className="footer">
        <Footer></Footer>
      </div>
    </body>
  );
}
