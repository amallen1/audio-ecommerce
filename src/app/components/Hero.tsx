import Button from "./Button";
const Hero = () => {
  return (
    <div className="max-w-[379px] text-center m-auto lg:m-0 lg:text-left">
      <span className="text-overline block text-white/50 mb-4 md:mb-6">
        New product
      </span>
      <h1 className="text-4xl tracking-[1.29px] mb-6 md:text-[56px]/[58px] md:tracking-[2px]">
        XX99 Mark II Headphones
      </h1>
      <p className="mb-[28px] text-white/75 smd:mb-10 smd:px-3 lg:pl-0">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button variant="primary">See Product</Button>
    </div>
  );
};
export default Hero;
