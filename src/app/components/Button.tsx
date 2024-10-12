"use client";

interface ButtonsProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "transparent";
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  children,
  variant,
  fullWidth = false,
  className = "",
}: ButtonsProps) => {
  const baseClasses = `px-[30px] py-[15px] text-[13px] font-bold tracking-[1px] uppercase leading-[18px]`;

  const variantClasses = {
    primary: `bg-orange-200 hover:bg-orange-100`,
    secondary: `bg-transparent text-black border border-black hover:bg-black hover:text-white`,
    transparent: `bg-black hover:bg-[#4c4c4c]`,
  };

  const variantStyles = variantClasses[variant];
  const fullWidthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${variantStyles} ${fullWidthClass} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
