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

import img4 from "./Fairy Light Strings.jpg";
import img5 from"./Mini File 3'' - Trangle.jpg";
import img6 from "./Hikvision Indoor Network Camera.jpg";
import img7 from "./Router Bit Bearring - Big.jpg";
import img8 from "./SS Half Thred Nail M10x140MM with washers and nuts.jpg";
import img9 from "./Glass Strip 10mm.jpg";
import img10 from "./Self Adhesive Weather Strip (Meter).jpg";
import img11 from "./0.5'' Steam ball cock Valve - Kitz.jpg";
import img12 from "./2 Inch Pegler Ball Cock Valve.jpg";
import img13 from "./Full Face Safety Visor.jpg";
import img14 from "./Steam Solenoid Valve 1.jpg";
import img15 from "./Black Iron Bolt 13.5MM.jpg"
import img16 from "./Track Buffer for Sliding Door - Hafele.jpg";
import img17   from "./SS Mat Hingus.jpg";
import img18   from "./Gasket Sheet 3mm 5FT x 5FT.jpg"
import img19   from "./SW 304 Shower Hinge.jpg"
import img20   from "./SS Steam Hose Nipple 34 x 2feet.jpg"







  const images = [
    { id: 1, src: img1, title: 'Yoma Sliding Door Closer 110D' },
    { id: 2, src: img2, title: 'Aluminum Sliding Door Lock - Light Brown' },
    { id: 3, src: img3, title: 'Neumatic Nippel - Male 10mm 1/2 BSPT Threaded'},
    { id: 4, src: img4, title: 'Fairy Light Strings'},
    { id: 5, src: img5, title: 'Mini File 3 Trangle'},
    { id: 6, src: img6, title: 'Hikvision Indoor Network Camera'},
    { id: 7, src: img7, title: 'Router Bit Bearring - Big'},
    { id: 8, src: img8, title: 'SS Half Thred Nail M10x140MM with washers and nuts'},
    { id: 9, src: img9, title: 'Glass Strip 10mm'},
    { id: 10, src: img10, title: 'Self Adhesive Weather Strip'},
    { id: 11, src: img11, title: '0.5 Steam ball cock Valve Kitz'},
    { id: 11, src: img12, title: '2 Inch Pegler Ball Cock Valve'},
    { id: 11, src: img13, title: 'Full Face Safety Visor'},
    { id: 11, src: img14, title: 'Steam Solenoid Valve 1"'},
    { id: 11, src: img15, title: 'Black Iron Bolt 13.5MM'},
    { id: 11, src: img16, title: 'Track Buffer for Sliding Door - Hafele'},
    { id: 11, src: img17, title: 'SS Mat Hingus'},
    { id: 11, src: img18, title: 'Gasket Sheet 3mm 5FT x 5FT'},
    { id: 11, src: img19, title: 'SW 304 Shower Hinge'},
    { id: 11, src: img20, title: 'SS Steam Hose Nipple 3/4 x 2feet'},
    { id: 11, src: img19, title: 'Fairy Light Strings'},
    { id: 11, src: img19, title: 'Fairy Light Strings'},
    
    
    /*{ id: 1, src: img4, title: 'Engineering product and accessories' },
    { id: 2, src: img5, title: 'House Keeping, Laundry & Kitchen '},
    { id: 1, src: img6, title: 'Marine, Cold room, Swimming Pool' },
    { id: 3, src: img7, title: 'Tools and Maintenance related' },
    { id: 2, src: img8, title: 'Others' }*/
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
