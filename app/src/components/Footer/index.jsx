import "../../styles/Footer.css";
import { Link } from "react-router-dom";
import PhoneNumber from "../../components/PhoneNumber";
import googleIcon from "../../assets/google-plus-g.svg";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="/" className="google-icon_a">
          <img src={googleIcon} alt="Icone Google" />
        </Link>
        <p>
          <i>
            crédit - 2017 - 2024 - ANGEL DUMONTANT - MONTPELLIER - 41 15 10 20
            30
          </i>
        </p>
        <PhoneNumber phoneNumber={"41 15 10 20 30"} />
        <p>
          <i>
            disclaimer à modifier : Selon les dispositions de l'Article 4312-37
            du code de la santé publique, le présent site de Madame NOM ne
            présente pas d'aspect promotionnel. Sa seule motivation est
            l'information de la patientèle fréquentant le cabinet.
          </i>
        </p>
        <div className="footer-lien-ordre">
          Lien :{" "}
          <Link to="https://www.ordre-infirmiers.fr/">
            Ordre National des Infirmers
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
