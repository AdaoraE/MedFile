import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Adminp from './Pages/Adminp';
import Hero from "./Components/LandingPage/Hero";
import Navbar from "./Components/LandingPage/Navbar";
import Section3 from "./Components/LandingPage/Section3";
import FeatureSection from "./Components/LandingPage/FeatureSection";
import HowItWorksSection from "./Components/LandingPage/HowItWorksSection";
import PricingSection from "./Components/LandingPage/PricingSection";
import OurCustomer from "./Components/LandingPage/ourCustomer/OurCustomer";
import GetStarted from "./Components/LandingPage/GetStarted";
import Footer from "./Components/LandingPage/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero /> 
      <Section3 />
      <FeatureSection />
      <HowItWorksSection />
      <PricingSection />
      <OurCustomer />
      <GetStarted/>
      <Footer/>

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
