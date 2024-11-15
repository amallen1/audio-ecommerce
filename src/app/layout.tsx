import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ModalProvider } from "./context/ModalContext";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Fictional audio equipment ecommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <ModalProvider>
          <Nav />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
