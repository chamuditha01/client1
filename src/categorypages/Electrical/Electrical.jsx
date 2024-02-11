import Navbar1 from '../../Navbar';
import Footer from '../../Footer/Footer';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import img5 from './full-length-woman-standing-kitchen_1048944-13021513.jpg';
import img6 from './blue-sunglasses-reflect-tropical-summer-fun-elegance-generated-by-ai_188544-10320.avif';
import img7 from './photo-top-view-huge-set-collection-working-hand-power-tools-many-wooden-isolated-black-surface_185126-50.avif';
import img8 from './tools-instruments-belt-black-background_182252-6921.avif'
import 'C:/Users/ASUS/Desktop/Client 1/client/src/categorypages/index.css';
import 'animate.css';
import Extension from "./Orange Extension Cord - 5Meter.jpg";
import Resistant from "./10mm Heat Resistant Fiberglass Sleeve.jpg";
import TrackVisibility from 'react-on-screen';
import Heat from "./8mm Heat Shrink Sleeve.jpg";
import Adaptor from "./AC DC Adaptor Input 100-220VAC Out Put 6VDVC 1A.jpg";

  const images = [
    { id: 1, src: Extension, title: 'Orange Extension Cord - 5Meter    ' },
    { id: 2, src: Resistant, title: '10mm Heat Resistant Fiberglass Sleeve    ' },
    { id: 3, src: Heat, title: '8mm Heat Shrink Sleeve    '},
    { id: 1, src: Adaptor, title: 'AC DC Adaptor Input 100-220VAC Out Put 6VDVC 1A    ' },
    { id: 2, src: img5, title: 'House Keeping, Laundry & Kitchen '},
    { id: 1, src: img6, title: 'Marine, Cold room, Swimming Pool' },
    { id: 3, src: img7, title: 'Tools and Maintenance related' },
    { id: 2, src: img8, title: 'Others' }
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
