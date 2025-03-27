import "./Navbar.css";
import kelmac_logo from "../images/kelmac_logo_2.png";

const Navbar = () => {
  const navData = [
    {
      href: "/",
      title: `Home`,
    },
    {
      href: "/about-us",
      title: "About",
    },
    {
      href: "/courses",
      title: "Courses",
    },
    {
      href: "/training",
      title: "Training",
    },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-flex">
            <div>
              <a href="/" className="navbar-brand">
                <img className="kelmac-logo" src={kelmac_logo} alt="" />
              </a>
            </div>

            <div>
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
          <div className="mobile-menu">
            <button className="menu-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="menu-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
