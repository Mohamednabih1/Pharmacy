"use client";
import "./categories.css";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import Image from "next/image";
import { useEffect, useState } from "react";

function Categories() {
  const [categoriesList, setCategoriesList] = useState([]);

  const changeToGrid = () => {
    let element = document.getElementsByClassName("results-section");
    element[0].classList.remove("results--list");
    element[0].classList.add("results--grid");
  };
  const changeToList = () => {
    let element = document.getElementsByClassName("results-section");
    element[0].classList.remove("results--grid");
    element[0].classList.add("results--list");
  };
  const getCategoriesList = async (url) => {
    try {
      const response = await fetch(url);
      let CategoriesListData = await response.json();
      if (CategoriesListData.length > 0) {
        setCategoriesList(CategoriesListData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getCategoriesList("http://localhost:3000/api/v1/category");
  }, []);
  return (
    <>
      <Header></Header>
      <div className="categoryContent">
        <section className="results-header">
          <div className="results-header__option">
            <div className="option__button selected" onClick={changeToGrid}>
              Grid
            </div>
            <div className="option__button" onClick={changeToList}>
              List
            </div>
          </div>
        </section>
        <main>
          <section className="results-section results--grid">
            {categoriesList.length > 0 &&
              categoriesList.map((category) => (
                <a key={category._id} href={`categories/${category._id}`}>
                  <div className="profile">
                    <div className="profile__image">
                      <Image
                        width={200}
                        height={200}
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/dog.png"
                        alt="Doggo"
                      />
                    </div>
                    <div className="profile__info">
                      <div className="h3">{category.name}</div>
                      <p className="profile__info__extra">
                        description for category should be added by Eslam
                      </p>
                    </div>
                    {/* <div className="profile__stats">
                    <p className="profile__stats__title">Type</p>
                    <h5 className="profile__stats__info">Puppy</h5>
                    </div>
                    <div className="profile__stats">
                    <p className="profile__stats__title">Size</p>
                    <h5>Medium</h5>
                    </div>
                    <div className="profile__stats">
                    <p className="profile__stats__title">Weight</p>
                    <h5 className="profile__stats__info">45 lbs</h5>
                  </div> */}
                  </div>
                </a>
              ))}
          </section>
        </main>
      </div>
      <div className="footer">
        {" "}
        <Footer></Footer>
      </div>
    </>
  );
}
export default Categories;
