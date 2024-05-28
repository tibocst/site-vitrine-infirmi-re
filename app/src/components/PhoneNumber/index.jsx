import "../../styles/PhoneNumber.css";

import phoneIcon from '../../assets/phone.svg'

function PhoneNumber(props) {
    const { phoneNumber } = props;
  return (
    <div className="phone-number">
        <img src={phoneIcon} alt="icone de téléphone" />
        <p id="phone-number_p">{phoneNumber}</p>
    </div>
  );
}

export default PhoneNumber;