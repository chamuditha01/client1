import Navbar1 from '../../Navbar';
import Footer from '../../Footer/Footer';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './index.css';
import Laminating from "./A3 Laminating Machine.jpg";
import Puncher from "./3 Hole Puncher.jpg";
import SKF from "./SKF LGFP 2 Food Grade Grease 1kg.jpg";
import Glass from "./Glass Paper Red.jpg";
import CHIRSTMAS from "./CHIRSTMAS GARLAND (6 FEET).jpg";
import WIRELESS from "./WIRELESS EARBUDS.jpg";
import Speakers from "./Speakers 33mm.jpg";
import Belt from "./V Belt.jpg"
import img1 from './detail-professional-male-worker-using-mitre-saw-workshop_23-2147944891.avif'
import img2 from './two-screwdriver-isolated-white-background_229712-44.jpg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import img3 from './Heavy Duty Drill Chuck 18mm.jpg'
import img4 from './CRC coat 70.jpg'
import img5 from './Treadmill Oil Bottle.jpg'
import img6 from './Star Trac belt 130-1695 (V280J).jpg'
import img7 from './Washing Machine Universal PCB.jpg'
import img8 from './HTP Connector 25mm.jpg'
import img9 from './STC-9100 Defrost Temerature Controller.jpg'
import img10 from './V Belt A1956LI.jpg'
import img11 from './Washing Machine Water Seal Model.jpg'
import img12 from './Motor Cycle Chain.jpg'
import img13 from './Face & Body Paint 25ml 6Pcs Set.jpg'
import img14 from './Face & Body Paint.jpg'
import img15 from './V Belt SPA 1532.jpg'
import img16 from './Battery 3.7V.jpg'
import SocialIcons from '../../SocialIcons';
import img17 from './speaker-membrane_1204-366.avif'
import img18 from "./Belt 1956J - 9 ribs.jpg"
import img19 from "./Tyre 15580R13 With Rim.jpg"
import img20 from "./LPG Hose 14'' x 600MM , 22Bar.jpg"
import img21 from "./SKF - Bearing Grease.jpg"
import img22 from "./Makita Planer 1902 2250718 Belt.jpg"
import img23 from "./Gasful Adaptor - GoldenFuji 183B.jpg"
import img24 from "./Cool Room Defrosting Element - 230V 1000W.jpg"
import img25 from './sanitary-equipment_93675-132398.avif'
import img26 from './usb-charging-cables-with-smartphone-battery-bank-top-view_35712-536.avif'

  const images = [
    { id: 1, src: Puncher, title: '3 Hole Puncher    ' },
    { id: 2, src: Laminating, title: 'A3 Laminating Machine    ' },
    { id: 3, src: SKF, title: 'SKF LGFP 2 Food Grade Grease 1kg    '},
    { id: 4, src: Glass, title: 'Glass Paper Red    ' },
    { id: 1, src: CHIRSTMAS, title: 'CHIRSTMAS GARLAND     '},
    { id: 2, src: WIRELESS, title: 'WIRELESS EARBUDS    ' },
    { id: 3, src: Speakers, title: 'Speakers 33mm    ' },
    { id: 4, src: Belt, title: 'Makita Field Assy 5008MG' },
    { id: 1, src: img1, title: 'V Belt' },
    { id: 2, src: img2, title: 'Magnetic Pickup Tool Hanbon' },
    { id: 3, src: img3, title: 'Heavy Duty Drill Chuck 18mm' },
    { id: 4, src: img4, title: 'CRC coat 70' },
    { id: 1, src: img5, title: 'Treadmill Oil Bottle' },
    { id: 2, src: img6, title: 'Star Trac belt 130-1695 (V280J)' },
    { id: 3, src: img7, title: 'Washing Machine Universal PCB' },
    { id: 4, src: img8, title: 'HTP Connector 25mm' },
    { id: 1, src: img9, title: 'STC-9100 Defrost Temerature Controller' },
    { id: 2, src: img10, title: 'V Belt A1956LI' },
    { id: 3, src: img11, title: 'Washing Machine Water Seal Model' },
    { id: 4, src: img12, title: 'Motor Cycle Chain' },
    { id: 1, src: img13, title: 'Face & Body Paint 25ml 6Pcs Set' },
    { id: 2, src: img14, title: 'Face & Body Paint' },
    { id: 3, src: img15, title: 'V Belt SPA 1532' },
    { id: 4, src: img16, title: 'Battery 3.7V' },
    { id: 1, src: img17, title: 'Speakers - 4 Ohm' },
    { id: 2, src: img18, title: 'Belt 1956J - 9 ribs' },
    { id: 3, src: img19, title: 'Tyre 155/80/R13 With Rim' },
    { id: 4, src: img20, title: 'LPG Hose 1/4 x 600MM , 22Bar' },
    { id: 1, src: img21, title: 'SKF - Bearing Grease' },
    { id: 2, src: img22, title: 'Makita Planer 1902 / 225071-8 Belt' },
    { id: 3, src: img23, title: 'Gasful Adaptor - GoldenFuji 183B' },
    { id: 4, src: img24, title: 'Cool Room Defrosting Element - 230V 1000W' },
    { id: 2, src: img25, title: 'Pressure Sensor - Washing Machine LG' },
    { id: 3, src: img26, title: 'USB 2.0 Male to Mini USB - Blue' },

  ];
  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;



const SpareParts = () => {
  return (
    <div>
      <Navbar1/>
      <SocialIcons/>
      <div>
    <div id="igmdiv" >
        <h1 style={{marginBottom:'50px', textAlign:'center',marginTop:'150px'}}>Spare Parts And Others</h1>
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

export default SpareParts;
