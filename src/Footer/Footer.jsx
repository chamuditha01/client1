// Import React and any other necessary dependencies
import React from 'react';
import './footer.css'; // Make sure to import your styles
import fb from './2021_Facebook_icon.svg.webp'
import li from './circle-linkedin-512.webp'
import con from './pngtree-circle-phone-call-icon-in-black-color-png-image_6596895.png'
import email from './7718904.png'
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { MdAddCall } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

// Define the Footer component
const Footer = () => {
  return (
    <footer>
      <div className="footer-col">
        <h4>products</h4>
        <ul>
          <li><a href="#">teams</a></li>
          <li><a href="#">advertising</a></li>
          <li><a href="#">talent</a></li>
        </ul>
        <hr />
      </div>
      <div className="footer-col">
        <h4>network</h4>
        <ul>
          <li><a href="#">technology</a></li>
          <li><a href="#">science</a></li>
          <li><a href="#">business</a></li>
          <li><a href="#">professional</a></li>
          <li><a href="#">API</a></li>
        </ul>
        <hr />
      </div>
      <div className="footer-col">
        <h4>company</h4>
        <ul>
          <li><a href="#">about</a></li>
          <li><a href="#">legal</a></li>
          <li><a href="#">contact us</a></li>
        </ul>
        <hr />
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="links">
          <a href="#"><i className="fab fa-linkedin-in"><FaFacebookF size={30} style={{marginBottom:'6px'}}/></i></a>
          <a href="#"><i className="fab fa-facebook-f"><ImLinkedin2 size={30} style={{marginBottom:'7px'}}/></i></a>
          <a href="#"><i className="fab fa-twitter"><MdAddCall size={30} style={{marginBottom:'4px'}}/></i></a>
          <a href="#"><i className="fab fa-instagram"><TfiEmail size={30} style={{marginBottom:'4px'}}/></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
