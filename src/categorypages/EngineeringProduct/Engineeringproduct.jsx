import Navbar1 from '../../Navbar';
import Footer from '../../Footer/Footer';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './index.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import img1 from './Pneumatic hose 4MM (Meter).jpg'
import img2 from './Bearring 6206 2RS.jpg'
import img3 from './Cold Room Locks.jpg'
import img4 from './Voltage Regulator 15FR.jpg'
import img5 from './Cummins 40 KVA Gen Set Alternator.jpg'
import img6 from './Bain Marie Element L  2350mm.jpg'
import img7 from './Panel Board Key 4 Way.jpg'
import img8 from './Analog Wall Mountable Phone.jpg'
import img9 from './Heat Compound 40g Tube.jpg'
import img10 from './Universal Thermocouple 1200MM.jpg'
import img11 from './Kelani Coil.jpg'
import img12 from './Grech Pump CHJ4500.jpg'
import img13 from './Dixel XR06CH.jpg'
import img14 from './H3 Bulb.jpg'
import img15 from './Schneider Contactor LC1K1210M7.jpg'
import img16 from './Imhoff Cone Testing Kit.jpg'
import img17 from './LPG Gas Regulator - HWA Young.jpg'
import img18 from './ABB Contactor 141001R8000.jpg'
import img19 from './SS Heating Element.jpg'
import SocialIcons from '../../SocialIcons';
import img20 from './modern-round-desk-fan-with-simple-background_23-2150808049.avif'
import img21 from "./Salamander Element L1250mm.jpg"
import img22 from "./Clamp Tester Fluke Model - 317.jpg"
import imgnew from "./23.jpg"
import Navbar from "react-bootstrap/Navbar";
import logo2 from '../../Carousel/logo1.png'
import { SlArrowDown } from "react-icons/sl";
import NavItems from '../../Navitems';
import { useEffect,useState } from 'react';

  const images = [
    { id: 1, src: img1, title: 'Pneumatic hose ' },
    { id: 2, src: img2, title: 'Bearring 6206 2RS' },
    { id: 3, src: img3, title: 'Locks'},
    { id: 4, src: img4, title: 'Regulators' },
    { id: 1, src: img5, title: 'Alternator    '},
   { id: 2, src: img6, title: 'Heat Elements   ' },
   { id: 3, src: img7, title: 'Panel Keys   ' },
    { id: 4, src: img8, title: 'Wall Phones    ' },
    { id: 1, src: img9, title: 'Compounds    ' },
    { id: 2, src: img10, title: 'Thermocouples    ' },
    { id: 3, src: img11, title: 'Coils    ' },
    { id: 4, src: img12, title: 'Pumps    ' },
    { id: 1, src: img13, title: 'Temperature Controllers    ' },
    { id: 2, src: img14, title: 'Bulbs    ' },
    { id: 3, src: img15, title: 'Contactors    ' },
    { id: 4, src: img16, title: 'Testing Kits    ' },
   ,  { id: 4, src: imgnew, title: 'Filters   ' },
  ];
  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;



const Engineeringproduct = () => {

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
        <h1 style={{marginBottom:'50px', textAlign:'center',marginTop:'150px'}}>Engineering Accessories</h1>
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

export default Engineeringproduct;
