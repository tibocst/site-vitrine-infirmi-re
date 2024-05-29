import "../../styles/Header.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PhoneNumber from "../../components/PhoneNumber";
import { useState, useEffect} from "react";

import menuBurger from "../../assets/menu-burger.svg";

function goToHash(hash) {
  if (hash) {
    const element = document.getElementById(hash.replace("#", ""));
    if (element) {
      const yOffset = -100;
      const yPosition =
        element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  }
}

function Header(props) {
  const { src } = props;
  const { hash } = useLocation();
  
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (hash) {
      goToHash(hash);
    }
  }, [hash,]);

  

  const toggleMenu = () => {
    console.log("passé menu");
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="#votre-infirmiere">
        <img className="main-nav-logo-image" src={src} alt="Infirmière Logo" />
        <p>Déborah COSTE</p>
      </NavLink>
      <img
        className="menu-toggle-button"
        onClick={toggleMenu}
        src={menuBurger}
        alt="menu burger"
      />
      <div className={`main-nav-menu ${menuOpen ? "active" : ""}`}>
        <NavLink
          to="#infos"
          onClick={() => {
            goToHash(hash);
            toggleMenu();
          }}
        >
          <p>Infos</p>
        </NavLink>
        <NavLink
          to="#contact"
          onClick={() => {
            goToHash(hash);
            toggleMenu();
          }}
        >
          <p>Contact</p>
        </NavLink>
        <NavLink
          to="tel:0607405464"
          onClick={() => {
            goToHash(hash);
            toggleMenu();
          }}
        >
          <PhoneNumber phoneNumber={"06 07 40 54 64"} />
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
