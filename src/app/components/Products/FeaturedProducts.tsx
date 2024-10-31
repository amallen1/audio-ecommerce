import Button from "../Button";
import Image from "next/image";

const FeaturedProducts = () => {
  //
  return (
    <div>
      <div className="bg-orange-200 w-full rounded-lg py-14 px-6 bg-circle-pattern bg-cover bg-no-repeat bg-[center_-135px] flex flex-col items-center gap-y-8 mb-6 md:pb-16 md:gap-y-16 md:bg-[length:129%] md:bg-[center_-250px] md:mb-8 lg:flex-row lg:justify-center lg:overflow-hidden lg:gap-x-24 lg:py-10 lg:bg-[-167px_10%] lg:bg-[length:88%] xl:mb-12">
        <div>
          <Image
            src="/assets/home/mobile/image-speaker-zx9.png"
            width={172}
            height={207}
            className="md:hidden"
            alt="Speaker ZX9"
          />
          <Image
            src="/assets/home/tablet/image-speaker-zx9.png"
            width={197}
            height={237}
            className="hidden md:block lg:hidden"
            alt="Speaker ZX9"
          />
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            width={300}
            height={493}
            className="hidden relative top-12 lg:block xl:w-[380px] xl:top-[3.5rem] xl:left-14"
            alt="Speaker ZX9"
          />
        </div>

        <div className="text-center lg:text-left xl:pl-32">
          <h2 className="text-white text-4xl mb-6 md:text-[56px]/[58px] tracking-[1.29px] md:tracking-[2px]">
            ZX9
            <br /> Speaker
          </h2>
          <p className="mb-6 text-white opacity-75 max-w-[349px]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button variant="transparent"> See product</Button>
        </div>
      </div>

      <div className="bg-mobile-zx7 bg-cover bg-center mb-6 rounded-lg pl-6 py-[101px] md:bg-tablet-zx7 md:pl-16 md:mb-8 lg:pl-24 xl:bg-desktop-zx7 xl:mb-12">
        <h2 className="text-3xl text-black mb-8 tracking-[2px]">ZX7 Speaker</h2>
        <Button variant="secondary">See Product</Button>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-x-[11px] xl:gap-x-[30px]">
        <div className="bg-mobile-yx1 bg-no-repeat h-[200px] bg-center rounded-lg bg-cover mb-6 md:mb-0 md:h-[320px] md:bg-tablet-yx1 lg:bg-desktop-yx1" />
        <div className="pl-6 py-10 bg-gray-200 rounded-lg md:pl-10 md:py-[101px]">
          <h2 className="text-3xl text-black mb-8 tracking-[2px]">
            YX1 earphones
          </h2>
          <Button variant="secondary">See Product</Button>
        </div>
      </div>
    </div>
  );
};
export default FeaturedProducts;
