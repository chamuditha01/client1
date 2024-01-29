// Navbar.jsx

import React, { useState, useEffect } from 'react';
import NavItems from '../Navitems';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import logo from './logo.jpg';
import per from './login.png';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg custom-navbar ${scrolling ? 'scrolling' : ''}`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItems NavItem id={"nav1"} name={'Home'} path={'/'} />
              <NavItems NavItem id={"nav2"} name={'About Us'} path={'/service'} />
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/category1">
                    Cloths
                  </a>
                  <a className="dropdown-item" href="/category2">
                    Electronics
                  </a>
                  {/* Add more categories as needed */}
                </div>
              </li>
            </ul>

            <ul className="navbar-nav mb-2 mb-lg-0 right">
              <NavItems NavItem id={"nav"} name={'Contact Us'} path={'/login'} />
              <a className="top" href="/login">
                <img id="per" src={per} alt="Login" />
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
