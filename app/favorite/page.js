"use client";
import "../cart/cart.css";
import { removeFromFavorite } from "@/redux/slices/favoriteSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import { GoShopping } from "../component/goToShopping/goShopping";

export default function Favorite() {
  const dispatch = useDispatch();
  const { favoriteLoading, favoriteItems } = useSelector(
    (state) => state.favorite
  );

  const removeFromFavoriteWithId = (id) => {
    dispatch(removeFromFavorite(id));
  };

  return (
    <div>
      <Header></Header>
      {favoriteLoading ? (
        <div>Loading...</div>
      ) : favoriteItems.length === 0 ? (
        <GoShopping name="Favorite is Empty"></GoShopping>
      ) : (
        <div className="cartContainerFavorite">
          <div className="cartContainerContent">
            <table className="cartContainerContentTable">
              <thead className="cartTable">
                <tr>
                  <th className="cartTableLeft">Product</th>
                  {/* <th className="cartTableRight">Quantity</th> */}
                  <th className="cartTableRight">Price</th>
                  <th style={{ padding: "1.25rem" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {favoriteItems.map((item) => (
                  <tr key={item.id} className="cartTable ">
                    <td>
                      <Link
                        href={`/product/${item.id}`}
                        className="tableItemCenter"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                          style={{ padding: " 0.25rem" }}
                        ></Image>
                        {item.name}
                      </Link>
                    </td>
                    {/* <td className="p-5 text-right">
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          addToCartHandler(item, Number(e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td> */}
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-center">
                      <button
                        className="default-button"
                        onClick={() => removeFromFavoriteWithId(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
}
