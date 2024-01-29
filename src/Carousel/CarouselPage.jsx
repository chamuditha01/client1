import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import './CarouselPage.css';
import logo1 from './logo1.png';
import per from './login.png';

import NavItems from '../Navitems';

function CarouselPage() {
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
<<<<<<< HEAD
      <Navbar
        bg={scrolling ? 'dark' : 'transparent'}
        expand="lg"
        variant="dark"
        fixed="top"
      >
=======
      <Navbar bg="transparent" expand="lg" variant="light" fixed="top" className="fixed-top">
>>>>>>> b56683786b26fe32284f77f42be629ab502e3119
        
          
          <nav className="navbar navbar-expand-lg custom-navbar" id="n1">
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
<<<<<<< HEAD
  <NavItems NavItem id={"nav1"} name={'Home'} path={'/'} />
  <NavItems NavItem id={"nav1"} name={'About Us'} path={'/service'} />
  <li className="nav-item dropdown ">
    <a
      className="nav-link dropdown-toggle "
      href="#"
      id="nav1"
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
      <a className="dropdown-item" href="/category2">
        Electronics
      </a>
      <a className="dropdown-item" href="/category2">
        Electronicss
      </a>
      <a className="dropdown-item" href="/category2">
        Electronics
      </a>
      <a className="dropdown-item" href="/category2">
        Electronics
      </a>
      <a className="dropdown-item" href="/category2">
        Electronics
      </a>
      <a className="dropdown-item" href="/category2">
        Electronics
      </a>
      {/* Add more categories as needed */}
    </div>
  </li>  <a className="navbar-brand" href="/">
            <img src={logo1} alt="Logo" />
          </a>
</ul>



=======
          <NavItems NavItem id={"nav1"} name={'Home'} path={'/'} />
          <NavItems NavItem id={"nav1"} name={'About Us'} path={'/service'} />
          <li className="nav-item dropdown ">
            <a
              className="nav-link dropdown-toggle "
              href="#"
              id="nav1"
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
              <a className="dropdown-item" href="/category2">
                Electronics
              </a>
              <a className="dropdown-item" href="/category2">
                Electronicss
              </a>
              <a className="dropdown-item" href="/category2">
                Electronics
              </a>
              <a className="dropdown-item" href="/category2">
                Electronics
              </a>
              <a className="dropdown-item" href="/category2">
                Electronics
              </a>
              <a className="dropdown-item" href="/category2">
                Electronics
              </a>
              {/* Add more categories as needed */}
            </div>
          </li>
        </ul>
>>>>>>> b56683786b26fe32284f77f42be629ab502e3119
            <ul className="navbar-nav mb-2 mb-lg-0 right">
              <NavItems NavItem id={"nav"} name={'Contact Us'} path={'/login'} />
              <a className="top" href="/login">
                <img id="per" src={per} alt="" />
              </a>
            </ul>
          </div>
        </div>
      </nav>

        
      </Navbar>

      <Carousel fade={true }>
        <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={img2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '80vh' }}
            className="d-block w-100"
            src={img3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

export default CarouselPage;
