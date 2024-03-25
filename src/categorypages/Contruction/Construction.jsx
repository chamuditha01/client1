import Navbar1 from '../../Navbar';
import Footer from '../../Footer/Footer';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './index.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import img1 from './beautiful-metal-retractable-mechanism-promotion-shelves-selective-focus_255755-1957.jpg';
import img2 from './glass-sliding-door-glass-partition-with-handle_427957-213.jpg'
import img3 from './tools-materials-sanitary-works_93675-131724.avif'
import img4 from './Golden Fuji Gas Adaptor.jpg'
import img5 from './BI Socket 1 Inch.jpg'
import img6 from './Aluminum Sliding Door Locks.jpg'
import img7 from './Yoma Door Closer for Sliding Door.png'
import img8 from './480GB Internal Solid State Drive (SSD).jpg'
import img9 from "./Glass Strip 10mm.jpg";
import img10 from "./Self Adhesive Weather Strip (Meter).jpg";
import img11 from "./0.5'' Steam ball cock Valve - Kitz.jpg";
import img12 from "./2 Inch Pegler Ball Cock Valve.jpg";
import img13 from "./Full Face Safety Visor.jpg";
import img14 from "./Steam Solenoid Valve 1.jpg";
import img15 from "./bolts-nuts.jpg"
import img16 from "./Track Buffer for Sliding Door - Hafele.jpg";
import img17   from "./SS Mat Hingus.jpg";
import img18   from "./Gasket Sheet 3mm 5FT x 5FT.jpg"
import img19   from "./SW 304 Shower Hinge.jpg"
import img20   from "./SS Steam Hose Nipple 34 x 2feet.jpg"
import img21  from "./BI Socket 1'' Inch.jpg"
import img22   from "./SS Barrel Nipple - 38''.jpg"
import img23   from "./Aluminum Sliding Door Locks.jpg"
import img24   from "./Sliding door wheel.jpg"
import img25  from "./Door Seal Beading - Brown.jpg"
import img26   from "./Bi 34 Elbow.jpg"
import img27  from "./Pegler Ball Cock Valve 12.jpg"
import SocialIcons from '../../SocialIcons';
import img28 from './1 Solenoid UniD Valve - US-25 Brand - UniD.jpg'
import img29 from './Steam Solenoid Valve.jpg'
import img30 from './women-s-high-boots-white-background_236836-4362.jpg'
import img31 from "./Glass Strip 8MM.jpg"
import Navbar from "react-bootstrap/Navbar";
import logo2 from '../../Carousel/logo1.png'
import { SlArrowDown } from "react-icons/sl";
import NavItems from '../../Navitems';
import { useEffect,useState } from 'react';


  const images = [
    { id: 1, src: img1, title: 'Yoma Sliding Door Closer 110D' },
    { id: 2, src: img2, title: 'Aluminum Sliding Door Lock - Light Brown' },
    { id: 3, src: img3, title: 'Neumatic Nippel - Male 10mm 1/2 BSPT Threaded'},
    { id: 4, src: img4, title: 'Golden Fuji Gas Adaptor' },
    { id: 1, src: img5, title: 'BI Socket 1 Inch'},
    { id: 2, src: img6, title: 'Aluminum Sliding Door Locks' },
    { id: 3, src: img7, title: 'Yoma Door Closer for Sliding Door' },
    { id: 4, src: img8, title: '480GB Internal Solid State Drive (SSD)' },
    { id: 1, src: img10, title: 'Self Adhesive Weather Strip'},
    { id: 2, src: img11, title: '0.5 Steam ball cock Valve Kitz'},
    { id: 3, src: img12, title: '2 Inch Pegler Ball Cock Valve'},
    { id: 4, src: img13, title: 'Full Face Safety Visor'},
    { id: 1, src: img14, title: 'Steam Solenoid Valve 1"'},
    { id: 2, src: img15, title: 'Black Iron Bolt 13.5MM'},
    { id: 3, src: img16, title: 'Track Buffer for Sliding Door - Hafele'},
    { id: 4, src: img17, title: 'SS Mat Hingus'},
    { id: 1, src: img18, title: 'Gasket Sheet 3mm 5FT x 5FT'},
    { id: 2, src: img19, title: 'SW 304 Shower Hinge'},
    { id: 3, src: img20, title: 'SS Steam Hose Nipple 3/4 x 2feet'},
    { id: 4, src: img21, title: 'BI Socket - Threaded 3/4'},
    { id: 1, src: img22, title: 'SS Barrel Nipple - 3/8'},
    { id: 2, src: img23, title: 'Sliding door locks'},
    { id: 3, src: img24, title: 'Sliding door wheel'},
    { id: 4, src: img25, title: 'Door Seal Beading - Brown'},
    { id: 1, src: img26, title: 'Bi 3/4 Elbow'},
    { id: 2, src: img27, title: 'Pegler Ball Cock Valve 1/2'},
    { id: 3, src: img28, title: '1" Solenoid UniD Valve - US-25 Brand - UniD'},
    { id: 4, src: img29, title: 'Steam Solenoid Valve 3/4'},
    { id: 1, src: img30, title: 'Gumboot White Size 44'},
    { id: 1, src: img31, title: 'Glass Strip 8MM'},
   
  ];
  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;



const Construction = () => {
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
                      marginTop: "-125px",
                      marginBottom: "-170px",
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
        <h1 style={{marginBottom:'50px', textAlign:'center',marginTop:'150px'}}>Construction, Engineering And Hardware</h1>
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

export default Construction;
