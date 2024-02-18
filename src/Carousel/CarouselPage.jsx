import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import "./CarouselPage.css";
import logo1 from "./logo1.png";
import { SlArrowDown } from "react-icons/sl";
import NavItems from "../Navitems";
import logo2 from './logo5.png'
import { Color } from "three";
import { Link } from 'react-router-dom';

function CarouselPage() {
  const [scrolling, setScrolling] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  const navbarBackground = scrolling
    ? "white"
    : "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))";

  return (
    <div>
      <Navbar
        style={{ background: navbarBackground }}
        expand="lg"
        variant="dark"
        fixed="top"
      >
        <nav className="navbar navbar-expand-lg custom-navbar"  id="n1">
        <a className="navbar-brand" href="/">
                  <img id="i3" style={{ width: "35px", marginTop:'-140px',marginBottom:'-140px'}} src={logo1} alt="Logo" />
                </a>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{
                backgroundColor: "#0de2f1 ",
                marginLeft: "auto",
                borderRadius: "5px",
                marginTop:'-40px',
                width: "40px",
                padding: "0px",
                borderStyle: "none",
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavItems NavItem name={"Home"} path={"/"} />
               <NavItems
                  NavItem
                  
                  name={"About Us"}
                  path={"/aboutus"}
                />
                
                <NavItems
                  NavItem
                  
                  name={"Contact Us"}
                  path={"#footer"}
                />
            
                <li className="nav-item dropdown ">
                <a
                
                  className="nav-link "
                  href="#"
                  id="u1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >

                  Categories <SlArrowDown  />
                </a>
                <div
                    style={{ backgroundColor: 'black', borderRadius: '0px', width:'300px' }}
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    id="a1"
                  >
                    <a className="" href="/page1">
                    Electrical & Electronic  
                    </a>
                    <a className="" href="/page2">
                    Construction, Engineering hardware
                    </a>
                    <a className="" href="/page3">
                    Spare Parts & Others
                    </a>
                    <a className="" href="/page4">
                    Engineering products and accessories
                    </a>
                    <a className="" href="/page5">
                    House Keeping, Laundry & Kitchen Departments
                    </a>
                    <a className="" href="/page6">
                    Marine, Cold room, Swimming Pool 
                    </a>
                    <a className="" href="/page7">
                    Tools and Maintenance related
                    </a>
                  </div>

                </li>
                
                <a className="navbar-brand" href="/">
                  <img id="i1" style={{ width: "35px", marginTop:'-70px',marginBottom:'-70px'}} src={logo1} alt="Logo" />
                </a>
              </ul>
              <img id="i2" style={{ width: "150px", marginTop:'-140px',marginBottom:'-170px'}} src={logo2} alt="Logo" />
              
            </div>
          </div>
        </nav>
      </Navbar>
      
      <Carousel fade={true}>
        <Carousel.Item>
          <img
            style={{ height: "85vh", objectFit: "cover" }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
         <Carousel.Caption className="text-center">
            <h3  style={{ color: 'red' }}>THE LARGEST  COMPANY IN SRI LANKA</h3>
            <p id="pr">THE LARGEST COMPANY IN SRI LANKA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "85vh", objectFit: "cover" }}
            className="d-block w-100"
            src={img2}
            alt="First slide"
          />
          <Carousel.Caption className="text-center">
            <h3 style={{ color: 'red' }}>THE LARGEST  COMPANY IN SRI LANKA</h3>
            <p id="pr">THE LARGEST COMPANY IN SRI LANKA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "85vh", objectFit: "cover" }}
            className="d-block w-100"
            src={img3}
            alt="First slide"
          />
          <Carousel.Caption className="text-center">
            <h3 style={{ color: 'red' }}>THE LARGEST  COMPANY IN SRI LANKA</h3>
            <p id="pr">THE LARGEST COMPANY IN SRI LANKA</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
}

export default CarouselPage;
