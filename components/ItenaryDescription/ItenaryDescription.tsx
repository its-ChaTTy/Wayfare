// components/ItenaryDescription.tsx
import React from 'react';

const ItenaryDescription: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-12">
      {/* Pricing and Title */}
      <div className="flex items-center mb-4">
        <div className="text-3xl font-bold">₹7500</div>
        <div className="text-lg text-2xl ml-2">/Person</div>
      </div>

      {/* Main Description */}
      <p className="text-gray-500 mb-4">
        Embark on an unforgettable 6-day, 5-night adventure to the breathtaking landscapes of Manali. Immerse yourself in the beauty of the Himalayas with a perfect blend of sightseeing and exhilarating treks. 
      </p>

      {/* Additional Info */}
      <p className="text-gray-500 mb-8">
        This carefully crafted itinerary will take you to iconic landmarks and hidden gems, offering stunning views and a chance to connect with nature. Get ready to create memories that will last a lifetime in the magical valley of Manali. 
      </p>

      {/* Info List */}
      <div className="flex items-center mb-6 space-x-4">
        <div className="flex items-center">
          6 Days / 5 Night
        </div>
        <div className="flex items-center">
          Manali
        </div>
      </div>

      {/* <div className="border-t pt-4">
        <h3 className="text-xl font-semibold mb-4">Price Includes</h3>
        <ul className="grid grid-cols-2 gap-4">
          <li className="flex items-center">
            <span className="material-icons text-green-500 mr-2">check_circle</span>
            3 Nights Accommodation
          </li>
          <li className="flex items-center">
            <span className="material-icons text-green-500 mr-2">check_circle</span>
            Airport Transfers
          </li>
          <li className="flex items-center">
            <span className="material-icons text-green-500 mr-2">check_circle</span>
            2 Meals / day
          </li>
          <li className="flex items-center">
            <span className="material-icons text-green-500 mr-2">check_circle</span>
            Box Lunch, Dinner & Snacks
          </li>
          <li className="flex items-center">
            <span className="material-icons text-green-500 mr-2">check_circle</span>
            On Trip Transport
          </li>
        </ul>
      </div>

      <div className="border-t pt-4 mt-4">
        <h3 className="text-xl font-semibold mb-4">Price Excludes</h3>
        <ul className="grid grid-cols-2 gap-4">
          <li className="flex items-center">
            <span className="material-icons text-red-500 mr-2">cancel</span>
            Departure Taxes
          </li>
          <li className="flex items-center">
            <span className="material-icons text-red-500 mr-2">cancel</span>
            Entry Fees
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default ItenaryDescription;