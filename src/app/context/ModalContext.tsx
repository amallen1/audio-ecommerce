"use client";
import { createContext, useState } from "react";

interface ModalContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckoutComplete: boolean;
  setIsCheckoutComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  isCheckoutComplete: false,
  setIsCheckoutComplete: () => {},
});

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutComplete, setIsCheckoutComplete] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        isCartOpen,
        setIsCartOpen,
        isCheckoutComplete,
        setIsCheckoutComplete,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
