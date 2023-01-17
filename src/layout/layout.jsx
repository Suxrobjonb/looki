import React from "react";
import Header__top from "../components/header-top/Header__top";
import Header from "../components/header/header";
import Carusel from "../components/hero/hero";
import About from "../components/about/about";
import Cards__main from "../components/cards__main/cards__main";
import Our_products from "../components/our_products/our_products";
import Product__product from "../components/carusel__product/carusel__product";
import Makeup from "../components/makeup-card/makeup";
import MainBottom from "../components/main_end/main_end";
import Footer from "../components/footer/footer";
import Footer__bottom from "../components/footer__bottom/footer__bottom";

function Layout() {
  return (
    <>
      <Header__top />
      <Header />
      <Carusel />
      <About />
      <Cards__main />
      <Our_products />
      <Product__product />
      <Makeup />
      <MainBottom/>
      <Footer />
      <Footer__bottom />
    </>
  );
}

export default Layout;
