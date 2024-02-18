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
import img12 from './Micro Limit Switch Long Lever 16A 250V.jpg'
import img13 from './Battery 4V 300mA Wei Sheng.jpg'
import img14 from './PCB Mount capacitor CBB61 2.5uf 400vac.jpg'
import img15 from './USB Cable Type.jpg';
import SocialIcons from '../../SocialIcons';
import img16 from './USB Cable Type Micro.jpg'
import img17 from './USB Cable Type C.jpg'
import img18 from './14MM Spring Washer.jpg'
import img19 from './Auto Wire 2mm 30 Mtr Roll.jpg'
import img20 from './Thermostat ATBF-133.jpg'
import img21 from './16MM Terminal Connector.jpg'
import img22 from './Capacitor 50V 47uf.jpg'
import img23 from './230V AC fan 4 Inch.jpg'
import img24 from './TCI 12706.jpg'
import img25 from './Cooling Fan.jpg'
import img26 from './LED Cold Room Light 230V.webp'
import img27 from './IC HC 40 53A.jpg'
import img28 from './Capacitor 60uf 230V.jpg'
import img29 from './Capacitor 120uf 230V.jpg'
import img30 from './Fork Lug 1.5mm.jpg'
import img31 from './Cable Lug 1.5mm Male.jpg'
import img32 from './Solder remover wic wire.jpg'
import img33 from './Diode 1.5K.jpg'
import img34 from './RS 485 to USB Connector.jpg'
import img35 from './Timer Anly.jpg'
import img36 from './Digital thermostat Brand.jpg'
import img37 from './Mosfet G20N50C.jpg'
import img38 from './Rectifier MGF65A4R.jpg'
import img39 from './Rectifier IRF3710 P725P.jpg'
import img40 from './Universal Power Supply Module.jpg'
import img41 from './Toggle Switch with Cover.jpg'
import img42 from './IC ADS 1243.jpg'
import img43 from './service-maintenance-worker-repairing_23-2149176685.avif'
import img44 from './close-up-perforated-fabric_23-2149894534.avif'
import img45 from "./Rectifier H26FF Y2010DN.jpg"
import img46 from "./Solder remover wic wire.jpg"
import img47 from "./5W74Ohm - Ceramic Resistor.png"
import img48 from "./LDNIO C Type Cable - White & Blue.png"
import img49 from "./Power Supply - SKC Anver 230V 200MA 12V.jpg"
import img50 from "./Digital Temperature Controller - HT400-101000.jpg"
import img51 from "./Motor Rewinding Coil Copper - Gauge 32.jpg"
import img52 from "./Fuse -16A 500V(10 x 38).jpg"
import img53 from "./Desoldering Pump - Joot Bran.jpg"
import img54 from "./Relay 230V 10A - 8Pin.jpg"
import img55 from "./Digital Multimeter CD800a - Sanwa.jpg"

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
    { id: 2, src: img11, title: 'IRechargable Battery 3.7V' },
    { id: 3, src: img12, title: 'Micro Limit Switch Long Lever 16A 250V' },
    { id: 4, src: img13, title: 'Battery 4V 300mA Wei Sheng' },
    { id: 1, src: img14, title: 'PCB Mount capacitor CBB61 2.5uf 400vac  ' },
    { id: 2, src: img15, title: 'USB Cable Type Mini' },
    { id: 3, src: img16, title: 'USB Cable Type Micro' },
    { id: 4, src: img17, title: 'USB Cable Type C' },
    { id: 1, src: img18, title: '14MM Spring Washer' },
    { id: 2, src: img19, title: 'Auto Wire 2mm 30 Mtr Roll' },
    { id: 3, src: img20, title: 'Thermostat ATBF-133' },
    { id: 4, src: img21, title: '16MM Terminal Connector' },
    { id: 1, src: img22, title: 'Capacitor 50V 47uf' },
    { id: 2, src: img23, title: '230V AC fan 4 Inch' },
    { id: 3, src: img24, title: 'TCI 12706' },
    { id: 4, src: img25, title: 'Cooling Fan' },
    { id: 1, src: img26, title: 'LED Cold Room Light 230V' },
    { id: 2, src: img27, title: 'IC HC 40 53A' },
    { id: 3, src: img28, title: 'Capacitor 60uf 230V' },
    { id: 4, src: img29, title: 'Capacitor 120uf 230V' },
    { id: 1, src: img30, title: 'Fork Lug 1.5mm' },
    { id: 2, src: img31, title: 'cable Lug 1.5mm Male' },
    { id: 3, src: img32, title: 'Solder remover wic wire' },
    { id: 4, src: img33, title: 'Diode 1.5K' },
    { id: 1, src: img34, title: 'RS 485 to USB Connector' },
    { id: 2, src: img35, title: 'Timer Anly' },
    { id: 3, src: img36, title: 'Digital thermostat Brand' },
    { id: 4, src: img37, title: 'Mosfet G20N50C' },
    { id: 1, src: img38, title: 'Rectifier MGF65A4R' },
    { id: 2, src: img39, title: 'Rectifier IRF3710 P725P' },
    { id: 3, src: img40, title: 'Universal Power Supply Module' },
    { id:4, src: img41, title: 'Toggle Switch with Covere' },
    { id:1, src: img42, title: 'IC ADS 1243' },
    { id:2, src: img43, title: 'Led Driver Primary voltage - 190-265V Secondary Voltage - 24-50V' },
    { id:3, src: img44, title: 'Fiber Glass Sleeve' },
    { id:3, src: img45, title: 'Rectifier H26FF Y2010DN' },
    { id:3, src: img46, title: 'Solder remover wic wire' },
    { id:3, src: img47, title: '5W74Ohm - Ceramic Resistor' },
    { id:1, src: img48, title: 'LDNIO C Type Cable - White & Blue' },
    { id:1, src: img49, title: 'Power Supply - SKC Anver 230V 200MA 12V' },
    { id:1, src: img50, title: 'Digital Temperature Controller - HT400-101000' },
    { id:1, src: img51, title: 'Motor Rewinding Coil Copper - Gauge 32' },
    { id:1, src: img52, title: 'Fuse -16A 500V(10 x 38)' },
    { id:1, src: img53, title: 'Desoldering Pump - Joot Bran' },
    { id:1, src: img54, title: 'Relay 230V 10A - 8Pin' },
    { id:1, src: img55, title: 'Digital Multimeter CD800a - Sanwa' },
  ];
  

  const numberOfRows = Math.ceil(images.length / 4);
  const lastRowIndex = numberOfRows - 1;
  const isLastRow = (index) => Math.floor(index / 4) === lastRowIndex;


const Electrical = () => {
  return (
    <div>
      <Navbar1/>
      <SocialIcons/>
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
  <div id="footer" >
        <Footer/>
        </div>
    </div>
  );
};

export default Electrical;
