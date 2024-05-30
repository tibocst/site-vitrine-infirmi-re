import "../../styles/PhoneNumber.css";
import { Helmet } from "react-helmet-async";

import phoneIcon from "../../assets/phone.svg";

function PhoneNumber(props) {
  const { phoneNumber } = props;
  return (
    <div className="phone-number">
      <Helmet>
        <meta name="description" content={`Contactez-nous au ${phoneNumber}`} />
      </Helmet>
      <img src={phoneIcon} alt="icone de téléphone" />
      <p id="phone-number_p">{phoneNumber}</p>
    </div>
  );
}

export default PhoneNumber;
