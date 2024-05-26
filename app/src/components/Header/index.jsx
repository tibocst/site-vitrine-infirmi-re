import "../../styles/Header.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function goToHash(hash) {
  
  if (hash) {
    const element = document.getElementById(hash.replace("#", ""));
    if (element) {
      const yOffset = -100;
      const yPosition =
        element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
    // eslint-disable-next-line no-restricted-globals
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

function Header(props) {
  const { src } = props;
  const { hash } = useLocation();
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={src} alt="Infirmière Logo" />
        <p>Déborah COSTE</p>
      </NavLink>
      <div className="main-nav-menu">
        <NavLink to="#votre-infirmiere" onClick={goToHash(hash)}>
          <p>Votre Infirmière</p>
        </NavLink>
        <NavLink to="#infos" onClick={goToHash(hash)}>
          <p>Infos</p>
        </NavLink>
        <NavLink to="#contact" onClick={goToHash(hash)}>
          <p>Contact</p>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
