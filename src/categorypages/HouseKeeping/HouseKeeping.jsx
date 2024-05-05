import Navbar1 from '../../Navbar';
import Footer from '../../Footer/Footer';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import RubberMatt from "./Rubber Matt 16'' x 24''.jpg"
import './index.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import img2 from './this-is-protection-knot-with-metal-carabiner-silver-colored-device-active-sports_146671-16443.avif'
import img3 from './Confectionery Funnel.jpg'
import img4 from './Steel Wool.jpg'
import img5 from './Chiminey Wicks.jpg'
import img6 from './SS Confectionery Funnel with Stand.jpg'
import img7 from './Oil Seal for Laundry Dryer 25 37 7 14 YXDJ.jpg'
import img8 from './Tiki Torch Wick (Meter).jpg'
import img9 from './2CM Oil Lamp Wick.jpg'
import img10 from './Garbadge Bags XXXL.jpg'
import SocialIcons from '../../SocialIcons';

import img12 from "./12.jpg";
import img13 from "./13.jpg";
import img14 from "./14.jpg";
import img15 from "./15.jpg";
import img16 from "./16.jpg";
import img17 from "./17.jpg";
import img18 from "./18.jpg";
import img19 from "./19.jpg";
import img20 from "./20.jpg";
import img21 from "./21.jpg";
import img22 from "./22.jpg";
import img23 from "./23.jpg";
import img24 from "./24.jpg";
import img25 from "./25.jpg";
import img26 from "./26.jpg";
import img27 from "./27.jpg";
import img28 from "./28.jpg";
import img29 from "./29.jpg";
import img30 from "./30.jpg";

import Navbar from "react-bootstrap/Navbar";
import logo2 from '../../Carousel/logo1.png'
import { SlArrowDown } from "react-icons/sl";
import NavItems from '../../Navitems';
import { useEffect,useState } from 'react';

  const images = [
    { id: 1, src: RubberMatt, title: 'Matts    ' },
    { id: 2, src: img2, title: 'Lugging Ropes    ' },
    { id: 3, src: img3, title: 'Funnels    '},
   { id: 4, src: img4, title: 'Steel Cleaning Wools   ' },
    { id: 1, src: img5, title: 'Chiminey Wicks    '},
   
    { id: 4, src: img8, title: 'Tiki Torches    ' },
    { id: 1, src: img9, title: 'Lamp Wicks    ' },
    { id: 2, src: img10, title: 'Garbage Bags    ' },
   
    { id: 1, src: img12, title: 'Brooms and Dustpans   '},
    { id: 1, src: img13, title: 'Carpet and Entrance Floor Mats   '},
    { id: 1, src: img14, title: 'Disposable Gloves   '},
    { id: 1, src: img15, title: 'Dusters   '},
    { id: 1, src: img16, title: 'Hotel Housekeeping Carts  '},
    { id: 1, src: img17, title: 'Janitorial Brushes  '},
    { id: 1, src: img18, title: 'Laundry Carts   '},
    { id: 1, src: img19, title: 'Commercial Laundry Detergent   '},
    { id: 1, src: img20, title: 'Commercial Light Bulbs  '},
    { id: 1, src: img21, title: 'Lockers    '},
    { id: 1, src: img22, title: 'Trash Can Liners '},
    { id: 1, src: img23, title: 'Urinal Cakes and Urinal Screens    '},
    { id: 1, src: img24, title: 'Vacuum Cleaners '},
    { id: 1, src: img25, title: 'Gas & Steam Line   '},
    { id: 1, src: img26, title: 'Exhaust Duct Line  '},
    { id: 1, src: img27, title: 'Working Tables '},
    { id: 1, src: img28, title: 'Hand Wash Sink Table    '},
    { id: 1, src: img29, title: 'Bain Mari   '},
    { id: 1, src: img30, title: 'Bakery Trolley    '},
   
  ];
  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;



const HouseKeeping = () => {

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
        <nav className="navbar navbar-expand-lg custom-navbar" id="n1">
          <a className="navbar-brand" href="/">
            <img
              id="i3"
              style={{
                width: "0px",
                marginTop: "-140px",
                marginBottom: "-140px",
              }}
              src={img6}
              alt="Logo"
            />
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
                marginTop: "-40px",
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
                <NavItems NavItem name={"About Us"} path={"/aboutus"} />
                <NavItems NavItem name={"Contact Us"} path={"#footer"} />

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
                    Categories <SlArrowDown />
                  </a>
                  <div
                    style={{
                      backgroundColor: "black",
                      borderRadius: "0px",
                      width: "300px",
                    }}
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    id="a1"
                  >
                    <a className="" href="/page1">
                    Electrical and Electronic Equipment
                    </a>
                    <a className="" href="/page2">
                    Construction Materials
                    </a>
                    <a className="" href="/page3">
                    Spare Parts and Miscellaneous
                    </a>
                    <a className="" href="/page4">
                    Engineering Accessories
                    </a>
                    <a className="" href="/page5">
                    Housekeeping, Laundry, and Kitchen Supplies
                    </a>
                    <a className="" href="/page6">
                    Marine, Cold Room and Swimming Pool Accessories
                    </a>
                    <a className="" href="/page7">
                    Tools and Maintenance Supplies
                    </a>
                  </div>
                </li>
                <a id="i2">
                  <img
                    style={{
                      width: "170px",
                      height: "200px",
                      marginTop: "-65px",
                      marginBottom: "-90px",
                      marginLeft: "85px",
                    }}
                    src={logo2}
                    alt="Logo"
                  />
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </Navbar>
      <SocialIcons/>
      <div>
    <div id="igmdiv" >
        <h1 style={{marginBottom:'50px', textAlign:'center',marginTop:'150px'}}> Housekeeping, Laundry, and Kitchen Supplies</h1>
    <TrackVisibility partialVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": "invisible"}>
      {images.length > 0 && (
        
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {images.map((image, index) => (
            <Col key={image.id}>
              <a style={{textDecoration:'none', color:'black', fontFamily:'cursive'}} >
              <div  className={`text-center ${isLastRow(index) ? 'mx-auto' : ''}`}>
              <div className="image-containe">
      <img
        src={image.src}
        className="img"
        id="imgcat"
        alt="Image"
      />
      <div className="overlay"></div>
    
                <p id="pa" className="mt-2">
                  {image.title}
                </p>
              </div></div>
              </a>
            </Col>
          ))}
        </Row>
        
      )}</div>}
    </TrackVisibility>
    </div>
  </div>
  <div id="footer" >
        <Footer/>
        </div>
    </div>
  );
};

export default HouseKeeping;
