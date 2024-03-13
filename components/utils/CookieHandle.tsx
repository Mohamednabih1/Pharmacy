"use client";

import { productsData } from "@/data/ProductsData";
import { useEffect } from "react";
import { setCookie, deleteCookie, getCookie, hasCookie } from "cookies-next";
import { cookieKeyCartProduct, cookieKeyFavProduct } from "@/data/cookiesKeys";

export const initialProductsElementCount = productsData.length;

export default function CookieHandle() {
  useEffect(() => {
    InitCookie(cookieKeyFavProduct);
    InitCookie(cookieKeyCartProduct);
  }, []);
  return <></>;
}

export function handleUserCookie(cookieKey: string): number {
  if (hasCookie(cookieKey) === false) {
    // console.log("no");
    return 0;
  }

  const cookieStr = getCookie(cookieKey);
  if (cookieStr === undefined || cookieStr === "") {
    // console.log("ss");
    return 0;
  }

  const cookieArr = JSON.parse("[" + cookieStr + "]")[0];
  // console.log(`start up: ${cookieArr}`);

  if (cookieArr.length != initialProductsElementCount) {
    // console.log(`cookie: ${cookieArr.length}, data: ${initialProductsElementCount}`);
    return 0;
  }

  var countF: number = 0;

  // Set the state to the new array
  Array.from({ length: initialProductsElementCount }, (_, i) => {
    if (cookieArr[i][1]) countF += 1;
  });

  return countF;
}

export function InitCookie(cookieKey: string) {
  const tempCookie = Array.from(
    { length: initialProductsElementCount },
    (_, i) => [productsData[i].itemId, false]
  );

  function handleCookieDeleteAndCreate() {
    console.log(`Deleting and Creating cookie with key: ${cookieKey}`);
    console.log(tempCookie);

    deleteCookie(cookieKey);
    setCookie(cookieKey, tempCookie, { expires: new Date("2040-01-25") });
  }

  if (hasCookie(cookieKey) === false) {
    handleCookieDeleteAndCreate();
    return;
  }

  const cookieStr = getCookie(cookieKey);
  if (cookieStr === undefined || cookieStr === "") {
    handleCookieDeleteAndCreate();
    return;
  }

  //   console.log("====================");
  //   console.log(cookieStr);
  const cookieArr = JSON.parse("[" + cookieStr + "]")[0];
  //   console.log(cookieArr);

  if (cookieArr.length != initialProductsElementCount) {
    // console.log(`cookie: ${cookieArr.length}, data: ${initialProductsElementCount}`);
    handleCookieDeleteAndCreate();
    return;
  }
}

export function GetUserCookie(cookieKey: string) {
  const tempCookie = Array.from(
    { length: initialProductsElementCount },
    (_, i) => [productsData[i].itemId, false]
  );

  function handleCookieDeleteAndCreate() {
    console.log(`Deleting and Creating cookie with key: ${cookieKey}`);
    console.log(tempCookie);

    deleteCookie(cookieKey);
    setCookie(cookieKey, tempCookie, { expires: new Date("2040-01-25") });
  }

  if (hasCookie(cookieKey) === false) {
    handleCookieDeleteAndCreate();
    return tempCookie;
  }

  const cookieStr = getCookie(cookieKey);
  if (cookieStr === undefined || cookieStr === "") {
    handleCookieDeleteAndCreate();
    return tempCookie;
  }

  //   console.log("====================");
  //   console.log(cookieStr);
  const cookieArr = JSON.parse("[" + cookieStr + "]")[0];
  //   console.log(cookieArr);

  if (cookieArr.length != initialProductsElementCount) {
    // console.log(`cookie: ${cookieArr.length}, data: ${initialProductsElementCount}`);
    handleCookieDeleteAndCreate();
    return tempCookie;
  }

  return cookieArr;
}
