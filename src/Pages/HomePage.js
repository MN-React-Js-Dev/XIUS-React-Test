import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import PowerGenrerationSection from "../Components/PowerGenrerationSection";
import AboutIMS from "../Components/AboutIMS";
import ImsBenifitsSection from "../Components/ImsBenifitsSection";
import ServiceProvider from "../Components/ServiceProvider";
import FeatureImsSection from "../Components/FeatureImsSection";
import ContactUsSection from "../Components/ContactUsSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PowerGenrerationSection />
      <AboutIMS />
      <ImsBenifitsSection />
      <ServiceProvider />
      <FeatureImsSection />
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default HomePage;
