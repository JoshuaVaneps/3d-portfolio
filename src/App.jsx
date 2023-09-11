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
  Works,
  StarsCanvas,
  Footer,
  Tech,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-superPrimary">
        <div className="bg-hero-pattern4 bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Experience />
        <Tech />
        <Feedbacks />
        <div className="relative z-0 ">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
