import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Search, Calendar, Users } from 'lucide-react';

const HeroForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [dates, setDates] = useState({ start: '', end: '' });
  const [guests, setGuests] = useState('');

  const router = useRouter();

  const availableTags = ['Adventure', 'Sightseeing', 'Trek', 'Leisure', 'Relaxation', 'Cultural'];

  // Mock function to fetch suggestions
  const fetchSuggestions = async (term: string) => {
    const mockSuggestions = ['Paris', 'New York', 'Tokyo', 'London', 'Rome', 'New Jersey'].filter(city =>
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

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/generate-itenary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ destination: searchTerm, dates, guests, tags: selectedTags }),
    });
    const data = await response.json();
    // Use router to navigate to explore page with itinerary data
    router.push({
      pathname: '/explore',
      query: { itinerary: JSON.stringify(data.itinerary) },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 mb-4">
        <Search className="text-gray-500 mr-3" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Where do you want to go?"
          className="bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none w-full"
        />
        {suggestions.length > 0 && (
          <ul className="absolute top-full left-0 right-0 bg-white mt-1 rounded-lg shadow-lg z-30">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-900"
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

      <div className="flex space-x-4 mb-4">
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-full">
          <Calendar className="text-gray-500 mr-3" />
          <input
            type="date"
            value={dates.start}
            onChange={(e) => setDates({ ...dates, start: e.target.value })}
            placeholder="Check in"
            className="bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none w-full"
          />
        </div>
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-full">
          <Calendar className="text-gray-500 mr-3" />
          <input
            type="date"
            value={dates.end}
            onChange={(e) => setDates({ ...dates, end: e.target.value })}
            placeholder="Check out"
            className="bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none w-full"
          />
        </div>
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 w-full">
          <Users className="text-gray-500 mr-3" />
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="bg-transparent text-gray-900 focus:outline-none w-full"
          >
            <option value="" disabled selected hidden>
              Guests
            </option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4+ Guests</option>
          </select>
        </div>
      </div>

      <div className="w-full mb-4">
        <p className="text-sm text-gray-700 font-semibold mb-2">What would you like to do?</p>
        <div className="flex flex-wrap gap-2">
          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedTags.includes(tag)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              } hover:bg-blue-500 hover:text-white transition-colors`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
        Search
      </button>
    </form>
  );
};

export default HeroForm;