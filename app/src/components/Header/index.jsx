import "../../styles/Header.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  const { src } = props;
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={src} alt="Infirmière Logo" />
        <p>ANGEL DUMONTANT</p>
      </NavLink>
      <div className="main-nav-menu">
        <NavLink to="/">
          <p>Votre Infirmière</p>
        </NavLink>
        <NavLink to="/">
          <p>Infos</p>
        </NavLink>
        <NavLink to="/">
          <p>Contact</p>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
