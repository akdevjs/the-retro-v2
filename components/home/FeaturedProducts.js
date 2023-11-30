import { connect } from "react-redux";
import Link from "next/link";
import featuredProductsStyle from "../../styles/featuredproducts.module.scss";

function FeaturedProducts(props) {
  const { allShoes, setProduct } = props;

  const handleClick = (shoe) => {
    setProduct(shoe);
  };

  return (
    <div className={featuredProductsStyle.featured__products__main}>
      <div className={featuredProductsStyle.featured__products__child}>
        <div className={featuredProductsStyle.featured__productsmain__heading}>
          <div
            className={
              featuredProductsStyle.featured__productsmain__heading__child
            }
          >
            <img
              loading="lazy"
              className={featuredProductsStyle.main_heading_img}
              src="./imgs/featured_products_heading.png"
              alt=""
            />
            <img
              loading="lazy"
              className={featuredProductsStyle.main_heading_img_mob}
              src="./imgs/featured_products_heading_mob.png"
              alt=""
            />
          </div>
        </div>
        <div
          className={featuredProductsStyle.featured__products__main__products}
        >
          <div className={featuredProductsStyle.featured__products__card__row}>
            {allShoes.length !== 0 &&
              allShoes.map((shoe, index) => {
                if (shoe.featured) {
                  return (
                    <div
                      className={featuredProductsStyle.featured__products__card}
                      key={index}
                    >
                      <div
                        className={
                          featuredProductsStyle.featured__products__card__info
                        }
                      >
                        <div
                          className={
                            featuredProductsStyle.featured__products__card__info__img
                          }
                        >
                          <img loading="lazy" src={shoe.coverImg} alt="" />
                        </div>
                        <div
                          className={
                            featuredProductsStyle.featured__products__card__info__text
                          }
                        >
                          <h2
                            className={
                              featuredProductsStyle.featured__products__card__heading
                            }
                          >
                            {shoe.name}
                          </h2>
                          <p>{shoe.description}</p>

                          <div className={featuredProductsStyle.rating}>
                            ⭐⭐⭐⭐⭐<span>{shoe.averageRating}</span>
                          </div>
                          <span>${shoe.price}</span>
                          <div
                            className={featuredProductsStyle.buy__now__button}
                          >
                            <Link
                              href={`/product?id=${shoe.id}`}
                              style={{ textDecoration: "none" }}
                              onClick={() => handleClick(shoe)}
                              className={featuredProductsStyle.primary_button}
                            >
                              BUY NOW
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  allShoes: state.ShoesState,
});
const dispatchStateToProps = (dispatch) => ({});

export default connect(mapStateToProps, dispatchStateToProps)(FeaturedProducts);
