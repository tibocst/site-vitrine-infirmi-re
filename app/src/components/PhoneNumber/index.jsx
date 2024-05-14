import "../../styles/PhoneNumber.css";
import phoneIcon from '../../assets/phone-solid.svg'

function PhoneNumber(props) {
    const { phoneNumber } = props;
  return (
    <div className="phone-number">
        <img src={phoneIcon} alt="inconne de téléphone" />
        <p>{phoneNumber}</p>
    </div>
  );
}

export default PhoneNumber;