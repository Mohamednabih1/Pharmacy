import "./productGrid.css";
import Link from "next/link";
import Image from "next/image";
import productImage from "../assets/pharmacy/product.jpg";

export function ProductGrid(items) {
  return (
    <>
      <div className="itemContainer">
        {items.data.length > 0 &&
          items.data.map((item) => (
            <Link
              className="item"
              key={item._id}
              href={`./product/${item._id}`}
            >
              <Image
                id="image"
                className="itemImage"
                src={productImage}
                alt={`product image ${item.name}`}
              ></Image>
              <div className="itemDec">{item.name}</div>
              <div className="itemDec">{item.description}</div>
              <div className="itemDec">{item.price}</div>
            </Link>
          ))}
      </div>
    </>
  );
}
