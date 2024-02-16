import Navbar1 from '../../Navbar';
import Footer from '../../Footer/Footer';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './index.css';
import img1 from './3d-rendering-open-door-with-key-living-room-house_207634-3441.avif'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import img2 from './Water Level Gauge (Glass).jpg'
import img3 from './Waterproof Portable Oxygen Air pump.jpg'
import img4 from './Boyu S 4000 Way Air Pump.jpg'
import SocialIcons from '../../SocialIcons';
import img5 from './Swimming Pool Cleaning Net.jpg'
import img6 from './Swimming Pool Vaccum Head 18.jpg'

  const images = [
    { id: 1, src: img1, title: 'Electrical & Electronic' },
    { id: 2, src: img2, title: 'Water Level Gauge (Glass)' },
    { id: 3, src: img3, title: 'Waterproof Portable Oxygen Air pump'},
   { id: 4, src: img4, title: 'Boyu S 4000 Way Air Pump' },
     { id: 1, src: img5, title: 'Swimming Pool Cleaning Net'},
   { id: 2, src: img6, title: 'Swimming Pool Vaccum Head 18' },
     /*{ id: 3, src: img7, title: 'Tools and Maintenance related' },
    { id: 4, src: img8, title: 'Others' }*/
  ];
  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;



const Marine = () => {
  return (
    <div>
      <Navbar1/>
      <SocialIcons/>
      <div>
    <div id="igmdiv" >
        <h1 style={{marginBottom:'50px', textAlign:'center'}}>Marine, Cold Room And Swimming Pool</h1>
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

export default Marine;
