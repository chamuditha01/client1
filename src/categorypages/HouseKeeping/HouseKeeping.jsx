import Navbar1 from '../../Navbar';
import Footer from '../../Footer/Footer';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import RubberMatt from "./Rubber Matt 16'' x 24''.jpg"
import './index.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import img2 from './this-is-protection-knot-with-metal-carabiner-silver-colored-device-active-sports_146671-16443.avif'


  const images = [
    { id: 1, src: RubberMatt, title: 'Rubber Matt 16 x 24' },
    { id: 2, src: img2, title: '6feet Luggage Rope' },
    /*{ id: 3, src: img3, title: 'Spare Parts & Others'},
    { id: 4, src: img4, title: 'Engineering product and accessories' },
    { id: 1, src: img5, title: 'House Keeping, Laundry & Kitchen '},
    { id: 2, src: img6, title: 'Marine, Cold room, Swimming Pool' },
    { id: 3, src: img7, title: 'Tools and Maintenance related' },
    { id: 4, src: img8, title: 'Others' }*/
  ];
  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;



const HouseKeeping = () => {
  return (
    <div>
      <Navbar1/>
      <div>
    <div id="igmdiv" >
        <h1 style={{marginBottom:'50px', textAlign:'center'}}>House Keeping, Loundry And Kitchen Departments</h1>
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

export default HouseKeeping;
