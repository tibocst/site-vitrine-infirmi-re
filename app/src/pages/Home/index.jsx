import "../../styles/Home.css";
import pdp from "../../assets/infirmiere-seringue.jpg";
import plaque from "../../assets/plaque.jpg";
import PhoneNumber from "../../components/PhoneNumber";
import phone from '../../assets/phone-solid.svg'
import location from '../../assets/location-dot-solid.svg'
import graduation from '../../assets/graduation-cap-solid.svg'
import calendar from '../../assets/calendar-check-solid.svg'
import InfoCard from "../../components/InfoCard";

function Home() {
  return (
    <div className="home">
      <div className="home-main-info">
        <h2>Bienvenue au cabinet de</h2>
        <h1>ANGEL DUMONTANT, INFIRMIÈRE À MONTPELLIER</h1>
        <PhoneNumber phoneNumber={"41 15 10 20 30"} />
      </div>
      <div className="home-info">
        <div className="home-info-pdp">
          <div>
            <div className="home-info-pdp_img">
              <img src={pdp} alt="infirmière" />
            </div>
          </div>
          <div className="home-info-pdp_text">
            <h1>VOTRE INFIRMIÈRE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              rutrum sed libero non ornare. Morbi nec pellentesque dolor, id
              vulputate ipsum. Nulla facilisi. Nulla in luctus nisl. Suspendisse
              augue odio, vehicula ut placerat nec, condimentum eget augue.
              Quisque condimentum ipsum ut ipsum ultrices consequat. Morbi vel
              congue nunc. Etiam aliquam elementum rutrum. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Vestibulum varius, turpis eu bibendum mattis, ante urna tempus
              libero, sit amet volutpat mauris libero ac neque.
            </p>{" "}
            <p>
              Vestibulum elit erat, efficitur eu porttitor in, tempus at metus.
              Sed vehicula nibh tincidunt quam pellentesque, vel sollicitudin
              quam pretium. Morbi in risus vehicula, pellentesque urna sed,
              pellentesque nisl. Donec a quam libero. Morbi eu odio ut eros
              efficitur placerat. Aliquam lacinia mi nibh, non ultricies tortor
              pellentesque ac. Vivamus pretium ante mi. Cras fringilla libero a
              elit cursus feugiat. Nulla quam lorem, rutrum in leo ut, mattis
              consectetur lorem. Mauris auctor lacus risus, semper viverra lorem
              porta in. Vestibulum id nisl ut dolor tincidunt maximus. Nullam
              odio risus, molestie non convallis id, ultrices eget metus. Fusce
              egestas nisl vitae dolor laoreet, porttitor tincidunt lacus
              scelerisque. Sed ultricies risus in tellus semper, eu dapibus erat
              sollicitudin. Nam rutrum elit sed maximus consectetur. Morbi ipsum
              lorem, sodales vitae mi sit amet, hendrerit suscipit est. Quisque
              placerat finibus eros sed facilisis. Ut tristique hendrerit orci,
              eu viverra mauris facilisis eu. Suspendisse scelerisque nisi vel
              nibh feugiat sagittis. Donec cursus non dui non mollis. Donec
              mattis nunc odio, sed aliquet nunc sagittis in. Aenean vulputate
              mauris sed gravida sagittis.{" "}
            </p>{" "}
            <p>
              Sed nec venenatis ipsum. Etiam mattis eu lacus volutpat congue.
              Sed gravida, ipsum quis interdum pellentesque, ex mi dictum elit,
              vitae malesuada lacus nibh sit amet ex. Fusce sagittis urna eu
              neque gravida commodo. Curabitur dignissim faucibus volutpat. Sed
              non urna a velit pharetra sodales. Maecenas porta non urna at
              iaculis. Quisque feugiat consequat pharetra. Quisque et semper
              nibh, ac volutpat quam. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Nulla venenatis
              auctor ante ac rutrum.
            </p>{" "}
            <p>
              {" "}
              Cras euismod nunc fringilla justo rhoncus, id lobortis mauris
              pulvinar. Nam aliquet magna id augue porttitor, a maximus libero
              congue. Sed metus turpis, dignissim quis dapibus vitae, cursus
              quis orci. Etiam rutrum fermentum tortor, a ornare lectus iaculis
              eu. Vestibulum fringilla massa at quam scelerisque porttitor. Sed
              condimentum at tellus id pharetra. Quisque pretium mi ipsum, a
              luctus tellus hendrerit eu. Suspendisse potenti. Sed interdum
              scelerisque vestibulum.
            </p>
          </div>
        </div>
        <div className="home-info-pratique">
          <h1>INFORMATIONS PRATIQUES</h1>
          <div className="home-info-pratique_card">
            <InfoCard icon={graduation} text={"Carte vitale et tiers payant"} altIcon={"graduation logo"} />
            <InfoCard icon={location} text={"Cabinet et Domicile"} altIcon={"location logo"} />
            <InfoCard icon={calendar} text={"7 jours sur 7"} altIcon={"calendar logo"} />
            <InfoCard icon={phone} text={"41 15 10 20 30"} altIcon={"phone logo"} />
          </div>
        </div>
        <div className="home-info-soin">
          <h1>SOINS INFIRMIERS DOMICILE ET CABINET À MONTPELLIER</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum
            sed libero non ornare. Morbi nec pellentesque dolor, id vulputate
            ipsum. Nulla facilisi. Nulla in luctus nisl. Suspendisse augue odio,
            vehicula ut placerat nec, condimentum eget augue. Quisque
            condimentum ipsum ut ipsum ultrices consequat. Morbi vel congue
            nunc. Etiam aliquam elementum rutrum. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae;
            Vestibulum varius, turpis eu bibendum mattis, ante urna tempus
            libero, sit amet volutpat mauris libero ac neque.
          </p>{" "}
          <p>
            Vestibulum elit erat, efficitur eu porttitor in, tempus at metus.
            Sed vehicula nibh tincidunt quam pellentesque, vel sollicitudin quam
            pretium. Morbi in risus vehicula, pellentesque urna sed,
            pellentesque nisl. Donec a quam libero. Morbi eu odio ut eros
            efficitur placerat. Aliquam lacinia mi nibh, non ultricies tortor
            pellentesque ac. Vivamus pretium ante mi. Cras fringilla libero a
            elit cursus feugiat. Nulla quam lorem, rutrum in leo ut, mattis
            consectetur lorem. Mauris auctor lacus risus, semper viverra lorem
            porta in. Vestibulum id nisl ut dolor tincidunt maximus. Nullam odio
            risus, molestie non convallis id, ultrices eget metus. Fusce egestas
            nisl vitae dolor laoreet, porttitor tincidunt lacus scelerisque. Sed
            ultricies risus in tellus semper, eu dapibus erat sollicitudin. Nam
            rutrum elit sed maximus consectetur. Morbi ipsum lorem, sodales
            vitae mi sit amet, hendrerit suscipit est. Quisque placerat finibus
            eros sed facilisis. Ut tristique hendrerit orci, eu viverra mauris
            facilisis eu. Suspendisse scelerisque nisi vel nibh feugiat
            sagittis. Donec cursus non dui non mollis. Donec mattis nunc odio,
            sed aliquet nunc sagittis in. Aenean vulputate mauris sed gravida
            sagittis.{" "}
          </p>
        </div>
        <div className="home-info-contact">
          <div>
            <h1>NOUS CONTACTER</h1>
            <p>
              Vestibulum elit erat, efficitur eu porttitor in, tempus at metus.
              Sed vehicula nibh tincidunt quam pellentesque, vel sollicitudin
              quam pretium. Morbi in risus vehicula, pellentesque urna sed,
              pellentesque nisl. Donec a quam libero. Morbi eu odio ut eros
              efficitur placerat. Aliquam lacinia mi nibh, non ultricies tortor
              pellentesque ac. Vivamus pretium ante mi. Nullam odio risus,
              molestie non convallis id, ultrices eget metus. Ut tristique
              hendrerit orci, eu viverra mauris facilisis eu. Suspendisse
              scelerisque nisi vel nibh feugiat sagittis. Donec cursus non dui
              non mollis. Donec mattis nunc odio, sed aliquet nunc sagittis in.
              Aenean vulputate mauris sed gravida sagittis.{" "}
            </p>{" "}
            <p>
              Fusce egestas nisl vitae dolor laoreet, porttitor tincidunt lacus
              scelerisque. Sed ultricies risus in tellus semper, eu dapibus erat
              sollicitudin. Nam rutrum elit sed maximus consectetur. Morbi ipsum
              lorem, sodales vitae mi sit amet, hendrerit suscipit est. Quisque
              placerat finibus eros sed facilisis.
            </p>{" "}
            <p>
              Cras fringilla libero a elit cursus feugiat. Nulla quam lorem,
              rutrum in leo ut, mattis consectetur lorem. Mauris auctor lacus
              risus, semper viverra lorem porta in. Vestibulum id nisl ut dolor
              tincidunt maximus.
            </p>
            <PhoneNumber phoneNumber={"41 15 10 20 30"} />
          </div>
          <div>
            <img src={plaque} alt="plaque" />
          </div>
        </div>
        <div className="map"></div>
      </div>
    </div>
  );
}

export default Home;
