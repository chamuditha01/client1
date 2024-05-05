import Navbar1 from '../../Navbar';
import Footer from '../../Footer/Footer';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import img5 from './electric-circuit-breaker-isolated-white-background-electric-line-protection_113913-1574.jpg';
import img6 from './stage-with-spotlights_1284-12774.avif';
import img7 from './side-view-man-with-head-lantern_23-2148282340.avif';
import img8 from './tools-instruments-belt-black-background_182252-6921.avif'
import './index.css';
import 'animate.css';
import Extension from "./Orange Extension Cord - 5Meter.jpg";
import Resistant from "./10mm Heat Resistant Fiberglass Sleeve.jpg";
import TrackVisibility from 'react-on-screen';
import Heat from "./8mm Heat Shrink Sleeve.jpg";
import Adaptor from "./AC DC Adaptor Input 100-220VAC Out Put 6VDVC 1A.jpg";
import img9 from './colorful-plastic-polymer-granules-cable_93675-129282.avif'
import img10 from './technology-electronic-computer-motherboard_1387-755.avif'
import img11 from './lithium-battery-pack-dark-background_181705-181.jpg'
import img12 from './Micro Limit Switch Long Lever 16A 250V.jpg'
import img13 from './Battery 4V 300mA Wei Sheng.jpg'
import img14 from './PCB Mount capacitor CBB61 2.5uf 400vac.jpg'
import img15 from './USB Cable Type.jpg';
import SocialIcons from '../../SocialIcons';
import img16 from './USB Cable Type Micro.jpg'
import img17 from './USB Cable Type C.jpg'
import img18 from './14MM Spring Washer.jpg'
import img19 from './Auto Wire 2mm 30 Mtr Roll.jpg'
import img20 from './Thermostat ATBF-133.jpg'
import img21 from './16MM Terminal Connector.jpg'
import img22 from './Capacitor 50V 47uf.jpg'
import img23 from './230V AC fan 4 Inch.jpg'
import img24 from './TCI 12706.jpg'
import img25 from './Cooling Fan.jpg'
import img26 from './LED Cold Room Light 230V.webp'
import img27 from './IC HC 40 53A.jpg'
import img28 from './Capacitor 60uf 230V.jpg'
import img29 from './Capacitor 120uf 230V.jpg'
import img30 from './Fork Lug 1.5mm.jpg'
import img31 from './Cable Lug 1.5mm Male.jpg'
import img32 from './Solder remover wic wire.jpg'
import img33 from './Diode 1.5K.jpg'
import img34 from './RS 485 to USB Connector.jpg'
import img35 from './Timer Anly.jpg'
import img36 from './49.jpg'
import img37 from './Mosfet G20N50C.jpg'
import img38 from './Rectifier MGF65A4R.jpg'
import img39 from './Rectifier IRF3710 P725P.jpg'
import img40 from './Universal Power Supply Module.jpg'
import img41 from './Toggle Switch with Cover.jpg'
import img42 from './IC ADS 1243.jpg'
import img43 from './service-maintenance-worker-repairing_23-2149176685.avif'
import img44 from './close-up-perforated-fabric_23-2149894534.avif'
import img45 from "./Rectifier H26FF Y2010DN.jpg"
import img46 from "./Solder remover wic wire.jpg"
import img47 from "./5W74Ohm - Ceramic Resistor.jpg"
import img48 from "./LDNIO C Type Cable - White & Blue.png"
import img49 from "./Power Supply - SKC Anver 230V 200MA 12V.jpg"
import img50 from "./Digital Temperature Controller - HT400-101000.jpg"
import img51 from "./Motor Rewinding Coil Copper - Gauge 32.jpg"
import img52 from "./Fuse -16A 500V(10 x 38).jpg"
import img53 from "./Desoldering Pump - Joot Bran.jpg"
import imgn1 from "./1.jpg"
import imgn2 from "./2.jpg"
import imgn3 from "./3.jpg"
import imgn4 from "./4.jpg"
import imgn5 from "./5.jpg"
import imgn6 from "./6.jpg"
import imgn7 from "./7.jpg"
import imgn8 from "./8.jpg"
import imgn9 from "./9.jpg"
import imgn10 from "./10.jpg"
import imgn11 from "./11.jpg"
import imgn12 from "./12.jpg"
import imgn13 from "./13.jpg"
import imgn14 from "./14.jpg"

import img54 from "./Relay 230V 10A - 8Pin.jpg"
import img55 from "./68.jpg"
import Navbar from "react-bootstrap/Navbar";
import logo2 from '../../Carousel/logo1.png'
import { SlArrowDown } from "react-icons/sl";
import NavItems from '../../Navitems';
import { useEffect,useState } from 'react';


  const images = [
    { id:1, src: imgn1, title: 'Integrated Circuits (ICs)    ' },
    { id:1, src: imgn2, title: 'Discrete Semiconductors    ' },
    { id:1, src: imgn3, title: 'Capacitors    ' },
    { id:1, src: imgn4, title: 'Resistors    ' },
    { id:1, src: imgn5, title: 'connectors Interconnects    ' },
    { id:1, src: imgn6, title: 'Switches    ' },
    { id:1, src: imgn7, title: 'Relays    ' },
    { id:1, src: imgn8, title: 'Transformers     ' },
    { id:1, src: imgn9, title: 'Wire    ' },
    { id:1, src: imgn10, title: 'Adapters    ' },
    { id:1, src: imgn11, title: 'Contactors    ' },
    { id:1, src: imgn12, title: 'Batteries    ' },
    { id:1, src: imgn13, title: 'Sensors    ' },
    { id:1, src: imgn14, title: 'Soldering Tools    ' },
    { id: 1, src: Extension, title: 'Extension Cord    ' },
    { id: 2, src: Resistant, title: ' High Temperature Sleeves    ' },
   
    
   
    { id: 2, src: img6, title: 'Projectors Lamps    ' },
  
    { id: 4, src: img9, title: 'AC Wires     ' },
  
   
    { id: 3, src: img24, title: 'Thermoelectric Coolers    ' },
    { id: 4, src: img25, title: 'AC , DC Cooling Fans    ' },
    { id: 1, src: img26, title: 'Rechargeable Lights    ' },
   
    { id: 1, src: img30, title: 'Lugs    ' },

   
    { id: 2, src: img35, title: 'Timers    ' },
    { id: 3, src: img36, title: 'Temperature Controllers    ' },
   
    
    { id: 3, src: img40, title: 'Supply Modules     ' },
    { id:4, src: img41, title: 'Weatherproof Accessories    ' },

   
    { id:1, src: img55, title: 'Testers & Multi Meters    ' },
    
  ];
  

  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;


  
const Electrical = () => {
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
        <h1 style={{marginBottom:'50px', textAlign:'center',marginTop:'150px'}}>Electrical and Electronic Equipment</h1>
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

export default Electrical;
