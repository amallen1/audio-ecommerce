"use client";
import { useRouter } from "next/navigation";

interface ButtonsProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "transparent";
  fullWidth?: boolean;
  className?: string;
  actionType?: "link" | "addToCart" | "checkout";
  urlLink?: string;
  category?: string;
}

const Button = ({
  children,
  variant,
  fullWidth = false,
  className = "",
  actionType = "link",
  urlLink = "",
}: ButtonsProps) => {
  const router = useRouter();

  const baseClasses = `px-[30px] py-[15px] text-[13px] font-bold tracking-[1px] uppercase leading-[18px]`;

  const variantClasses = {
    primary: `bg-orange-200 text-white hover:bg-orange-100`,
    secondary: `bg-black text-white hover:bg-[#4c4c4c]`,
    transparent: `bg-transparent text-black border border-black hover:bg-black hover:text-white`,
  };

  const variantStyles = variantClasses[variant];
  const fullWidthClass = fullWidth ? "w-full" : "";

  const handleClick = () => {
    if (actionType === "link") {
      router.push(urlLink);
    } else if (actionType === "addToCart") {
      //Todo
    } else {
      //checkout actions
    }
  };

  return (
    <button
      className={`${baseClasses} ${variantStyles} ${fullWidthClass} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
export default Button;
