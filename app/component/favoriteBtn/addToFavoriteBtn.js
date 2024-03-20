"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "@/redux/slices/favoriteSlice";
export default function AddToFavorite({
  product,
  paddingVertical,
  paddingHorizontal,
}) {
  const dispatch = useDispatch();

  const { favoriteItems } = useSelector((state) => state.favorite);

  const addToCartHandler = () => {
    if (favoriteItems.length == 0) {
      dispatch(addToFavorite({ product }));
    } else {
      const existItem = favoriteItems.find((x) => x.id === product.id);
      if (existItem) {
        dispatch(removeFromFavorite(product.id));
      } else {
        dispatch(addToFavorite({ product }));
      }
    }
  };

  return (
    <>
      {/* <div>{favoriteItems.length}</div> */}
      <div>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderStyle: " none",
            padding: ` ${paddingVertical}% ${paddingHorizontal}%`,
            fontSize: " 18px",
            borderRadius: " 2px",
            backgroundColor: " #74b239",
            color: " #fff",
          }}
          onClick={addToCartHandler}
        >
          ♡
        </button>
      </div>
    </>
  );
}
