"use client";
import "./page.css";
import "./classes/product";

import { AdvertisePanel } from "./component/imageSlider";
import { PaginationDemo } from "./component/pagination";
import { Footer } from "./component/footer/footer";
import { ProductGrid } from "./component/productsGrid";
import { Header } from "./component/header/header";

import { useState, useEffect } from "react"; // Import necessary hooks

import { useDispatch } from "react-redux";
import { hideLoading } from "@/redux/slices/cartSlice";

// import { tes } from "/images/p1.jpg";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);

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

  return (
    <body>
      <Header></Header>
      {/* <Image alt="sad" src={tes}></Image> */}
      <div className="main-content">
        <div className="image-slider">
          <AdvertisePanel></AdvertisePanel>
        </div>
        <ProductGrid data={items}></ProductGrid>

        <PaginationDemo></PaginationDemo>
      </div>

      <div className="footer">
        <Footer></Footer>
      </div>
    </body>
  );
}
