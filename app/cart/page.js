"use client";
// import "./cart.css";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import { GoShopping } from "../component/goToShopping/goShopping";
import styled from "styled-components";

export default function CartPage() {
  const dispatch = useDispatch();
  const { loading, cartItems, itemsPrice } = useSelector((state) => state.cart);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const addToCartHandler = async (product, qty) => {
    if (qty == 0) {
      return;
    }
    dispatch(addToCart({ ...product, qty }));
  };

  return (
    <Wrapper>
      <Header></Header>
      {loading ? (
        <div>Loading...</div>
      ) : cartItems.length === 0 ? (
        <GoShopping name={"Cart is Empty"}></GoShopping>
      ) : (
        <div className="cartContainer">
          <div className="cartContainerContent">
            <table className="cartContainerContentTable">
              <thead className="cartTable">
                <tr>
                  <th className="cartTableLeft">Product</th>
                  <th className="cartTableRight">Quantity</th>
                  <th className="cartTableRight">Price</th>
                  <th style={{ padding: "1.25rem" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
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
                    <td className="p-5 text-right">
                      <div className="purchaseNumInput">
                        <input
                          type="text"
                          pattern="[0-9]*"
                          onChange={(e) =>
                            addToCartHandler(item, Number(e.target.value))
                          }
                          value={item.qty}
                        />
                      </div>
                    </td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-center">
                      <button
                        className="default-button"
                        onClick={() => removeFromCartHandler(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rightCartContainer">
            <div className="rightCartContainerText">
              Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}) : $
              {itemsPrice}
            </div>
            <div className="rightCartContainerBtn">
              <a href="/cart">Proceed to checkout</a>
            </div>
          </div>
        </div>
      )}
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .cartContainer {
    display: grid;
    margin: 5% 10%;
  }

  .cartContainerContent {
    overflow-x: auto;
  }

  .cartContainerContentTable {
    min-width: 100%;
  }

  .cartTable {
    border-bottom-width: 1px;
  }
  .cartTableLeft {
    padding: 1.25rem;
    text-align: left;
  }
  .cartTableRight {
    padding: 1.25rem;
    text-align: left;
  }

  .tableItemCenter {
    display: flex;
    align-items: center;
  }

  .rightCartContainer {
    display: block;
  }
  .rightCartContainerText {
    display: flex;
    justify-content: center;
    /* align-items: end; */
    margin-top: 6%;
    margin-bottom: 8%;
    font-size: 1.25rem;
  }
  .rightCartContainerBtn {
    height: auto;
    display: flex;
    justify-content: center;
    font-size: 18px;
    letter-spacing: 2px;
    border-radius: 25px;
    background-color: #74b239;
    color: #fff;
    padding: 1rem 0.5rem;
  }
  @media (min-width: 768px) {
    .cartContainer {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1.25rem;
    }
    .cartContainerFavorite {
      margin: 5% 10%;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .cartContainerContent {
      grid-column: span 3 / span 3;
    }
  }

  .purchaseNumInput input {
    border: 1.5px solid #ddd;
    border-radius: 25px;
    text-align: center;
    padding: 0.45rem 0rem;
    width: 20%;
    outline: 0;
  }
`;
