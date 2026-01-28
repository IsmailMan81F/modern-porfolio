import "./App.css";
import Nav from "./components/navigation/Nav";
import Hero from "./components/hero/Hero";
import Backgroundgrid from "./components/background/Backgroundgrid";
import RightSpotlight from "./components/spotlight/LeftSpotlight";
import LeftSpotlight from "./components/spotlight/RightSpotlight";
function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Backgroundgrid />
      <RightSpotlight />
      <LeftSpotlight />
    </div>
  );
}

export default App;
