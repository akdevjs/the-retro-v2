import React from "react";
import { setBrandAPI } from "../../actions";
import { connect } from "react-redux";
import Link from "next/link";
import brandsStyle from "../../styles/brands.module.scss";
function Brands(props) {
  const handleClick = (brand) => {
    props.setBrand(brand);
  };
  return (
    <div className={brandsStyle.brands__main}>
      <div className={brandsStyle.brands__child}>
        <div className={brandsStyle.brand__card}>
          <div className={brandsStyle.brand__card__image}>
            <img src="./imgs/brand_sec_shoe_1.png" alt="" />
          </div>
          <div className={brandsStyle.brand__card__text}>
            <h2>Nike </h2>
            <Link
              style={{ color: "white" }}
              href="/all-products?brand=Nike"
              onClick={() => handleClick("Nike")}
            >
              <div>
                <span>Shop Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className={brandsStyle.brand__card}>
          <div className={brandsStyle.brand__card__image}>
            <img src="./imgs/brand_sec_shoe_2.png" alt="" />
          </div>
          <div className={brandsStyle.brand__card__text}>
            <h2>Puma </h2>
            <Link
              style={{ color: "white" }}
              href="/all-products?brand=Puma"
              onClick={() => handleClick("Puma")}
            >
              <div>
                <span>Shop Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className={brandsStyle.brand__card}>
          <div className={brandsStyle.brand__card__image}>
            <img src="./imgs/brand_sec_shoe_3.png" alt="" />
          </div>
          <div className={brandsStyle.brand__card__text}>
            <h2>Addidas </h2>
            <Link
              style={{ color: "white" }}
              href="/all-products?brand=Adidas"
              onClick={() => handleClick("Adidas")}
            >
              <div>
                <span>Shop Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className={brandsStyle.brand__card}>
          <div className={brandsStyle.brand__card__image}>
            <img src="./imgs/brand_sec_shoe_4.png" alt="" />
          </div>
          <div className={brandsStyle.brand__card__text}>
            <h2>All </h2>
            <Link
              style={{ color: "white" }}
              href="/all-products?brand=All"
              onClick={() => handleClick("All")}
            >
              <div>
                <span>Shop Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});
const dispatchStateToProps = (dispatch) => ({
  setBrand: (payload) => dispatch(setBrandAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(Brands);
