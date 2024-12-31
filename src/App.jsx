import Hero from "./components/Hero";
import HeroContent from "./components/HeroContent";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="w-full h-screen relative bg-[#C45468]">
      <Hero />
      <div className="absolute z-10 w-full h-full">
        <NavBar />
      </div>
      <HeroContent />
    </div>
  );
};

export default App;
