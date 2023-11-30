import homeherosection from "../../styles/homeherosection.module.scss";
function HomeHeroSection() {
  return (
    <div className={homeherosection.home__hero__main}>
      <div className={homeherosection.home__hero__child__main}>
        <div className={homeherosection.home__hero__primary__heading}>
          <h1>
            The <br /> <span>Retro</span>
          </h1>
        </div>
        <div className={homeherosection.dummy_div_hero}></div>
        <div className={homeherosection.home__hero__shoe__image}>
          <img src="./imgs/main_shoe_bg.png" alt="" />
        </div>
        <div className={homeherosection.home__here__main_description}>
          <div className={homeherosection.home__hero__description}>
            <div className={homeherosection.home__hero__top__dots}>
              <img src="./imgs/top_desc_dots.png" alt="" />
            </div>
            <div className={homeherosection.home__hero__top__line}>
              <p>The</p>
              <img src="imgs/top_desc_line.png" alt="" />
            </div>
            <div className={homeherosection.home__hero__main__description}>
              <p>
                Retro provide the best shoes for casual wear and sports. We
                provide the authentic brand{"\'"}s shoes in very cheap price.
              </p>
              <p>
                We Sell the best sports shoes which are durable and long
                lasting. Another thing special about buying your foot wears from
                us is we provide your order as fast as possible, Straight from
                our warehouse no matter from where you are ordering from.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeroSection;
