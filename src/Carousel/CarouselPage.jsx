import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import './CarouselPage.css';
import logo from './logo.jpg';
import per from './login.png';

import NavItems from '../Navitems';

function CarouselPage() {
  return (
    <div>
      <Navbar bg="transparent" expand="lg" variant="light" fixed="top">
        
          
          <nav className="navbar navbar-expand-lg custom-navbar" id="n1">
        <div className="container-fluid">

          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" />
          </a>

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

      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: '100vh' }}
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
            style={{ height: '100vh' }}
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
            style={{ height: '100vh' }}
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add other Carousel.Items as needed */}
      </Carousel>
    </div>
  );
}

export default CarouselPage;
