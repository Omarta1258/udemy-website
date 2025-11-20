import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import PromoBar from "./components/Promo/PromoBar";
import SkillsSection from "./components/Skill-Section/SkillSection";
import AISection from "./components/AISection/AISection";
import TransformSkills from "./components/TransformSkills/TransformSkills";
import Trusted from "./components/TrustedCompanies/Trusted";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PromoBar />
      <SkillsSection />
      <AISection />
      <TransformSkills />
      <Trusted />
    </div>
  );
}

export default App;
