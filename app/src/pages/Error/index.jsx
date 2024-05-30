import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import "../../styles/Error.css";

function Error() {
    return (
      <div className="error">
        <Helmet>
          <title>Page non trouvée - 404</title>
          <meta name="description" content="La page que vous demandez n'existe pas. Retournez sur la page d'accueil pour continuer votre navigation." />
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    )
  }
  
  export default Error