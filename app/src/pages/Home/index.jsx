import "../../styles/Home.css";
import PhoneNumber from "../../components/PhoneNumber";
import InfoCard from "../../components/InfoCard";

import pdp from "../../assets/pdp-deb.png";
import pdpFull from "../../assets/4395713d-9b68-4da7-90e7-41735375f9be.jpg";
import phone from "../../assets/phone-solid.svg";
import house from "../../assets/house-medical-solid.svg";
import card from "../../assets/id-card-solid.svg";
import calendar from "../../assets/calendar-check-solid.svg";
import check from "../../assets/circle-check-solid.svg";
import dalia from "../../assets/dahlia-8209085_1920.jpg";
import blossom from "../../assets/blossom-165998_1920.jpg";

function Home() {
  return (
    <div className="home" id="votre-infirmiere">
      <div className="home-main-info">
        <h2>Bienvenue au cabinet de</h2>
        <h1>DEBORAH COSTE, INFIRMIÈRE À ORANGE</h1>
        <PhoneNumber phoneNumber={"06 07 40 54 64"} />
      </div>
      <div className="home-info">
        <div className="home-info-display">
          <div className="home-info-display-line-first" id="infos">
            <div>
              <img src={pdpFull} alt="infirmière" />
            </div>
            <div>
              <h1>INFORMATIONS PRATIQUES</h1>
              <div className="home-info-display_card">
                <div>
                  <InfoCard
                    icon={card}
                    text={"Carte vitale et tiers payant"}
                    altIcon={"card logo"}
                  />
                  <InfoCard
                    icon={house}
                    text={"Domicile et Cabinet"}
                    altIcon={"location logo"}
                  />
                </div>
                <div>
                  <InfoCard
                    icon={calendar}
                    text={"7 jours sur 7"}
                    altIcon={"calendar logo"}
                  />
                  <InfoCard
                    icon={phone}
                    text={"06 07 40 54 64"}
                    altIcon={"phone logo"}
                  />
                </div>
              </div>
            </div>
            <div>
              <img src={dalia} alt="fleur dalia" />
            </div>
          </div>
          <div className="home-info-display-line-second">
            <div>
              <h1>VOTRE INFIRMIÈRE</h1>
              <div>
                <p>
                  Situés sur la ville d'<b>Orange (84100)</b>, nous assurons
                  tous types de soins infirmiers tous les jours.{" "}
                </p>
                <p>
                  Notre cabinet comporte uniquement des infirmières{" "}
                  <b>diplômées d'État</b> répondant à l'Ordre des infirmiers.
                </p>
                <p>
                  Elles seront <b>bienveillantes, professionnelle</b> et sauront
                  s'occuper de leur patientelle de la meilleure des manières.
                </p>
                <p>
                  Les soins peuvent être pratiqués{" "}
                  <b>à domicile et au cabinet sur rendez-vous</b>. Ils
                  nécessiteront une prescription médicale.
                </p>
                <p>
                  Vous pouvez prendre rendez-vous avec nos infirmières au{" "}
                  <b>06 07 40 54 64</b>.
                </p>
              </div>
            </div>
            <div>
              <img src={blossom} alt="fleur blossom" />
            </div>
            <div>
              <h1>SOINS INFIRMIERS</h1>
              <div>
                <p>
                  Nous effectuons différents soins et prenons en charge tous
                  types de pathologies dans le cadre de :
                </p>{" "}
                <p>
                  <img className="check-green" src={check} alt="check icon" />{" "}
                  <b>vos soins de pansements et post opératoires</b>
                </p>
                <p>
                  <img className="check-green" src={check} alt="check icon" />{" "}
                  <b>vos prises de sang et perfusions</b>
                </p>
                <p>
                  <img className="check-green" src={check} alt="check icon" />{" "}
                  <b>vos soins diabétiques ou cancérologiques</b>
                </p>
                <p>
                  <img className="check-green" src={check} alt="check icon" />{" "}
                  <b>
                    d'autres types de soins médicaux sont évidemment disponibles
                  </b>
                </p>{" "}
                <p>
                  Du début de votre prise en charge jusqu'à votre guérison, nous
                  sommes <b>à l'écoute</b> de vos besoins et intervenons pour{" "}
                  <b>
                    éviter les douleurs et assurer une meilleure qualité de vie
                  </b>
                  . Nous nous déplaçons sur demande et sur rendez-vous sur
                  Orange uniquement. Nos soins sont effectués sur prescription
                  médicale. Nous pratiquons le <b>tiers payant</b> sur
                  présentation de la carte vitale et d'une mutuelle ou CMU. Nous
                  restons à votre disposition pour davantage de renseignement.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="home-info-display-line-third" id="contact">
            <div>
              <h1>NOUS CONTACTER</h1>
              <div className="home-info-display-line-third_text">
                <p>
                  Vous pouvez nous contacter grace{" "}
                  <b>au numéro de téléphone présent ci-dessous</b>.
                </p>{" "}
                <p>
                  Nous sommes disponnible pour toute question ou prise de
                  rendez-vous de <b>6h à 20h tous les jours</b>.
                </p>{" "}
                <p>
                  Nous pouvons exercer les soins à domicile mais aussi au
                  cabinet présent au{" "}
                  <b>93 Rue de l'Ancien Hôpital, 84100 Orange</b>.
                </p>
              </div>

              <PhoneNumber phoneNumber={"06 07 40 54 64"} />
            </div>
            <div>
              <iframe
                title="google map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.4327858422935!2d4.808111676202418!3d44.13632047108321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b59194152998e7%3A0xbe3448ca23b550c3!2sCabinet%20infirmier%20Coste%20D%C3%A9borah!5e0!3m2!1sfr!2sfr!4v1716473960727!5m2!1sfr!2sfr"
                width="800"
                height="600"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        {/* <div className="home-info-pdp">
          <div>
            <div>
              <div className="home-info-pdp_img"></div>
            </div>
            <div className="home-info-pdp_text" id="votre-infirmiere"></div>
          </div>
        </div>
        <div className="home-info-stack" id="home-info-stack">
          <div className="home-info-pratique" id="infos"></div>
          <div className="home-info-soin"></div>
        </div> */}

        {/* <div className="home-info-contact" id="contact">
          <div>
            
          </div>
          <div>
            
          </div>
        </div>
        <div className="map"></div> */}
      </div>
    </div>
  );
}

export default Home;
