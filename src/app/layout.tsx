import type { Metadata } from "next";
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";
import "../sass/style.sass";
import Header from "../sections/Header";
import Nav from "@/ui/Nav";
import Hamburger from "@/ui/Hamburger";
import StoreProvider from "./StoreProvider";
import MobileNav from "@/ui/MobileNav";

const bellefair = Bellefair({
  weight: "400",
  variable: "--font-bellefair",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400"],
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
});

const barlow = Barlow({
  weight: ["400"],
  variable: "--font-barlow",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Space Agency",
  description: "Space tourism agency webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable}`}
      >
        <StoreProvider>
          <Header>
            <div className="header__hr"></div>
            <Nav className="header__nav" />
            <Hamburger />
            <MobileNav />
          </Header>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
