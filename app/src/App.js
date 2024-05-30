import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Helmet, HelmetProvider } from "react-helmet-async";

const LOGO = require("./assets/rythme-cardiaque.png");

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header src={LOGO} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
