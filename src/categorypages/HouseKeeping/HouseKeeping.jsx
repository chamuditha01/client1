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
import img11 from "./Rice Cooker - Bush.jpg"
import Navbar from "react-bootstrap/Navbar";
import logo2 from '../../Carousel/logo1.png'
import { SlArrowDown } from "react-icons/sl";
import NavItems from '../../Navitems';
import { useEffect,useState } from 'react';

  const images = [
    { id: 1, src: RubberMatt, title: 'Rubber Matt 16 x 24' },
    { id: 2, src: img2, title: '6feet Luggage Rope' },
    { id: 3, src: img3, title: 'Confectionery Funnel'},
   { id: 4, src: img4, title: 'Steel Wool' },
    { id: 1, src: img5, title: 'Chiminey Wicks'},
     { id: 2, src: img6, title: 'SS Confectionery Funnel with Stand' },
    { id: 3, src: img7, title: 'Oil Seal for Laundry Dryer 25 37 7 14 YXDJ' },
    { id: 4, src: img8, title: 'Tiki Torch Wick (Meter)' },
    { id: 1, src: img9, title: '2CM Oil Lamp Wick' },
    { id: 2, src: img10, title: 'Garbadge Bags XXXL' },
    { id: 1, src: img11, title: 'Rice Cooker - Bush' },
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
        <h1 style={{marginBottom:'50px', textAlign:'center',marginTop:'150px'}}>House Keeping, Loundry And Kitchen Departments</h1>
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
