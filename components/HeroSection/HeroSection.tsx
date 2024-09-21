import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HeroText from '../HeroText/HeroText';
import HeroForm from '../HeroForm/HeroForm';

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-gray-900 text-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform scale-105 animate-slow-zoom"
        style={{
          backgroundImage: `url('/travel_bg.jpg')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-40" />
      
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>
      
      {/* Content */}
      <HeroText />
      <div className="relative z-30">
        <HeroForm />
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 w-full z-20">
        <Footer />
      </div>
    </div>
  );
};

export default HeroSection;