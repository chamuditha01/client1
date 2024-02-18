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
  const images = [
    { id: 1, src: img1, title: 'Pneumatic hose 4MM (Meter)' },
    { id: 2, src: img2, title: 'Bearring 6206 2RS' },
    { id: 3, src: img3, title: 'Cold Room Locks'},
    { id: 4, src: img4, title: 'Voltage Regulator 15FR' },
    { id: 1, src: img5, title: 'Cummins 40 KVA Gen Set Alternator'},
   { id: 2, src: img6, title: 'Bain Marie Element L : 2350mm' },
   { id: 3, src: img7, title: 'Panel Board Key 4 Way' },
    { id: 4, src: img8, title: 'Analog Wall Mountable Phone' },
    { id: 1, src: img9, title: 'Heat Compound 40g Tube' },
    { id: 2, src: img10, title: 'Universal Thermocouple 1200MM' },
    { id: 3, src: img11, title: 'Kelani Coil' },
    { id: 4, src: img12, title: 'Grech Pump CHJ4500' },
    { id: 1, src: img13, title: 'Dixel XR06CH' },
    { id: 2, src: img14, title: 'H3 Bulb' },
    { id: 3, src: img15, title: 'Schneider Contactor LC1K1210M7' },
    { id: 4, src: img16, title: 'Imhoff Cone Testing Kit' },
    { id: 1, src: img17, title: 'LPG Gas Regulator - HWA Young' },
    { id: 2, src: img18, title: 'ABB Contactor 141001R8000' },
    { id: 3, src: img19, title: 'SS Heating Element' },
    { id: 4, src: img20, title: '12" Axial Fan 2D-300S-92/35-GAruki Brand' },
    { id: 3, src: img21, title: 'Salamander Element L:1250mm' },
    { id: 3, src: img22, title: 'Clamp Tester Fluke Model - 317' },
  ];
  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;



const Engineeringproduct = () => {
  return (
    <div>
      <Navbar1/>
      <SocialIcons/>
      <div>
    <div id="igmdiv" >
        <h1 style={{marginBottom:'50px', textAlign:'center'}}>Engineering Products And Accessories</h1>
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
