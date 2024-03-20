"use client";
import { Header } from "../../component/header/header";
import { Footer } from "../../component/footer/footer";
import email from "../../assets/email.png";
import facebook from "../../assets/facebook.png";
import ImageViewer from "../../component/ImageViewer";
import { usePathname } from "next/navigation";
import "./product.css";
import { useState, useEffect } from "react"; // Import useState hook
import AddToCart from "../../component/cartBtn/addToCartBtn";
import AddToFavorite from "@/app/component/favoriteBtn/addToFavoriteBtn";
// import { cookies } from "next/headers";

export default function ProductId() {
  const [item, setItem] = useState([]);

  const pathname = usePathname();
  let str = pathname;
  let number = str.slice(9);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/products"); // Assuming an API route
        let productData = await response.json();
        if (productData.length > 0) {
          for (let i = 0; i < productData.length; i++) {
            if (productData[i]._id == number) {
              setItem(productData[i]);
              break;
            }
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [item, number]);
  const images = [email, facebook, email]; // Replace with your image URLs

  var isOnSale = true;
  var salePercentage = "8%";
  var isRemaining = true;

  return (
    <>
      {" "}
      <Header></Header>
      <div className="card-wrapper">
        <div className="card">
          <ImageViewer images={images}></ImageViewer>
          <div className="product-content">
            <h2 className="product-title">{item.name}</h2>

            <div className="product-remaining">remaining:276</div>

            <div className="product-price">
              {isOnSale && (
                <p className="last-price">
                  Old Price: <span>$257.00</span>
                </p>
              )}
              <p className="new-price">
                New Price: <span>$239.00 {salePercentage}</span>
              </p>
            </div>

            <div className="product-detail">
              <h2>description: </h2>
              <p>{item.description}</p>

              <ul>
                {isRemaining && (
                  <li>
                    Available: <span>in stock</span>
                  </li>
                )}
                <li>
                  Category: <span>{item.category}</span>
                </li>
                <li>
                  Shipping Area: <span>Egypt</span>
                </li>
              </ul>
            </div>
            <div className="buttons">
              <div className="purchase-info">
                <AddToCart
                  increasePerClick={true}
                  paddingHorizontal={20}
                  paddingVertical={2}
                  product={{
                    id: item._id,
                    name: item.name,
                    image: "/images/p1.jpg",
                    price: item.price,
                    countInStock: 10,
                    rating: 4.5,
                    numReviews: 10,
                    description: item.description,
                  }}
                ></AddToCart>
                <AddToFavorite
                  paddingHorizontal={100}
                  paddingVertical={10}
                  product={{
                    id: item._id,
                    name: item.name,
                    image: "/images/p1.jpg",
                    price: item.price,
                    countInStock: 10,
                    rating: 4.5,
                    numReviews: 10,
                    description: item.description,
                  }}
                ></AddToFavorite>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
