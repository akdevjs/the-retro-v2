import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { connect } from "react-redux";
import { logOutAPI, logInAPI } from "../../actions";
import { signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, provider } from "../../firebase";

import headerStyle from "../../styles/header.module.scss";

function Header({ cart, allShoes, user, logIn, logOut }) {
  // states
  const [items, setItems] = useState(0);
  // to show the cart below
  const [show, setShow] = useState(0);
  const [dis, setDis] = useState("none");
  const [search, setSearch] = useState("");
  const [searchshoe, setSearchShoe] = useState([]);
  const router = useRouter();
  // Event Handlers

  const handleShow = (keyword) => {
    if (keyword !== "") {
      setDis("flex");
    } else {
      setDis("none");
    }
  };
  const handleBlur = () => {
    setDis("none");
  };
  const handleClick = () => {
    setDis("none");
  };

  //functions
  // have to find the alternate for this cuz window object doesn't work with nextjs
  // const settingElementScrollShow = (scrollValue) => {
  //   if (scrollValue > 55) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  // };
  const signIn = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        logIn(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error" + errorCode + "\n" + errorMessage);
      });
  };
  const handleLogInLogOut = () => {
    if (user === null) {
      signIn();
    } else {
      logOut();
      signOut(auth)
        .then(() => {
          console.log("Sign-out successful.");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //  use Effects
  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.qty;
    });
    setItems(sum);
  }, [cart]);
  useEffect(() => {
    setSearch("");
    setDis("none");
  }, [router.pathname]);

  useEffect(() => {
    let arr = [];
    allShoes.forEach((shoe) => {
      if (shoe.name.toLowerCase().includes(search.toLowerCase())) {
        arr.push({
          ...shoe,
          index: shoe.name.toLowerCase().indexOf(search.toLowerCase()),
        });
      }
    });
    arr = arr.sort((a, b) => a.index - b.index);
    setSearchShoe(arr);
  }, [search]);
  return (
    <>
      <div className={headerStyle.header__main}>
        <div className={headerStyle.header_child_main}>
          <Link href="/">
            <div className={headerStyle.header__main__logo}>
              <img src="imgs/top_nav_logo.png" alt="" />
            </div>
          </Link>

          <div className={headerStyle.header__main__search}>
            {searchshoe.length === 0 ? (
              <div
                className={headerStyle.search_components_no}
                style={{ display: dis }}
              >
                <h2>No Result Found</h2>
              </div>
            ) : (
              <div
                className={headerStyle.search_components_main}
                style={{ display: dis }}
              >
                {searchshoe.map(
                  (shoe, index) =>
                    shoe.name.toLowerCase().includes(search.toLowerCase()) &&
                    search.length !== 0 && (
                      <Link
                        style={{ color: "white", textDecoration: "none" }}
                        href={`/product?id=${shoe.id}`}
                        className={headerStyle.search_component_child}
                        onClick={(e) => {
                          handleClick(shoe);
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                        }}
                        key={index}
                      >
                        <div className={headerStyle.search_component_child_img}>
                          <img src={shoe.coverImg} alt="" />
                        </div>
                        <div
                          className={headerStyle.search_component_child_info}
                        >
                          <h2>{shoe.name}</h2>
                          <h3>{shoe.brand}</h3>
                          <span>⭐⭐⭐⭐⭐ {shoe.averageRating}</span>
                          <p>${shoe.price}</p>
                        </div>
                      </Link>
                    )
                )}
              </div>
            )}
            <input
              type="text"
              name=""
              id=""
              onBlur={(e) => handleBlur(e)}
              onFocus={(e) => handleShow(e.target.value)}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                handleShow(e.target.value);
              }}
              placeholder="Search"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={headerStyle.svg}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <div className={headerStyle.header__main_User}>
            {user ? (
              <>
                <img src={user.photoURL} alt="" />
              </>
            ) : (
              <img
                src="https://web.gs.emory.edu/vulnerability/_includes/images/no-image.jpg"
                alt=""
              />
            )}

            <div className={headerStyle.header__main_User__text}>
              <div>
                Welcome,
                <b>{user ? user.displayName.split(" ")[0] : "Guest"}</b>
              </div>
              <button
                className={headerStyle.primary_button}
                onClick={handleLogInLogOut}
              >
                {user ? (
                  <>Logout</>
                ) : (
                  <>
                    Login with
                    <img src="./imgs/google-icon.svg" alt="" />
                    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;oogle
                  </>
                )}
              </button>
            </div>
            <Link
              style={{
                textDecoration: "none",
                margin: "0 2rem",
                fontWeight: "300",
              }}
              className={headerStyle.primary_button}
              href="/all-products"
            >
              All Products
            </Link>
          </div>
          <div className={headerStyle.cart__dummy__icon}>
            <Link
              href="/cart"
              className={`${headerStyle.header__main__buttons} ${
                show && headerStyle.header__main__buttons__scroll
              } `}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>{items}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={headerStyle.header__buttons__mobile}>
        <Link
          href=""
          style={{ color: "white" }}
          onClick={handleLogInLogOut}
          className={headerStyle.Link_nav_footer}
        >
          <div className={headerStyle.logo}>
            {user ? (
              <img src={user.photoURL} alt="" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <span>{user ? "Logout" : "Login"}</span>
        </Link>
        <Link
          style={{ color: "white" }}
          href="/"
          className={headerStyle.Link_nav_footer}
        >
          <div className={headerStyle.logo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </div>
          <span>Home</span>
        </Link>
        <Link
          style={{ color: "white" }}
          href="/all-products?brand=All"
          className={headerStyle.Link_nav_footer}
        >
          <div className={headerStyle.logo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9.97.97a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72v3.44h-1.5V3.31L8.03 5.03a.75.75 0 01-1.06-1.06l3-3zM9.75 6.75v6a.75.75 0 001.5 0v-6h3a3 3 0 013 3v7.5a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3h3z" />
              <path d="M7.151 21.75a2.999 2.999 0 002.599 1.5h7.5a3 3 0 003-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 01-4.5 4.5H7.151z" />
            </svg>
          </div>
          <span>All Products</span>
        </Link>

        <Link
          style={{ color: "white" }}
          href="/cart"
          className={headerStyle.Link_nav_footer}
        >
          <div className={headerStyle.logo}>
            <div
              style={{ display: items > 0 ? "flex" : "none" }}
              className={headerStyle.number_of_items}
            >
              {items}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span>Your Cart</span>
        </Link>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  cart: state.CartState,
  allShoes: state.ShoesState,
  toggleModal: state.toggleModalState,
  user: state.userState,
});
const dispatchStateToProps = (dispatch) => ({
  logIn: (payload) => dispatch(logInAPI(payload)),
  logOut: () => dispatch(logOutAPI()),
});

export default connect(mapStateToProps, dispatchStateToProps)(Header);
