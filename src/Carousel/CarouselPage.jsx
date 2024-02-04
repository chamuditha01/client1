import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import "./CarouselPage.css";
import logo1 from "./logo1.png";

import NavItems from "../Navitems";

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarBackground = scrolling
    ? "black"
    : "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))";

  return (
    <div>
      <Navbar
        style={{ background: navbarBackground }}
        expand="lg"
        variant="dark"
        fixed="top"
      >
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
              style={{
                backgroundColor: "yellow",
                marginLeft: "auto",
                borderRadius: "5px",
                width: "40px",
                padding: "0px",
                borderStyle: "none",
              }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavItems NavItem id={"nav1"} name={"Home"} path={"/"} />
                <NavItems
                  NavItem
                  id={"nav1"}
                  name={"About Us"}
                  path={"/service"}
                />
                <li className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle "
                    href="#"
                    id="u1"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <div
                  style={{backgroundColor:'black'}}
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    id="a1"
                  >
                    <a  className="" href="/category1">
                      Clothes
                    </a>
                    <a className="" href="/category2">
                      Electronics
                    </a>
                    <a className="" href="/category2">
                      Electronics
                    </a>
                    <a className="" href="/category2">
                      Electronicss
                    </a>
                    <a className="" href="/category2">
                      Electronics
                    </a>
                    <a className="" href="/category2">
                      Electronics
                    </a>
                    <a className="" href="/category2">
                      Electronics
                    </a>
                    <a className="" href="/category2">
                      Electronics
                    </a>
                  </div>
                </li>{" "}
                <a className="navbar-brand" href="/">
                  <img style={{ width: "110px" }} src={logo1} alt="Logo" />
                </a>
              </ul>

              <ul className="navbar-nav mb-2 mb-lg-0 right">
                <NavItems
                  NavItem
                  id={"nav"}
                  name={"Contact Us"}
                  path={"/login"}
                />
              </ul>
            </div>
          </div>
        </nav>
      </Navbar>

      <Carousel fade={true}>
        <Carousel.Item>
          <img
            style={{ height: "80vh", objectFit: "cover" }}
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
            style={{ height: "80vh", objectFit: "cover" }}
            className="d-block w-100"
            src={img2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "80vh", objectFit: "cover" }}
            className="d-block w-100"
            src={img3}
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
