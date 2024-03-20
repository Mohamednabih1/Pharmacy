"use client";
import "./category.css";
import { Header } from "../../component/header/header";
import { Footer } from "../../component/footer/footer";
import { ProductGrid } from "../../component/productGrid/productsGrid";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GoShopping } from "../../component/goToShopping/goShopping";

export default function CategoryWithId() {
  const pathname = usePathname();
  let str = pathname;
  let number = str.slice(12);
  const [items, setItems] = useState([]);

  const getProducts = async (url) => {
    try {
      const response = await fetch(url); // Assuming an API route
      let productData = await response.json();
      if (productData.products.length > 0) {
        setItems(productData.products);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    getProducts(
      `http://localhost:3000/api/v1/category/${number}?pageNumber=${1}&pageSize=10`
    );
  });
  return (
    <>
      <Header></Header>
      {items.length == 0 ? (
        <GoShopping name="No items in this category"></GoShopping>
      ) : (
        <div className="ProductGridCategory">
          <ProductGrid data={items}></ProductGrid>
        </div>
      )}
      <Footer></Footer>
    </>
  );
}
