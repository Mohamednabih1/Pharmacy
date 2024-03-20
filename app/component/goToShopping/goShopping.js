import goShoppingImg from ".././/../assets/images/goShopping.jpg";
import Image from "next/image";
import "./goShopping.css";
export function GoShopping({ name }) {
  return (
    <>
      <div className="goShoppingContent">
        <div className="goShoppingImg">
          <Image
            alt="goShoppingImg"
            src={goShoppingImg}
            id="goShoppingImg"
          ></Image>
        </div>
        <div className="goShoppingBtnContent">
          <div className="goShoppingText">{name}</div>
          <div className="goShoppingBtn">
            <a href="/categories">Go To Store</a>
          </div>
        </div>
      </div>
    </>
  );
}
