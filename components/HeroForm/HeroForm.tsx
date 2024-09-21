import React, { useState, useEffect } from 'react';
import { Search, Calendar, Users } from 'lucide-react';

const HeroForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Mock function to fetch suggestions
  const fetchSuggestions = async (term) => {
    // Replace this with actual API call
    const mockSuggestions = ['Paris', 'New York', 'Tokyo', 'London', 'Rome', 'New Jersey',].filter(city => 
      city.toLowerCase().includes(term.toLowerCase())
    );
    return mockSuggestions;
  };

  useEffect(() => {
    if (searchTerm.length > 2) {
      fetchSuggestions(searchTerm).then(setSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  return (
    <div className="mt-16 w-full max-w-4xl bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-6 rounded-lg flex flex-wrap gap-4 animate-fade-in-up animation-delay-900">
      <div className="flex-grow flex items-center bg-white bg-opacity-30 rounded-lg px-4 py-2 relative">
        <Search className="text-gray-600 mr-2" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Where do you want to go?"
          className="bg-transparent text-gray-900 placeholder-gray-600 focus:outline-none flex-grow"
        />
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg mt-1 rounded-lg shadow-lg z-30">
            {suggestions.map((suggestion, index) => (
              <li 
                key={index}
                className="px-4 py-2 hover:bg-white hover:bg-opacity-100 cursor-pointer text-gray-900 transition duration-300 ease-in-out text-left"
                onClick={() => {
                  setSearchTerm(suggestion);
                  setSuggestions([]);
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
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
  );
};

export default HeroForm;