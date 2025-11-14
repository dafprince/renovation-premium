import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServiceDiscovery from './components/ServiceDiscovery';
import TrustSection from './components/TrustSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import ProjectVisualizer from './components/ProjectVisualizer';
import RenovationShowcase from './components/RenovationShowcase';
import ContactFooter from './components/ContactFooter';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <ServiceDiscovery />
        <RenovationShowcase />
        <TrustSection />
        <TestimonialCarousel />
        <ProjectVisualizer />
      </main>
      
      <ContactFooter />
    </div>
  );
};

export default Homepage;