import Navbar1 from '../../Navbar';
import Footer from '../../Footer/Footer';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './index.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import SocialIcons from '../../SocialIcons';
import img26 from './Drywall Sander MDWS225.jpg';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import img5 from './5.jpg';
import img6 from './6.jpg';
import img7 from './7.jpg';
import img8 from './8.jpg';
import img9 from './9.jpg';
import img10 from './10.jpg';
import img11 from './11.jpg';
import img12 from './12.jpg';
import img13 from './13.jpg';
import img14 from './14.jpg';
import img15 from './15.jpg';
import img16 from './16.jpg';
import img17 from './17.jpg';
import img18 from './18.jpg';
import img19 from './19.jpg';
import img20 from './20.jpg';
import img21 from './21.jpg';
import Navbar from "react-bootstrap/Navbar";
import logo2 from '../../Carousel/logo1.png'
import { SlArrowDown } from "react-icons/sl";
import NavItems from '../../Navitems';
import { useEffect,useState } from 'react';

  const images = [
    { id: 1, src: img1, title: 'Hand Tools    '},
    { id: 1, src: img2, title: 'Automotive Tools    '},
    { id: 1, src: img3, title: 'Chisels, Files & Punches    '},
    { id: 1, src: img4, title: 'Clamps, Riveters & Staples    '},
    { id: 1, src: img5, title: 'Construction Tools    '},
    { id: 1, src: img6, title: 'Crowbars & Pullers    '},
    { id: 1, src: img7, title: 'Cutting & Sawing Tools'},
    { id: 1, src: img8, title: 'Electrician Tools    '},
    { id: 1, src: img9, title: 'Hammers, Mallets & Axes    '},
    { id: 1, src: img10, title: 'Hex Tools & Accessories    '},
    { id: 1, src: img11, title: 'Laser Measure & Inspection    '},
    { id: 1, src: img12, title: 'Measuring & Layout Tools    '},
    { id: 1, src: img13, title: 'Multitools & Knives    '},
    { id: 1, src: img14, title: 'Non Sparking Safety Tools    '},
    { id: 1, src: img15, title: 'Pliers    '},
    { id: 1, src: img16, title: 'Plumbing Tools    '},
    { id: 1, src: img17, title: 'Sockets & Ratchets    '},
    { id: 1, src: img18, title: 'Screwdrivers & Nut Drivers    '},
    { id: 1, src: img19, title: 'Taps & Dies    '},
    { id: 1, src: img20, title: 'Wrenches & Spanners    '},
    { id: 1, src: img21, title: 'Other Hand Tools    '},
    
    { id: 1, src: img26, title: 'Sanders    '},
    /*{ id: 2, src: img6, title: 'Marine, Cold room, Swimming Pool' },
    { id: 3, src: img7, title: 'Tools and Maintenance related' },
    { id: 4, src: img8, title: 'Others' }*/
  ];
  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;



const Tools = () => {

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
              src={img1}
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
        <h1 style={{marginBottom:'50px', textAlign:'center',marginTop:'150px'}}>Tools and Maintenance Supplies</h1>
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

export default Tools;
