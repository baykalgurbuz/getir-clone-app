import Campaings from "./components/Campaings";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MobileApp from "./components/MobileApp";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <Categories />

      <Campaings />
      <Favorites />
      <MobileApp />
      <Cards />

      <Footer />
    </div>
  );
}

export default App;
