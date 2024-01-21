// Import React and any other necessary modules
import React from 'react';
import './Footer.css'; // Make sure to import your CSS file

// Define your Footer component
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
      </div>
      <div className="footer-col">
        <h4>company</h4>
        <ul>
          <li><a href="#">about</a></li>
          <li><a href="#">legal</a></li>
          <li><a href="#">contact us</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="links">
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
