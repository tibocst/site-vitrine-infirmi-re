import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from './pages/Error'

const LOGO = require("./assets/pngegg.png");

function App() {
  return (
    <Router>
      <Header src={LOGO} />
      {/* <ExplicationSite /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
