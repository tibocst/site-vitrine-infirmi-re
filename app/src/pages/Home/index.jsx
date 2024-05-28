import "../../styles/Home.css";
import PhoneNumber from "../../components/PhoneNumber";
import InfoCard from "../../components/InfoCard";
import { Link } from "react-router-dom";

import pdpFull from "../../assets/photo-de-profil.jpg";
import phone from "../../assets/phone.svg";
import house from "../../assets/house.svg";
import card from "../../assets/card.svg";
import calendar from "../../assets/calendar.svg";
import check from "../../assets/circle-check.svg";
import stetho from "../../assets/stetho.jpg";
import cardiaque from "../../assets/cardiaque.jpg";
import googleIcon from "../../assets/google-plus.svg";

function Home() {
  return (
    <div className="home" id="votre-infirmiere">
      <div className="home-main-info">
        <div className="home-main-info_text">
          <h2>Bienvenue au cabinet de</h2>
          <h1>Déborah Coste</h1>
          <h1 className="home-main-info_text_h1">INFIRMIÈRE LIBÉRALE À ORANGE</h1>
        </div>
        <div className="home-main-info_button">
          <div>
            {" "}
            {/* <h2>Pour prendre vos rendez-vous :</h2> */}
            <PhoneNumber phoneNumber={"06 07 40 54 64"} />
          </div>
          <Link
            to="https://g.co/kgs/ttfcNpL"
            target="_blank"
            rel="noopener noreferrer"
            className="google-link"
          >
            <div className="google-link-slide">
              <div className="google-link-slide_info">
                <p>Me trouver sur Google</p>
              </div>
            </div>
            <Link
              to="https://g.co/kgs/ttfcNpL"
              target="_blank"
              rel="noopener noreferrer"
              className="google-link-slide_icon"
            >
              <img src={googleIcon} alt="Icone Google" />
            </Link>
          </Link>
        </div>
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
              <img src={stetho} alt="fleur dalia" />
            </div>
          </div>
          <div className="home-info-display-line-second">
            <div>
              <h1>VOTRE INFIRMIÈRE</h1>
              <div>
                <p>
                  Infirmière diplômée d'état (IDE), j'effectue tout type de
                  soins et prise en charge sur le secteur d'Orange (84100)
                  <b> à votre domicile ou à mon cabinet sur rendez-vous</b> et
                  sur prescription médicale. En collaboration avec mes
                  collègues, j'assure la continuité des soins 7 jours/7 , de 6h
                  à 20h.{" "}
                </p>
                <p>
                  <b>Bienveillante et professionnelle</b> , je vous permets des
                  conditions de soins, de rétablissement ou de convalescence
                  optimales.
                </p>
                <p>
                  Contactez-moi pour tout renseignement et premier contact au{" "}
                  <b>06 07 40 54 64</b>.
                </p>
              </div>
            </div>
            <div>
              <img src={cardiaque} alt="stethoscope" id="stetho" />
            </div>
            <div>
              <h1>SOINS INFIRMIERS</h1>
              <div>
                <p>
                  Le cabinet effectue différents soins et prend en charge tous
                  types de pathologies dans le cadre de :
                </p>{" "}
                <p>
                  <img className="check-green" src={check} alt="check icon" />{" "}
                  <b>
                    vos soins de pansements, post opératoires et plaies
                    chroniques
                  </b>
                </p>
                <p>
                  <img className="check-green" src={check} alt="check icon" />{" "}
                  <b>vos prises de sang et perfusions</b>
                </p>
                <p>
                  <img className="check-green" src={check} alt="check icon" />{" "}
                  <b>
                    vos soins diabétiques ou cancérologiques et suivi de
                    pathologies chroniques
                  </b>
                </p>
                <p>
                  <img className="check-green" src={check} alt="check icon" />{" "}
                  <b>
                    Autres types de soins médicaux : administration de
                    traitement, préparation de semainiers, soins d'hygiène
                    permettant un maintien à domicile, etc...
                  </b>
                </p>{" "}
                {/* <p>
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
                </p>{" "} */}
              </div>
            </div>
          </div>
          <div id="purple-bar"></div>
          <div className="home-info-display-line-third" id="contact">
            <div>
              <h1>NOUS CONTACTER</h1>
              <div className="home-info-display-line-third_text">
                <p>
                  Mes collègues et moi-même sommes disponibles pour toute
                  question ou prise de rendez-vous de{" "}
                  <b>6h à 20h tous les jours</b>.
                </p>{" "}
                <p>
                  Nous exerçons les soins au domicile du patient ou au cabinet
                  situé <b>93 Rue de l'Ancien Hôpital, 84100 Orange</b>.
                </p>{" "}
                <p>
                  Besoin d'une infirmière? Un seul numéro pour nous joindre :
                </p>
              </div>

              <PhoneNumber phoneNumber={"06 07 40 54 64"} />
            </div>
            <div className="home-info-display-line-third_iframe">
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
