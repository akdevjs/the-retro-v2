import HomeHeroSection from "./HomeHeroSection";
import Brands from "./Brands";
import FeaturedProducts from "./FeaturedProducts";
import HotDeals from "./HotDeals";
import Bannar from "./Bannar";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HomeHeroSection />
      <Brands />
      <FeaturedProducts />
      <HotDeals />
      <Bannar />
    </div>
  );
}

export default Home;
