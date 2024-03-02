import { useEffect, useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { emptyCartAPI } from "../../actions";
import Styles from "../../styles/checkout.module.scss";
const countries = require("./countries.json");
function Checkout({ user, cartItems, emptyCart }) {
  const [country, setCountry] = useState("");
  const [countryName, setCountryName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [states, setStates] = useState("");
  const [mm, setMm] = useState("");
  const [yy, setYy] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [subtotalPrice, setSubtotalPrice] = useState(0);
  const [orderconfrim, setOrderconfrim] = useState(false);
  const [orderConfrimDetail, setOrderConfrimDetail] = useState({});

  const [discount, setDiscount] = useState(0);
  const years = [
    2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035,
    2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047,
    2048, 2049, 2050,
  ];
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  useEffect(() => {
    console.log(cartItems);
    if (user) {
      setFirstName(user.displayName.split(" ")[0]);
      setLastName(user.displayName.split(" ")[1]);
    } else {
      setFirstName("");
      setLastName("");
    }
    getTotalPrice();
  }, [cartItems, user]);

  // Funtions
  const getTotalPrice = () => {
    let calsubtotalPrice = 0;
    let caldiscount = 0;
    cartItems.forEach((item) => {
      calsubtotalPrice += item.price * item.qty;
    });
    setSubtotalPrice(calsubtotalPrice);
    if (user) {
      cartItems.forEach((item) => {
        if (item.hotDeal.status) {
          const price = item.price * item.hotDeal.discount;
          caldiscount += price * item.qty;
        }
      });
      setDiscount(caldiscount);
    } else {
      setDiscount(0);
    }
  };

  //   handlers
  const handlecountry = (e) => {
    if (e.target.value !== "") {
      setCountry(e.target.value);
      setStates(JSON.parse(e.target.value).states);
      setCountryName(JSON.parse(e.target.value).country_name);
    }
  };
  const handlestate = (e) => {
    setState(e.target.value);
  };
  const handlephone = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 14);
    setPhone(value);
  };
  const handlecardnumber = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 16);
    setCardnumber(value);
  };
  const handlecardcvc = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 3);

    setCvc(value);
  };
  const handlepostalcode = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.slice(0, 5);
    setPostalCode(value);
  };
  const handlecardexmonth = (e) => {
    setMm(e.target.value);
  };
  const handlecardexyear = (e) => {
    setYy(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setOrderconfrim(true);
    emptyCart("done");
    setOrderConfrimDetail({
      First_Name: firstName,
      Last_Name: lastName,
      Phone: phone,
      Adress: `${address}, ${city}, ${state}, ${countryName}, ${postalCode}`,
      price: subtotalPrice - discount + 20,
    });
  };

  return (
    <>
      <div
        className={`${Styles.order__confrim__news} ${Styles.checkout__page__main}`}
        style={{ display: orderconfrim ? "flex" : "none" }}
      >
        <div className={Styles.order__confrim__news_child}>
          <div className={Styles.top_message}>
            <h1>Your order has been recieved</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <h2>Thank you for your purchase</h2>
          </div>
          <div className={Styles.order_info}>
            <div className={Styles.order_info_row}>
              <div className={Styles.order_id}>
                <h3>Order ID</h3>
                <span>#102234556</span>
              </div>
              <div className={Styles.name}>
                <h3>Name</h3>
                <span>
                  {orderConfrimDetail.First_Name +
                    " " +
                    orderConfrimDetail.Last_Name}
                </span>
              </div>
            </div>
            <div className={Styles.order_info_row}>
              <div className={Styles.Phone}>
                <h3>Phone</h3>
                <span>{orderConfrimDetail.Phone}</span>
              </div>

              <div className={Styles.adress}>
                <h3>Address</h3>

                <span>{orderconfrim && orderConfrimDetail.Adress}</span>
              </div>
            </div>
          </div>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            href="/all-products"
          >
            <button className={Styles.primary_button}>Continue shopping</button>
          </Link>
        </div>
      </div>
      <form
        onSubmit={handlesubmit}
        style={{ display: !orderconfrim ? "block" : "none" }}
        className={Styles.checkout__page__main}
      >
        {cartItems.length !== 0 ? (
          <div className={Styles.checkout__page__child}>
            <div className={Styles.checkout__page__bill}>
              <h2>Your Order</h2>
              <div className={Styles.checkout__page__ordered__items}>
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className={Styles.checkout__page__ordered__item}
                  >
                    <div className={Styles.item__img}>
                      <img loading="lazy" src={item.img} alt="" />
                    </div>
                    <div className={Styles.item__info}>
                      <h3>{item.name}</h3>
                      <div className={Styles.item__size__color}>
                        <span>
                          <b>Size: </b> {item.size}
                        </span>
                        <span>
                          <b>Color: </b>
                          {item.color}
                        </span>
                      </div>
                      <div className={Styles.item_price}>
                        <span>${item.price}</span>
                        <span>x {item.qty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={Styles.total_bill_calculations}>
                <div className={Styles.total_bill_amount_titles}>
                  <b>Subtotal</b>
                  <b>Shipping</b>
                  <b>Discount</b>
                </div>
                <div className={Styles.total_bill_amount_values}>
                  <span>${subtotalPrice.toFixed(2)}</span>
                  <span>$20</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              </div>
              <div className={Styles.total_bill}>
                <h2>Total</h2>
                <h2>${(subtotalPrice - discount + 20).toFixed(2)}</h2>
              </div>
              <button
                htmlFor="submit_button"
                type={"submit"}
                className={Styles.primary_button}
                style={{ width: "100%" }}
              >
                Confirm Order
              </button>
            </div>
            <div className={Styles.costomer__details__form}>
              <div className={Styles.form_slots}>
                <h1>Shipping address</h1>
                <div className={`${Styles.costomer__name} `}>
                  <div
                    className={`${Styles.costomer__first__name} ${Styles.common__input}`}
                  >
                    <label htmlFor="first_name">
                      First Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      required
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      type="text"
                      name="first_name"
                      id="first_name"
                    />
                  </div>
                  <div
                    className={`${Styles.costomer__last__name} ${Styles.common__input}`}
                  >
                    <label htmlFor="last_name">
                      Last Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      name="last_name"
                      id="last_name"
                    />
                  </div>
                  <div
                    className={`${Styles.costomer__phone} ${Styles.common__input}`}
                  >
                    <label htmlFor="phone">
                      Phone <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className={Styles.input}>
                      <input
                        required
                        value={phone}
                        onChange={(e) => handlephone(e)}
                        type="text"
                        name="phone"
                        id="last_name"
                      />
                    </div>
                  </div>
                </div>
                <div className={`${Styles.costomer__street_adress} `}>
                  <div
                    className={`${Styles.costomer_adress_street} ${Styles.common__input}`}
                  >
                    <label htmlFor="adress">
                      Address <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      required
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      type="text"
                      name="adress"
                      id="adress"
                    />
                  </div>
                  <div
                    className={`${Styles.costomer_adress_city} ${Styles.common__input}`}
                  >
                    <label htmlFor="city">
                      City <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      required
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      type="text"
                      name="city"
                      id="city"
                    />
                  </div>
                </div>
                <div className={`${Styles.costomer__country_adress}`}>
                  <div
                    className={`${Styles.costomer_adress_country} ${Styles.common__input}`}
                  >
                    <label htmlFor="countr">
                      Country <span style={{ color: "red" }}>*</span>
                    </label>
                    <select
                      required
                      name="country"
                      id="country"
                      value={country}
                      onChange={handlecountry}
                    >
                      <option value={""}>Select Country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={JSON.stringify(country)}>
                          {country.country_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div
                    className={`${Styles.costomer_adress_state} ${Styles.common__input}`}
                  >
                    <label htmlFor="state">
                      State <span style={{ color: "red" }}>*</span>
                    </label>
                    <select
                      required
                      name="state"
                      id="state"
                      value={state}
                      onChange={handlestate}
                    >
                      <option value={"init"}>Select State</option>
                      {states ? (
                        states.map((state, index) => (
                          <option key={index} value={state.state_name}>
                            {state.state_name}
                          </option>
                        ))
                      ) : (
                        <option>Select country</option>
                      )}
                    </select>
                  </div>
                  <div
                    className={`${Styles.costomer_adress_postal__code} ${Styles.common__input}`}
                  >
                    <label htmlFor="postal-code">
                      Postal Code <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      required
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      value={postalCode}
                      onChange={(e) => handlepostalcode(e)}
                    />
                  </div>
                </div>
              </div>
              <div className={`${Styles.costomer__card} ${Styles.form_slots}`}>
                <h1>Card Details</h1>
                <div className={`${Styles.card_info} `}>
                  <div
                    className={`${Styles.costomer__card_number} ${Styles.common__input}`}
                  >
                    <label htmlFor="card_number">
                      Card Number <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      required
                      value={cardnumber}
                      onChange={(e) => handlecardnumber(e)}
                      type="text"
                      name="card_number"
                      id="card_number"
                    />
                  </div>
                  <div
                    className={`${Styles.costomer__expire} ${Styles.common__input}`}
                  >
                    <label htmlFor="month">
                      Expiry Date <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className={Styles.date__mm__yyyy}>
                      {/* Months */}

                      <select
                        required
                        name="month"
                        className={Styles.input}
                        id="month"
                        value={mm}
                        onChange={handlecardexmonth}
                      >
                        <option value={""}>mm</option>
                        {months.map((month, index) => (
                          <option key={index} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                      <span>/</span>

                      {/* Years   */}

                      <select
                        required
                        name="year"
                        className={Styles.input}
                        id="year"
                        value={yy}
                        onChange={handlecardexyear}
                      >
                        <option value={""}>yyyy</option>
                        {years.map((year, index) => (
                          <option key={index} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div
                    className={`${Styles.costomer__CVC} ${Styles.common__input}`}
                  >
                    <label htmlFor="cvc">
                      CVC <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={cvc}
                      onChange={(e) => handlecardcvc(e)}
                      name="cvc"
                      id="cvc"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1 style={{ width: "100%", textAlign: "center", minHeight: "50vh" }}>
            Error 404 Page not found
          </h1>
        )}
      </form>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.userState,
  cartItems: state.CartState,
});
const dispatchStateToProps = (dispatch) => ({
  emptyCart: (payload) => dispatch(emptyCartAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(Checkout);
