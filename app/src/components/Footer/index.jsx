import "../../styles/Footer.css";
import { Link } from "react-router-dom";
import PhoneNumber from "../../components/PhoneNumber";

import googleIcon from "../../assets/google-plus.svg";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="https://g.co/kgs/ttfcNpL" target="_blank" rel="noopener noreferrer" className="google-icon_a">
          <img src={googleIcon} alt="Icone Google" />
        </Link>
        <p>
          <i>
            DEBORAH COSTE - 93 Rue de l'Ancien Hôpital, 84100 Orange - 06 07 40 54 64
          </i>
        </p>
        <PhoneNumber phoneNumber={"06 07 40 54 64"} />
        <p className="footer-article">
          <i>
            Selon l'Article R4312-37
            de la Section 2 du code de la Santé Publique : La profession d'infirmier ou d'infirmière ne 
            doit pas être pratiquée comme un commerce. Tous les procédés directs 
            ou indirects de réclame ou publicité sont interdits aux infirmiers ou 
            infirmières. La seule motivation de Madame Coste est
            l'information de la patientèle sur les pratiques, la méthode de contact ainsi que les horaires.
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
