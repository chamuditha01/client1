import Navbar1 from '../Navbar';
import Footer from '../Footer/Footer';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import img1 from './blue-sunglasses-reflect-tropical-summer-fun-elegance-generated-by-ai_188544-10320.avif';
import img2 from './working-tools-things-worker-builder-electrician-top-view_169016-24610.avif';
import img4 from './construction-materials-concept-safety-construction-tools-hand-tools-power-tools_1048944-3433536.jpg';
import img3 from './composition-different-car-accessories_23-2149030390.jpg';
import img5 from './full-length-woman-standing-kitchen_1048944-13021513.jpg';
import img6 from './blue-sunglasses-reflect-tropical-summer-fun-elegance-generated-by-ai_188544-10320.avif';
import img7 from './photo-top-view-huge-set-collection-working-hand-power-tools-many-wooden-isolated-black-surface_185126-50.avif';
import img8 from './tools-instruments-belt-black-background_182252-6921.avif'
import './index.css';
import Laminating from "./A3 Laminating Machine.jpg";
import Puncher from "./3 Hole Puncher.jpg";
import SKF from "./SKF LGFP 2 Food Grade Grease 1kg.jpg";
import Glass from "./Glass Paper Red.jpg";
import CHIRSTMAS from "./CHIRSTMAS GARLAND (6 FEET).jpg";
import WIRELESS from "./WIRELESS EARBUDS.jpg";
import Speakers from "./Speakers 33mm.jpg";
import Belt from "./V Belt.jpg"

import 'animate.css';
import TrackVisibility from 'react-on-screen';


  const images = [
    { id: 1, src: Puncher, title: '3 Hole Puncher    ' },
    { id: 2, src: Laminating, title: 'A3 Laminating Machine    ' },
    { id: 3, src: SKF, title: 'SKF LGFP 2 Food Grade Grease 1kg    '},
    { id: 1, src: Glass, title: 'Glass Paper Red    ' },
    { id: 2, src: CHIRSTMAS, title: 'CHIRSTMAS GARLAND (6 FEET)    '},
    { id: 1, src: WIRELESS, title: 'WIRELESS EARBUDS    ' },
    { id: 3, src: Speakers, title: 'Speakers 33mm    ' },
    { id: 2, src: Belt, title: 'V Belt    ' }
  ];
  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;



const SpareParts = () => {
  return (
    <div>
      <Navbar1/>
      <div>
    <div id="igmdiv" >
        <h1 style={{marginBottom:'50px', textAlign:'center'}}>Spare Parts And Others</h1>
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

export default SpareParts;
