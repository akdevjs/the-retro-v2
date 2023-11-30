import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { setProductAPI, logOutAPI, logInAPI } from "../../actions";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import hotDeatsStyle from "../../styles/hotdeals.module.scss";
function HotDeals({ allShoes, setProduct, logIn, user }) {
  // states
  const [shoes, setShoes] = useState([]);

  // funtions
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

  // handlers
  const handleClick = (shoe) => {
    setProduct(shoe);
  };
  const handleLogIn = () => {
    signIn();
  };
  // use Effects
  useEffect(() => {
    let arr = [];
    allShoes.forEach((shoe) => {
      if (shoe.hotDeal.status) arr.push(shoe);
    });
    setShoes(arr);

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className={hotDeatsStyle.hot_deals__products__main}>
        <div className={hotDeatsStyle.hot_deals__products__child}>
          <div className={hotDeatsStyle.hot_deals__productsmain__heading}>
            <div
              className={hotDeatsStyle.hot_deals__productsmain__heading__child}
            >
              <img
                loading="lazy"
                className={hotDeatsStyle.main_heading_img}
                src="./imgs/hot_deal_heading.png"
                alt=""
              />
              <img
                loading="lazy"
                className={hotDeatsStyle.main_heading_img_mob}
                src="./imgs/hot_deal_heading_mob.png"
                alt=""
              />
            </div>
          </div>
          <div className={hotDeatsStyle.hot_deals__products__main__products}>
            <div
              className={hotDeatsStyle.hot_deals__lock__parent}
              style={{ display: user ? "none" : "flex" }}
            >
              <div className={hotDeatsStyle.hot__deals__lock__message}>
                <h2
                  className={hotDeatsStyle.hot__deals__lock__message__heading}
                >
                  Only For Members
                </h2>
                <button
                  className={hotDeatsStyle.primary_button}
                  onClick={handleLogIn}
                >
                  SIGN IN
                </button>
              </div>
            </div>
            {shoes.length !== 0 &&
              shoes.map((shoe, index) => (
                <div
                  className={hotDeatsStyle.hot_deals__products__card}
                  key={index}
                >
                  <div
                    className={hotDeatsStyle.hot_deals__products__card__info}
                  >
                    <div
                      className={
                        hotDeatsStyle.hot_deals__products__card__info__img
                      }
                    >
                      <img loading="lazy" src={shoe.coverImg} alt="" />
                    </div>
                    <div
                      className={
                        hotDeatsStyle.hot_deals__products__card__info__text
                      }
                    >
                      <div
                        className={
                          hotDeatsStyle.hot_deals__products__card__heading
                        }
                      >
                        {shoe.name}
                      </div>
                      <p>{shoe.description}</p>
                      <div className={hotDeatsStyle.rating}>
                        ⭐⭐⭐⭐⭐<span>{shoe.averageRating}</span>
                      </div>

                      <div className={hotDeatsStyle.hot__deals__price}>
                        <span>
                          $
                          {(
                            shoe.price -
                            shoe.price * shoe.hotDeal.discount
                          ).toFixed(2)}
                        </span>
                        <span>${shoe.price}</span>
                      </div>
                      <Link
                        onClick={() =>
                          handleClick({
                            ...shoe,
                            price:
                              shoe.price - shoe.price * shoe.hotDeal.discount,
                          })
                        }
                        href="/product"
                      >
                        <button className={hotDeatsStyle.primary_button}>
                          BUY NOW
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  allShoes: state.ShoesState,
  user: state.userState,
});
const dispatchStateToProps = (dispatch) => ({
  setProduct: (payload) => dispatch(setProductAPI(payload)),
  logIn: (payload) => dispatch(logInAPI(payload)),
  logOut: () => dispatch(logOutAPI()),
});

export default connect(mapStateToProps, dispatchStateToProps)(HotDeals);
