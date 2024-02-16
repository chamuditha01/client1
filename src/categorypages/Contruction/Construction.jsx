import Navbar1 from '../../Navbar';
import Footer from '../../Footer/Footer';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './index.css';
import img1 from './beautiful-metal-retractable-mechanism-promotion-shelves-selective-focus_255755-1957.jpg';
import img2 from './glass-sliding-door-glass-partition-with-handle_427957-213.jpg'
import img3 from './tools-materials-sanitary-works_93675-131724.avif'
import img4 from './Golden Fuji Gas Adaptor.jpg'
import img5 from './BI Socket 1 Inch.jpg'
import img6 from './Aluminum Sliding Door Locks.jpg'
import img7 from './Yoma Door Closer for Sliding Door.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import img8 from './480GB Internal Solid State Drive (SSD).jpg'


  const images = [
    { id: 1, src: img1, title: 'Yoma Sliding Door Closer 110D' },
    { id: 2, src: img2, title: 'Aluminum Sliding Door Lock - Light Brown' },
    { id: 3, src: img3, title: 'Neumatic Nippel - Male 10mm 1/2 BSPT Threaded'},
    { id: 4, src: img4, title: 'Golden Fuji Gas Adaptor' },
    { id: 2, src: img5, title: 'BI Socket 1 Inch'},
    { id: 1, src: img6, title: 'Aluminum Sliding Door Locks' },
    { id: 3, src: img7, title: 'Yoma Door Closer for Sliding Door' },
    { id: 4, src: img8, title: '480GB Internal Solid State Drive (SSD)' }
  ];
  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;



const Construction = () => {
  return (
    <div>
      <Navbar1/>
      <div>
    <div id="igmdiv" >
        <h1 style={{marginBottom:'50px', textAlign:'center'}}>Construction, Engineering And Hardware</h1>
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

export default Construction;
