import "./productGrid.css";
import Link from "next/link";
import Image from "next/image";
import productImage from "../assets/pharmacy/product.jpg";
import AddToCart from "./addToCartBtn";

export function ProductGrid(items) {
  return (
    <>
      <div className="itemContainer">
        {items.data.length > 0 &&
          items.data.map((item) => (
            <div key={item._id} className="item">
              <Link href={`./product/${item._id}`}>
                <Image
                  id="image"
                  className="itemImage"
                  src={productImage}
                  alt={`product image ${item.name}`}
                ></Image>
                <div className="itemDec">{item.name}</div>
                <div className="item-price">{item.price} le</div>
              </Link>
              <AddToCart
                useQuantity={false}
                increasePerClick={true}
                className="fas fa-shopping-cart"
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
            </div>
          ))}
      </div>
    </>
  );
}
