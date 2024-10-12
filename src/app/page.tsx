import CategoryLinks from "./components/CategoryLinks";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <div className="py-28 bg-hero-sm bg-no-repeat bg-cover bg-[center_top_-65px] min-[375px]:bg-[center_top_80%] smd:pt-[126px] smd:pb-[168px] smd:bg-[center_bottom_20px] smd:bg-hero-md md:bg-[center_bottom_25%] lg:bg-hero-lg lg:bg-[center_bottom_5rem] xl:bg-bottom">
        <div className="max-w-[327px] md:max-w-tablet m-auto lg:max-w-desktop-sm xl:max-w-desktop-lg">
          <Hero />
        </div>
      </div>
      <div className="py-24 max-w-[327px] smd:max-w-mobile md:max-w-tablet m-auto lg:max-w-desktop-sm xl:max-w-desktop-lg">
        <CategoryLinks />
      </div>
    </div>
  );
}
