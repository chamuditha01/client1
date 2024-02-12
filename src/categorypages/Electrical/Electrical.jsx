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


  const images = [
    { id: 1, src: Extension, title: 'Orange Extension Cord - 5Meter    ' },
    { id: 2, src: Resistant, title: '10mm Heat Resistant Fiberglass Sleeve    ' },
    { id: 3, src: Heat, title: '8mm Heat Shrink Sleeve    '},
    { id: 4, src: Adaptor, title: 'AC DC Adaptor Input 100-220VAC Out Put 6VDVC 1A    ' },
    { id: 1, src: img5, title: '110V Contactor LS mc18b'},
    { id: 2, src: img6, title: 'Projector Lamp' },
    { id: 3, src: img7, title: 'Head torch Heavy Duty' },
    { id: 4, src: img9, title: '10mm 600/1000V Battery Wire (Meter)' },
    { id: 1, src: img10, title: 'IGBT Transistor STGW30NC60KD' },
    { id: 1, src: img11, title: 'IRechargable Battery 3.7V' },
  ];
  

  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;


const Electrical = () => {
  return (
    <div>
      <Navbar1/>
      <div>
    <div id="igmdiv" >
        <h1 style={{marginBottom:'50px', textAlign:'center'}}>Electrical And Electronic</h1>
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
      <Footer/>
    </div>
  );
};

export default Electrical;
