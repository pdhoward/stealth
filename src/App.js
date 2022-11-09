import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import hero from "./hero-ai.png";
import Footer from "./components/Footer";
import HomeMain from "./components/HomeMain";

function App() {
  return (
    <div>
      <header>
        <Navbar logo={logo} />
        <Hero hero={hero} />
      </header>
      <HomeMain />
      <Footer />
    </div>
  );
}

export default App;
