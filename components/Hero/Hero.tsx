import React from 'react';
import Link from 'next/link';
import { Search, Calendar, Users } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const HeroSection = () => {
  return (
    <>
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
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center">
          <h1 className="text-6xl font-extrabold mb-6 tracking-tight leading-tight animate-fade-in-up text-gray-900">
            Discover Your Next Adventure
          </h1>
          <p className="text-2xl mb-12 max-w-2xl animate-fade-in-up animation-delay-300 text-gray-800">
            Explore extraordinary destinations and create unforgettable memories with our curated travel experiences.
          </p>
          <div className="flex space-x-4 animate-fade-in-up animation-delay-600">
            <Link href="/auth/signin"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                Login
            </Link>
            <Link href="/auth/signin"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                Signup
            </Link>
          </div>
          
          {/* Search Bar */}
          <div className="mt-16 w-full max-w-4xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-lg flex flex-wrap gap-4 animate-fade-in-up animation-delay-900">
            <div className="flex-grow flex items-center bg-white bg-opacity-30 rounded-lg px-4 py-2">
              <Search className="text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="bg-transparent text-gray-900 placeholder-gray-600 focus:outline-none flex-grow"
              />
            </div>
            <div className="flex items-center bg-white bg-opacity-30 rounded-lg px-4 py-2">
              <Calendar className="text-gray-600 mr-2" />
              <input
                type="date"
                placeholder="Check in"
                className="bg-transparent text-gray-900 placeholder-gray-600 focus:outline-none"
              />
            </div>
            <div className="flex items-center bg-white bg-opacity-30 rounded-lg px-4 py-2">
              <Calendar className="text-gray-600 mr-2" />
              <input
                type="date"
                placeholder="Check out"
                className="bg-transparent text-gray-900 placeholder-gray-600 focus:outline-none"
              />
            </div>
            <div className="flex items-center bg-white bg-opacity-30 rounded-lg px-4 py-2">
              <Users className="text-gray-600 mr-2" />
              <select className="bg-transparent text-gray-900 focus:outline-none">
                <option value="" disabled selected hidden>Guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4+ Guests</option>
              </select>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              Search
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="absolute bottom-0 w-full z-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HeroSection;