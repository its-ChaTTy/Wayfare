import React from 'react';
import Link from 'next/link';

const HeroText = () => {
  return (
        <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 text-center -mt-10">
      <h1 className="text-6xl font-extrabold mb-6 tracking-tight leading-tight animate-fade-in-up text-gray-900">
        Discover Your Next Adventure
      </h1>
      <p className="text-2xl mb-12 max-w-2xl animate-fade-in-up animation-delay-300 text-gray-800">
        Explore extraordinary destinations and create unforgettable memories with our curated travel experiences.
      </p>
      <div className="flex space-x-4 animate-fade-in-up animation-delay-600">
        <Link href="/auth/signin">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Login
          </button>
        </Link>
        <Link href="/auth/signup">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroText;