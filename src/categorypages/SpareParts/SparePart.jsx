import Navbar1 from '../../Navbar';
import Footer from '../../Footer/Footer';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './index.css';
import Laminating from "./A3 Laminating Machine.jpg";
import Puncher from "./3 Hole Puncher.jpg";
import SKF from "./SKF LGFP 2 Food Grade Grease 1kg.jpg";
import Glass from "./Glass Paper Red.jpg";
import CHIRSTMAS from "./CHIRSTMAS GARLAND (6 FEET).jpg";
import WIRELESS from "./WIRELESS EARBUDS.jpg";
import Speakers from "./Speakers 33mm.jpg";
import Belt from "./V Belt.jpg"
import img1 from './detail-professional-male-worker-using-mitre-saw-workshop_23-2147944891.avif'
import img2 from './two-screwdriver-isolated-white-background_229712-44.jpg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import img3 from './Heavy Duty Drill Chuck 18mm.jpg'
import img4 from './CRC coat 70.jpg'
import img5 from './Treadmill Oil Bottle.jpg'
import img6 from './Star Trac belt 130-1695 (V280J).jpg'
import img7 from './Washing Machine Universal PCB.jpg'
import img8 from './HTP Connector 25mm.jpg'
import img9 from './STC-9100 Defrost Temerature Controller.jpg'
import img10 from './V Belt A1956LI.jpg'
import img11 from './Washing Machine Water Seal Model.jpg'
import img12 from './Motor Cycle Chain.jpg'
import img13 from './Face & Body Paint 25ml 6Pcs Set.jpg'
import img14 from './Face & Body Paint.jpg'
import img15 from './V Belt SPA 1532.jpg'
import img16 from './Battery 3.7V.jpg'
import SocialIcons from '../../SocialIcons';
import img17 from './speaker-membrane_1204-366.avif'
import img18 from "./Belt 1956J - 9 ribs.jpg"
import img19 from "./Tyre 15580R13 With Rim.jpg"
import img20 from "./LPG Hose 14'' x 600MM , 22Bar.jpg"
import img21 from "./SKF - Bearing Grease.jpg"

import img22 from "./Makita Planer 1902 2250718 Belt.jpg"
import img23 from "./Gasful Adaptor - GoldenFuji 183B.jpg"
import img24 from "./Cool Room Defrosting Element - 230V 1000W.jpg"
import img25 from './sanitary-equipment_93675-132398.avif'
import img26 from './usb-charging-cables-with-smartphone-battery-bank-top-view_35712-536.avif'
import imgnew from "./1.jpg";
import imgnew2 from "./15.jpg";

import Navbar from "react-bootstrap/Navbar";
import logo2 from '../../Carousel/logo1.png'
import { SlArrowDown } from "react-icons/sl";
import NavItems from '../../Navitems';
import { useEffect,useState } from 'react';

  const images = [
    { id: 1, src: imgnew, title: 'Office Stationery    ' },
   
    { id: 2, src: Laminating, title: 'Office Equipment    ' },
    { id: 3, src: SKF, title: 'Grease    '},
    { id: 4, src: Glass, title: 'Paper Glasses    ' },
    { id: 1, src: CHIRSTMAS, title: 'Decoration Items    '},
    { id: 2, src: WIRELESS, title: 'Earphones     ' },
    { id: 3, src: Speakers, title: 'Speakers    ' },
    { id: 4, src: Belt, title: 'V Belts    ' },
    { id: 1, src: img1, title: 'Woodworking Machine Parts    ' },
    { id: 2, src: img2, title: 'Workshop Hand Tools    ' },
    { id: 3, src: img3, title: 'Drill Machine Parts    ' },
    { id: 4, src: img4, title: 'General Lubricants    ' },
    { id: 1, src: img5, title: 'Treadmill lubricants    ' },
    { id: 2, src: img6, title: 'Modified Belts     ' },
    { id: 1, src: imgnew2, title: 'Universal PCB    ' },

   
    { id: 3, src: img7, title: 'Connectors     ' },
    { id: 4, src: img8, title: 'Controllers    ' },

   
  
    { id: 3, src: img11, title: 'Seals    ' },
    { id: 4, src: img12, title: 'Chains    ' },
    { id: 1, src: img13, title: 'Face & Body Paints    ' },

    { id: 4, src: img16, title: 'Battery    ' },
    { id: 1, src: img17, title: 'Modified Speakers    ' },

    { id: 3, src: img19, title: 'Tyres    ' },
    { id: 4, src: img20, title: 'Safety Hose    ' },
  

    { id: 3, src: img23, title: 'Gas Adaptors    ' },
    { id: 4, src: img24, title: 'Heat Elements     ' },
    { id: 2, src: img25, title: 'Sensors    ' },
    { id: 3, src: img26, title: 'Data Cabels' },

  ];
  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;



const SpareParts = () => {

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
        <h1 style={{marginBottom:'50px', textAlign:'center',marginTop:'150px'}}>Spare Parts and Miscellaneous</h1>
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

export default SpareParts;
