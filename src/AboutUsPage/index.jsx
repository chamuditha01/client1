import AboutUs from "../Aboutus/AboutUs";
import Footer from "../Footer/Footer";
import Navbar from "react-bootstrap/Navbar";
import logo2 from '../Carousel/logo1.png'
import { SlArrowDown } from "react-icons/sl";
import NavItems from '../Navitems/index.jsx';
import { useEffect,useState } from 'react';

function AboutUsPage(){

    const [scrolling, setScrolling] = useState(false);
  const isMobile = window.matchMedia("(max-width: 800px)").matches;

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

  const style = {
    marginTop: '100px',
    textAlign: 'left',
    marginLeft: '-25%' // Adjusting marginLeft based on mobile view
  };

  const navbarBackground = scrolling
    ? "white"
    : "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))";


    return(
        <div>
            <Navbar
        style={{ background: navbarBackground }}
        expand="lg"
        variant="dark"
        fixed="top"
      >
        <nav className="navbar navbar-expand-lg custom-navbar" id="n1">
          <a className="navbar-brand" href="/">
            <img
              id="i3"
              style={{
                width: "0px",
                marginTop: "-140px",
                marginBottom: "-140px",
              }}
              src={logo2}
              alt="Logo"
            />
          </a>
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
                backgroundColor: "#0de2f1 ",
                marginLeft: "auto",
                borderRadius: "5px",
                marginTop: "-40px",
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
                <NavItems NavItem name={"Home"} path={"/"} />
                <NavItems NavItem name={"About Us"} path={"/aboutus"} />
                <NavItems NavItem name={"Contact Us"} path={"#footer"} />

                <li className="nav-item dropdown ">
                  <a
                    className="nav-link "
                    href="#"
                    id="u1"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Categories <SlArrowDown />
                  </a>
                  <div
                    style={{
                      backgroundColor: "black",
                      borderRadius: "0px",
                      width: "300px",
                    }}
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    id="a1"
                  >
                    <a className="" href="/page1">
                      Electrical & Electronic
                    </a>
                    <a className="" href="/page2">
                      Construction, Engineering hardware
                    </a>
                    <a className="" href="/page3">
                      Spare Parts & Others
                    </a>
                    <a className="" href="/page4">
                      Engineering products and accessories
                    </a>
                    <a className="" href="/page5">
                      House Keeping, Laundry & Kitchen Departments
                    </a>
                    <a className="" href="/page6">
                      Marine, Cold room, Swimming Pool
                    </a>
                    <a className="" href="/page7">
                      Tools and Maintenance related
                    </a>
                  </div>
                </li>
                <a id="i2">
                  <img
                    style={{
                      width: "170px",
                      height: "200px",
                      marginTop: "-65px",
                      marginBottom: "-90px",
                      marginLeft: "85px",
                    }}
                    src={logo2}
                    alt="Logo"
                  />
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </Navbar>
            <div style={{marginTop:'132px'}}></div>
            <AboutUs/>
            <div style={{marginTop:'80px'}}></div>
            <Footer/>
        </div>
    )
}
export default AboutUsPage;