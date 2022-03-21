import ResponsiveAppBar from "./components/sections/MainNavigation";
import Welcome from "./components/sections/Welcome";
import Utilities from "./components/sections/Utilities";
import Traits from "./components/sections/Traits";
import Roadmap from "./components/sections/Roadmap";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Welcome />
      <Utilities />
      <Traits />
      <Roadmap />
    </>
  );
}

export default App;
