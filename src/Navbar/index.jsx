import NavItems from '../Navitems';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import logo from './logo.jpg';
import per from './login.png';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
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
              <NavItems NavItem id={"nav1"} name={'Service'} path={'/service'} />
              <NavItems NavItem id={"nav1"} name={'Pet Shop'} path={'/loginshop'} />
            </ul>

            <ul className="navbar-nav mb-2 mb-lg-0 right">
              <NavItems NavItem id={"nav"} name={'Login'} path={'/login'} />
              <a className="top" href="/login">
                <img id="per" src={per} alt="" />
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
