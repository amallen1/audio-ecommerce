"use client";
import { useRouter } from "next/navigation";

interface ButtonsProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "transparent";
  className?: string;
  to?: string; 
  onClick?: () => void;
}

const Button = ({
  children,
  variant,
  className = "",
  to,
  onClick,
}: ButtonsProps) => {
  const router = useRouter();

  const baseClasses = `px-[30px] py-[15px] text-[13px] font-bold tracking-[1px] uppercase leading-[18px]`;

  const variantClasses = {
    primary: `bg-orange-200 text-white hover:bg-orange-100`,
    secondary: `bg-black text-white hover:bg-[#4c4c4c]`,
    transparent: `bg-transparent text-black border border-black hover:bg-black hover:text-white`,
  };

  const variantStyles = variantClasses[variant];

  const handleClick = () => {
    onClick?.();
    if (to) {
      router.push(to);
    }
  };

  return (
    <button
      className={`${baseClasses} ${variantStyles} ${className}`}
      onClick={handleClick}
      disabled={className.includes("disabled")}
    >
      {children}
    </button>
  );
};
export default Button;
