import React from 'react'
import NavBar from './landingPageComponents/Navbar/Navbar';
import Hero from "./landingPageComponents/heroSection/Hero";
import FeatureSection from "./landingPageComponents/FeatureSection";
import HowItWorksSection from "./landingPageComponents/HowItWorksSection";
import PricingSection from "./landingPageComponents/PricingSection";
import OurCustomer from './landingPageComponents/ourCustomer/OurCustomer'
import GetStarted from "./landingPageComponents/GetStarted";
import Footer from "./landingPageComponents/footer/Footer";
 import Experience from './landingPageComponents/Experience/Experience';

function LandingComponent() {
    return (
        <>
            <NavBar />
            <Hero />
            <Experience />
            <FeatureSection />
            <HowItWorksSection />
            <PricingSection />
            <OurCustomer />
            <GetStarted />
            <Footer />

        </>
    )
}

export default LandingComponent;