import React from 'react';

interface ItenaryDescriptionProps {
  price: number;
  description: string;
  duration: string;
  maxPeople: number;
  location: string;
}

const ItenaryDescription: React.FC<ItenaryDescriptionProps> = ({ price, description, duration, maxPeople, location }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      {/* Pricing and Title */}
      <div className="flex items-center mb-4">
        <div className="text-3xl font-bold">${price}</div>
        <div className="text-lg text-2xl ml-2">/Person</div>
      </div>

      {/* Main Description */}
      <p className="text-gray-500 mb-4">
        {description}
      </p>

      {/* Info List */}
      <div className="flex items-center mb-6 space-x-4">
        <div className="flex items-center">
          <span className="material-icons mr-2">event</span>
          {duration}
        </div>
        <div className="flex items-center">
          <span className="material-icons mr-2">location_on</span>
          {location}
        </div>
      </div>
    </div>
  );
};

export default ItenaryDescription;
