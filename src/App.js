import ResponsiveAppBar from "./components/sections/MainNavigation";
import Welcome from "./components/sections/Welcome";
import Utilities from "./components/sections/Utilities";
import Traits from "./components/sections/Traits";
import Roadmap from "./components/sections/Roadmap";
import Faq from "./components/sections/Faq";
import Community from "./components/sections/Community";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <section className="first-view">
        <ResponsiveAppBar />
        <Welcome />
      </section>
      <Utilities />
      <Traits />
      <Roadmap />
      <Faq />
      <Community />
      <Footer />
    </>
  );
}

export default App;
