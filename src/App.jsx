// importing Browser Router to build the skeleton of our page
import { BrowserRouter } from "react-router-dom";
// bringin in all our components
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Resume,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-superPrimary">
        <div className="bg-hero-pattern4 bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Works />
        <Experience />
        <Tech />
        <Feedbacks />
        <StarsCanvas />
        <div className="relative z-0 ">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
