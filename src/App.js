import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Adminp from './Pages/Adminp';
import Hero from "./Components/LandingPage/Hero";
import Navbar from "./Components/LandingPage/Navbar";
import Section3 from "./Components/LandingPage/Section3";
import FeatureSection from "./Components/LandingPage/FeatureSection";
import HowItWorksSection from "./Components/LandingPage/HowItWorksSection";
import PricingSection from "./Components/LandingPage/PricingSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <Section3 />
      <FeatureSection /> 
      <HowItWorksSection/>
      <PricingSection/> 

      <Router>
        <div>
          <Routes>
            <Route path='/admin' element = { <Adminp/> } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
