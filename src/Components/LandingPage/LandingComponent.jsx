import React from 'react'
import NavBar from './landingPageComponents/Navbar/Navbar';

import Hero from "./landingPageComponents/heroSection/Hero";
import Section3 from "./landingPageComponents/Section3";
import FeatureSection from "./landingPageComponents/FeatureSection";
import HowItWorksSection from "./landingPageComponents/HowItWorksSection";
import PricingSection from "./landingPageComponents/PricingSection";
import OurCustomer from './landingPageComponents/ourCustomer/OurCustomer'
import GetStarted from "./landingPageComponents/GetStarted";
import Footer from "./landingPageComponents/footer/Footer";

function LandingComponent() {
    return (
        <>
            <NavBar />
            <Hero />
            <Section3 />
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