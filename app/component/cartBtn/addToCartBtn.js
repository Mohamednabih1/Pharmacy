"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addToCart } from "@/redux/slices/cartSlice";
import "./btn.css";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function AddToCart({
  product,
  showQty = true,
  redirect = false,
  increasePerClick = false,
  useQuantity: useQuantity = true,
  paddingVertical,
  paddingHorizontal,
}) {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  const router = useRouter();
  const [qty, setQty] = useState(1);

  const addToCartHandler = () => {
    let newQty = qty;
    if (increasePerClick) {
      const existItem = cartItems.find((x) => x.id === product.id);
      if (existItem) {
        if (existItem.qty + 1 <= product.countInStock) {
          newQty = existItem.qty + 1;
        } else {
          return toast.error("no more items in stock");
        }
      }
    }
    dispatch(addToCart({ ...product, qty: newQty }));

    if (redirect) router.push("/cart");
  };

  return (
    <>
      {" "}
      <Toaster position="bottom-center" />
      {product.countInStock > 0 && showQty && useQuantity && (
        <div className="purchaseNumInput">
          <input
            type="text"
            pattern="[0-9]*"
            onChange={(e) => setQty(Number(e.target.value))}
            value={qty}
          />
        </div>
      )}
      {product.countInStock > 0 ? (
        <div
          style={{
            borderStyle: " none",
            padding: ` ${paddingVertical}% ${paddingHorizontal}%`,
            fontSize: " 18px",
            letterSpacing: " 2px",
            borderRadius: " 25px",
            backgroundColor: " #74b239",
            color: " #fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={addToCartHandler}
        >
          Add to cart
        </div>
      ) : (
        <button disabled>Out of stock</button>
      )}
    </>
  );
}
