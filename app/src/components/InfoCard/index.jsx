import "../../styles/InfoCard.css";

function InfoCard(props) {
  const { text, icon, altIcon } = props;
  return (
    <div className="info-card">
        <div><div><img src={icon} alt={altIcon} /></div></div>
        
      
      <p>{text}</p>
    </div>
  );
}

export default InfoCard;
