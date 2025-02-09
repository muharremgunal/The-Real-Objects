"use client";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { usePathname } from "next/navigation";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Real Objects</title>
        <link rel="icon" href="/assets/images/headLogo.jpg" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Zilla+Slab+Highlight:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        {pathname !== "/contact" && <Footer />}
      </body>
    </html>
  );
};

export default Layout;
