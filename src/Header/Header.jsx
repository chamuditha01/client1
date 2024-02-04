import React from "react";
import './Header.css';
import Navbar from "../Navbar";


import AboutUs from "../Aboutus/AboutUs";
import CarouselPage from "../Carousel/CarouselPage";
import SocialIcons from "../SocialIcons";
import ImageGrid from "../Category";



const Header = () => {
  return (
    <div
      className="header"
    
    >
      <div className="container2">
        <CarouselPage/><AboutUs/><ImageGrid/>
        <div className="header__content text__center text__light flex flex__center">
      
        </div>
      </div>
    </div>
  );
};

export default Header;
