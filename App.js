
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
