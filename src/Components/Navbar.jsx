import "../styles/Navbar.css";
import kelmac_logo from "../images/kelmac_logo_2.png";
import { navData } from "../Variables";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-flex">
            <a href="/" className="navbar-brand">
              <img className="kelmac-logo" src={kelmac_logo} alt="" />
            </a>

            <ul className="navbar-links">
              <li className="phone-number">+91 98920 98920</li>
              {navData.length > 0
                ? navData.map((nav, i) => (
                    <li key={i}>
                      <a href={nav.href} className="navbar-link">
                        {nav.title}
                      </a>
                    </li>
                  ))
                : ""}
              <li>
                <a href="/contact" className="contact-button">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
