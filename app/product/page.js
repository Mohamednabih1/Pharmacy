"use client";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import { GoShopping } from "../component/goToShopping/goShopping";

export default function Product() {
  return (
    <>
      <Header></Header>
      <GoShopping></GoShopping>
      <Footer></Footer>
    </>
  );
}
