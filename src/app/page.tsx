import About from "./components/About";
import CategoryLinks from "./components/Products/CategoryLinks";
import FeaturedProducts from "./components/Products/FeaturedProducts";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <div className="py-28 bg-hero-sm bg-no-repeat bg-cover bg-[center_top_-65px] min-[375px]:bg-[center_top_80%] smd:pt-[126px] smd:pb-[168px] smd:bg-[center_bottom_20px] smd:bg-hero-md md:bg-[center_bottom_25%] lg:bg-hero-lg lg:bg-[center_bottom_5rem] xl:bg-bottom">
        <div className="max-w-[327px] md:max-w-tablet m-auto lg:max-w-desktop-sm xl:max-w-desktop-lg">
          <Hero />
        </div>
      </div>

      <div className="px-3 sm:px-0 py-24 max-w-[327px] m-auto smd:max-w-mobile md:max-w-tablet  lg:pt-0 lg:max-w-desktop-sm xl:py-28 xl:max-w-desktop-lg xl:pb-48">
        <div className="mb-28 md:mb-24 xl:mb-40">
          <CategoryLinks />
        </div>

        <div className="mb-32 md:mb-24 xl:mb-48">
          <FeaturedProducts />
        </div>

        <div>
          <About />
        </div>
      </div>
    </div>
  );
}
