import React from "react";
import './Header.css';
import Navbar from "../Navbar";
import CarouselPage from "../Carousel/CarouselPage";
import CardPage from "../Card/CardPage";


const Header = () => {
  return (
    <div
      className="header"
    
    >
      <div className="container2">
        <Navbar /><CarouselPage/><CardPage/>
        <div className="header__content text__center text__light flex flex__center">
      
        </div>
      </div>
    </div>
  );
};

export default Header;
