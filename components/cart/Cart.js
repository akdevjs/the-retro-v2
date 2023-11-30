import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { reduceQtyAPI, removeFromCartAPI, addToCartAPI } from "../../actions";

import Styles from "../../styles/cart.module.scss";
function Cart({
  removeFromCart,
  cartItems,
  reduceQtyFromCart,
  addToCart,
  user,
}) {
  const [renderableCart, setRenderableCart] = useState(cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  // Funtions
  const getTotalPrice = () => {
    let caltotalPrice = 0;
    cartItems.forEach((item) => {
      if (user) {
        if (item.hotDeal.status) {
          const price = (
            item.price -
            item.price * item.hotDeal.discount
          ).toFixed(2);
          caltotalPrice += price * item.qty;
        } else {
          caltotalPrice += item.price * item.qty;
        }
      } else {
        caltotalPrice += item.price * item.qty;
      }
    });
    setTotalPrice(caltotalPrice);
  };

  // Event Handlers
  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };
  const handleReduceQty = (product) => {
    if (product.qty > 1) {
      reduceQtyFromCart(product);
    }
  };
  const handleIncreaseQty = (product) => {
    addToCart(product);
  };

  // useEffect
  useEffect(() => {
    getTotalPrice();
    setRenderableCart(cartItems.sort((a, b) => a.index - b.index));
  }, [cartItems, user]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={Styles.cart_main}>
      <div className={Styles.cart_main_child}>
        <div className={Styles.cart_main_child_heading}>
          <img
            className={Styles.main_heading_img}
            loading="lazy"
            src="./imgs/your_cart_heading.png"
            alt=""
          />
          <img
            className={Styles.main_heading_img_mob}
            loading="lazy"
            src="./imgs/your_cart_heading_mob.png"
            alt=""
          />
        </div>

        <div className={Styles.cart_main_child_cart}>
          <div className={`${Styles.cart_item} ${Styles.cart_items_heading}`}>
            <div
              className={`${Styles.cart_product_name_head} ${Styles.cart_item_detail}`}
            >
              <h3>Name</h3>
            </div>
            <div
              className={`${Styles.cart_product_color} ${Styles.cart_item_detail}`}
            >
              <h3>Color</h3>
            </div>
            <div
              className={`${Styles.cart_product_size} ${Styles.cart_item_detail}`}
            >
              <h3>Size</h3>
            </div>

            <div
              className={`${Styles.cart_product_qty} ${Styles.cart_item_detail}`}
            >
              <h3>Qty</h3>
            </div>
            <h3
              className={`${Styles.cart_product_price} ${Styles.cart_item_detail}`}
            >
              Price
            </h3>

            <div className={Styles.cart_close}></div>
          </div>
          {renderableCart.length !== 0 ? (
            renderableCart.map((product, index) => (
              <div className={Styles.cart_item} key={index}>
                <div
                  className={`${Styles.cart_product_img} ${Styles.cart_item_detail} ${Styles.cart_item_sap}`}
                >
                  <img loading="lazy" src={product.img} alt="" />
                </div>
                <div
                  className={`${Styles.cart_product_name} ${Styles.cart_item_detail} ${Styles.cart_item_sap}`}
                >
                  <p>{product.name}</p>
                </div>
                <div
                  className={`${Styles.cart_product_color} ${Styles.cart_item_detail} ${Styles.cart_item_sap}`}
                >
                  <span className={Styles.cart_item_title}>Color: </span>{" "}
                  <p>{product.color}</p>
                </div>
                <div
                  className={`${Styles.cart_product_size} ${Styles.cart_item_detail} ${Styles.cart_item_sap}`}
                >
                  <span className={Styles.cart_item_title}>Size: </span>
                  <p>{product.size}</p>
                </div>

                <div
                  className={`${Styles.cart_product_qty} ${Styles.cart_item_detail} ${Styles.cart_item_sap}`}
                >
                  <button onClick={() => handleReduceQty(product)}>-</button>
                  <p>{product.qty}</p>
                  <button onClick={() => handleIncreaseQty(product)}>+</button>
                </div>
                <p
                  className={`${Styles.cart_product_price} ${Styles.cart_item_detail} ${Styles.cart_item_sap}`}
                >
                  <span className={Styles.cart_item_title}>Price: </span>
                  <div className={Styles.cart_item_price}>
                    <span
                      style={{
                        color:
                          product.hotDeal.status && user
                            ? "lightgray"
                            : "white",
                        textDecoration:
                          product.hotDeal.status && user
                            ? "line-through"
                            : "none",
                        fontSize:
                          product.hotDeal.status && user ? "1.2rem" : "1.5rem",
                      }}
                    >
                      ${(product.price * product.qty).toFixed(2)}
                    </span>

                    <span
                      className={Styles.item_discounted_price}
                      style={{
                        display:
                          product.hotDeal.status && user ? "flex" : "none",
                      }}
                    >
                      {product.hotDeal.status && user
                        ? `$${(
                            (product.price -
                              product.hotDeal.discount * product.price) *
                            product.qty
                          ).toFixed(2)}`
                        : ""}
                    </span>
                  </div>
                </p>

                <div className={Styles.cart_close}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    onClick={() => handleRemoveFromCart({ ...product, index })}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            ))
          ) : (
            <h3 className={Styles.cart__empty__title}>
              Cart <span>Empty</span>
            </h3>
          )}
          <div className={Styles.cart_total_bill}>
            <div className={Styles.total_bill}>
              <h3>
                Sub Total : <span>${totalPrice.toFixed(2)}</span>
              </h3>

              <h3>
                Shipping : <span>{cartItems.length === 0 ? "$0" : "$20"}</span>
              </h3>

              <button
                disabled={cartItems.length === 0}
                className={Styles.primary_button}
              >
                <Link
                  href={cartItems.length === 0 ? "/" : "/checkout"}
                  className={Styles.primary_button}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    color: cartItems.length === 0 ? "#cccccc" : "white",
                    backgroundColor: cartItems.length === 0 ? "#666666" : "red",
                  }}
                >
                  Proceed to Checkout
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.CartState,
  user: state.userState,
});
const dispatchStateToProps = (dispatch) => ({
  removeFromCart: (payload) => dispatch(removeFromCartAPI(payload)),
  reduceQtyFromCart: (payload) => dispatch(reduceQtyAPI(payload)),
  addToCart: (payload) => dispatch(addToCartAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(Cart);
