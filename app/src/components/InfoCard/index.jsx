import { Helmet } from 'react-helmet-async';
import "../../styles/InfoCard.css";

function InfoCard(props) {
  const { text, icon, altIcon } = props;
  return (
    <div className="info-card">
      <Helmet>
        <meta name="description" content={`Information sur ${text}`} />
      </Helmet>
        <div><div><img src={icon} alt={altIcon} /></div></div>
        
      
      <p>{text}</p>
    </div>
  );
}

export default InfoCard;
