import Navbar1 from '../../Navbar';
import Footer from '../../Footer/Footer';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './index.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import img1 from './front-view-worker-using-drill_23-2149916311.avif'
import img2 from './NSK Bearring LP205.webp'
import img3 from './Drill Machine Armture HR2470.jpg'
import img4 from './3 Jaws Filter Wrench.jpg'
import SocialIcons from '../../SocialIcons';
import img5 from './Drywall Sander MDWS225.jpg'

  const images = [
    { id: 1, src: img1, title: 'Impact driver' },
    { id: 2, src: img2, title: 'NSK Bearring LP205' },
    { id: 3, src: img3, title: 'Drill Machine Armture HR2470'},
    { id: 4, src: img4, title: '3 Jaws Filter Wrench' },
    { id: 1, src: img5, title: 'Drywall Sander MDWS225'},
    /*{ id: 2, src: img6, title: 'Marine, Cold room, Swimming Pool' },
    { id: 3, src: img7, title: 'Tools and Maintenance related' },
    { id: 4, src: img8, title: 'Others' }*/
  ];
  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;



const Tools = () => {
  return (
    <div>
      <Navbar1/>
      <SocialIcons/>
      <div>
    <div id="igmdiv" >
        <h1 style={{marginBottom:'50px', textAlign:'center'}}>Tools And Maintanance Related</h1>
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

export default Tools;
