import Navbar1 from '../../Navbar';
import Footer from '../../Footer/Footer';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './index.css';

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import img26 from './Water Level Gauge (Glass).jpg'
import img27 from './Waterproof Portable Oxygen Air pump.jpg'
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";
import img9 from "./9.jpg";
import img10 from "./10.jpg";
import img11 from "./11.jpg";
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


import SocialIcons from '../../SocialIcons';
import img29 from './Swimming Pool Cleaning Net.jpg'
import img66 from './Swimming Pool Vaccum Head 18.jpg'
import Navbar from "react-bootstrap/Navbar";
import logo2 from '../../Carousel/logo1.png'
import { SlArrowDown } from "react-icons/sl";
import NavItems from '../../Navitems';
import { useEffect,useState } from 'react';

  const images = [
    { id: 3, src: img1, title: 'Cold Room Door Latch     '},
    { id: 3, src: img2, title: 'Cold Room Door Hinges   '},
    { id: 3, src: img3, title: 'LED Lamps  '},
    { id: 3, src: img4, title: 'Charging Hoses  '},
    { id: 3, src: img5, title: 'Testing Manifold  '},
    { id: 3, src: img6, title: 'Solder Tube Union  '},
    { id: 3, src: img7, title: 'Compressor Valves   '},
    { id: 3, src: img8, title: 'Acma Timer   '},
    
    { id: 3, src: img9, title: 'Danfoss Alco Expansion Valve   '},
    { id: 3, src: img10, title: 'Flexible PVC Strip Curtain   '},
    { id: 3, src: img11, title: 'Fishing Gears   '},
    { id: 3, src: img12, title: 'Marine Engines & Spare Parts   '},
    { id: 3, src: img13, title: 'Marine Equipments   '},
    { id: 3, src: img14, title: 'Marine Safety Equipments    '},
    { id: 3, src: img15, title: 'Anchors & Chains   '},
    { id: 3, src: img16, title: 'Kayaks & Paddles    '},
    { id: 3, src: img17, title: 'Extinguisher    '},
    { id: 3, src: img18, title: 'Filter    '},
    { id: 3, src: img19, title: 'Skimmers   '},
    { id: 3, src: img20, title: 'Main drains   '},
    { id: 3, src: img21, title: 'Inlets   '},
    { id: 3, src: img22, title: 'Drain grills   '},
    { id: 3, src: img23, title: 'Ladders  '},
    { id: 3, src: img24, title: 'Chemical Dispensers    '},


  //old //
    { id: 2, src: img26, title: 'Water level Gauge    ' },
    { id: 3, src: img27, title: 'Air Pumps    '},
   
     { id: 1, src: img29, title: 'Swimming Pool Cleaning Net     '},
   { id: 2, src: img66, title: 'Swimming Pool Vacuum   ' },
     /*{ id: 3, src: img7, title: 'Tools and Maintenance related' },
    { id: 4, src: img8, title: 'Others' }*/
  ];
  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;



const Marine = () => {

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
              src={img66}
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
        <h1 style={{marginBottom:'50px', textAlign:'center',marginTop:'150px'}}>  Marine, Cold Room and Swimming Pool Accessories</h1>
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

export default Marine;
