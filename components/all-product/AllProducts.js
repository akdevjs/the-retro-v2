import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { setProductAPI, setBrandAPI } from "../../actions";
import Styles from "../../styles/allproducts.module.scss";

function AllProducts({ allShoes, setProduct }) {
  // params
  const router = useRouter();
  const { brand } = router.query;

  //some variables
  const filterObj = {
    colors: [
      "red",
      "black",
      "navy",
      "blue",
      "lightgray",
      "brown",
      "white",
      "lightgreen",
      "yellow",
      "lightskyblue",
      "greenyellow",
      "orange",
      "All",
    ],
    sizes: [4, 5, 6, 7, 8, "All"],
    brands: ["Adidas", "Nike", "Under Armour", "Puma", "Skechers", "All"],
  };
  const initialFilter = {
    price: { max: "", min: "" },
    size: "All",
    color: "All",
    brand: brand ? brand : "All",
  };
  //states
  const [shoes, setShoes] = useState(allShoes);
  const [filter, setFilter] = useState(initialFilter);

  // click handlers
  const handleClick = (shoe) => {
    setProduct(shoe);
  };
  const handleMinPrice = (e) => {
    setFilter({ ...filter, price: { ...filter.price, min: e.target.value } });
  };
  const handleMaxPrice = (e) => {
    setFilter({ ...filter, price: { ...filter.price, max: e.target.value } });
  };
  const handleSize = (size) => {
    setFilter({ ...filter, size });
  };
  const handleColorClick = (color) => {
    setFilter({ ...filter, color });
  };
  const handleBrandClick = (brand) => {
    setFilter({ ...filter, brand });
  };
  const handleFilterCLick = () => {
    ApplyFilter();
  };

  // functions
  const ApplyFilter = () => {
    let arr = [];
    allShoes.forEach((shoe) => {
      //checking for price
      if (
        filter.price.max === "" ||
        (shoe.price >= filter.price.min && shoe.price <= filter.price.max)
      ) {
        // Checking for brand
        if (filter.brand === "All" || filter.brand === shoe.brand) {
          // Checking for size
          if (filter.size === "All" || shoe.size.includes(filter.size)) {
            // Checking for Colors
            if (filter.color === "All" || shoe.colors.includes(filter.color)) {
              arr.push(shoe);
            }
          }
        }
      }
    });
    setShoes(arr);
  };

  //use effect
  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  // to apply pre sended filters
  useEffect(() => {
    if (brand) {
      setFilter({
        price: { max: "", min: "" },
        size: "All",
        color: "All",
        brand: brand ? brand : "All",
      });
    }
  }, [brand]);

  // to apply filter on changing rather then using a button
  useEffect(() => {
    window.scrollTo(0, 0);
    ApplyFilter();
  }, [filter]);

  return (
    <div className={Styles.all_products_main}>
      <div className={Styles.all_products_main_child}>
        <div className={Styles.all_products_filter}>
          <div className={Styles.all_products_filter_child}>
            <div className={Styles.all_products_filter_heading}>
              <h2>Filters</h2>
              <div className={Styles.all_products_filter_heading_image}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`${Styles.all_products_filter_price} ${Styles.all_products_filter_section}`}
            >
              <h3>Price</h3>
              <div className={Styles.all_products_filter_price_range}>
                <input
                  type="number"
                  placeholder="Min"
                  value={filter.price.min}
                  onChange={(e) => handleMinPrice(e)}
                  name=""
                  id=""
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filter.price.max}
                  onChange={(e) => handleMaxPrice(e)}
                  name=""
                  id=""
                />
              </div>
            </div>
            <div
              className={`${Styles.all_products_filter_sizes} ${Styles.all_products_filter_section}`}
            >
              <h3>Size</h3>
              <div className={Styles.all_products_filter_size_range}>
                {filterObj.sizes.map((size, index) => (
                  <div
                    className={`${Styles.dis_con} ${Styles.size}`}
                    key={index}
                    onClick={() => handleSize(size)}
                    style={{
                      textDecoration:
                        size === filter.size ? "underline" : "none",
                    }}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`${Styles.all_products_filter_colors} ${Styles.all_products_filter_section}`}
            >
              <h3>Colors</h3>
              <div className={Styles.all_products_filter_color_range}>
                {filterObj.colors.map((color, index) => (
                  <div
                    className={`${Styles.dis_con} ${Styles.color}`}
                    key={index}
                    onClick={() => handleColorClick(color)}
                    style={{
                      background: color === "All" ? "none" : color,
                      border:
                        filter.color === color
                          ? "2px solid gray"
                          : "1px solid gray",
                    }}
                  >
                    {color === "All" && "All"}
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`${Styles.all_products_filter_brands} ${Styles.all_products_filter_section}`}
            >
              <h3>Brands</h3>
              <div className={Styles.all_products_filter_brand_range}>
                {filterObj.brands.map((brand, index) => (
                  <div
                    className={Styles.brand}
                    key={index}
                    style={{
                      textDecoration:
                        brand === filter.brand ? "underline" : "none",
                    }}
                    onClick={() => handleBrandClick(brand)}
                  >
                    <p>{brand}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.all_products_grid}>
          {shoes.length !== 0 ? (
            shoes.map((shoe, index) => (
              <div key={index}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  href={`/product?id=${shoe.id}`}
                  onClick={() => handleClick(shoe)}
                  className={Styles.all_products_column}
                >
                  <div className={Styles.all_products_product_main} key={index}>
                    <img src={shoe.coverImg} alt="" />
                    <div className={Styles.all_products_product_info}>
                      <h2>{shoe.name}</h2>

                      <h4>{shoe.brand}</h4>
                      <h4>⭐⭐⭐⭐⭐ {shoe.averageRating}</h4>
                      <span>${shoe.price.toString()}</span>
                      <span className={Styles.all_products_product_shipping}>
                        <h4>shipping</h4>
                        <span>${Math.floor(shoe.price * 0.1)}</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <h3>Sorry, no shoe found</h3>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  product: state.ProductState,
  allShoes: state.ShoesState,
});
const dispatchStateToProps = (dispatch) => ({
  setProduct: (payload) => dispatch(setProductAPI(payload)),
  setBrand: (payload) => dispatch(setBrandAPI(payload)),
});

export default connect(mapStateToProps, dispatchStateToProps)(AllProducts);
