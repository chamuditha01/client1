import React from 'react';
import './footer.css'; // Make sure to import your styles
import fb from './2021_Facebook_icon.svg.webp';
import li from './circle-linkedin-512.webp';
import con from './pngtree-circle-phone-call-icon-in-black-color-png-image_6596895.png';
import email from './7718904.png';
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { MdAddCall } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import img1 from './logo1.png'


// Define the Footer component
const Footer = () => {
  return (
    <footer>
      <div className="footer-col">
        <h4>products</h4>
        <ul>
          <li><a href="/page1">Electrical & Electronic</a></li>
          <li><a href="/page2">Construction, Engineering</a></li>
          <li><a href="/page3">Spare Parts</a></li>
          <li><a href=".page4">Engineering products</a></li>
        </ul>
        <hr/>
      </div>
      <div className="footer-col">
        <h4>products</h4>
        <ul>
          <li><a href="/page5">House Keeping, Laundry</a></li>
          <li><a href="/page6">Marine, Cold room</a></li>
          <li><a href="/page7">Tools and Maintenance</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Contact us</h4>
        <div className="links">
          <a href="https://www.linkedin.com/in/mohamed-fahadh-360b25142?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="ImLinkedin2"><ImLinkedin2 size={30} style={{marginBottom:'7px'}}/></i></a>
          <a href="tel:+94769673620"><i className="MdAddCall"><MdAddCall size={30} style={{marginBottom:'4px'}}/></i></a>
          <a href="mailto:info@hanaftraders.com"><i className="TfiEmail"><TfiEmail size={30} style={{marginBottom:'4px'}}/></i></a>
        </div>
        <hr />
      </div>
      <div className="footer-col">
       
        <img style={{width:'400px',height:'250px'}} src={img1} alt="Logo" />
      </div>
    </footer>
  );
};

export default Footer;
