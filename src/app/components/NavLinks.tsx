import Link from "next/link";

const Navlinks = () => {
  return (
    <div>
      <ul
        className={`flex flex-col gap-y-4 text-[13px] uppercase tracking-[2px] leading-[25px] font-bold md:flex-row md:gap-x-8`}
      >
        <li>
          <Link href="/products/headphones" className="hover:text-orange-200">
            Headphones
          </Link>
        </li>
        <li>
          <Link href="/products/speakers" className="hover:text-orange-200">
            Speakers
          </Link>
        </li>
        <li>
          <Link href="/products/earphones" className="hover:text-orange-200">
            Earphones
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navlinks;
