import Image from "next/image";
const About = () => {
  return (
    <div className="text-center lg:grid lg:grid-cols-2 lg:gap-x-20">
      <div className="mb-10 md:mb-16 lg:order-1">
        <Image
          src="/assets/shared/mobile/image-best-gear.jpg"
          width={327}
          height={300}
          alt="Man wearing headphones"
          className="rounded-lg m-auto smd:w-[500px] md:hidden"
        />

        <Image
          src="/assets/shared/tablet/image-best-gear.jpg"
          width={689}
          height={300}
          alt="Man wearing headphones"
          className="rounded-lg m-auto hidden md:block lg:hidden"
        />

        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          width={327}
          height={300}
          alt="Man wearing headphones"
          className="rounded-lg m-auto hidden lg:block lg:w-full"
        />
      </div>

      <div className="max-w-[572px] m-auto lg:text-left">
        <h2 className="uppercase text-black text-[28px] tracking-[1px] mb-8 smd:px-12 md:text-[40px]/[44px] md:px-0 xl:pr-10">
          Bringing you the <span className="text-orange-200">best</span> audio
          gear
        </h2>
        <p className="text-black/50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};
export default About;
