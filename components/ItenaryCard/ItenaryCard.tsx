// components/DynamicItinerary.tsx
import React from 'react';

interface DayDetail {
  dayNumber: number;
  title: string;
  description: string;
  services: string[];
}

interface ItineraryProps {
  itinerary: DayDetail[];
}

const ItenaryCard: React.FC<ItineraryProps> = ({ itinerary }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {itinerary.map((day, index) => (
        <div key={index} className="flex mb-8">
          {/* Day Circle */}
          <div className="flex-shrink-0 mr-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-red-500 text-red-500 font-bold text-xl">
              {String(day.dayNumber).padStart(2, '0')}
            </div>
          </div>

          {/* Day Content */}
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Day {day.dayNumber}: {day.title}
            </h3>
            <p className="text-gray-500 mb-4">{day.description}</p>

            {/* Services List */}
            <ul className="list-none space-y-2">
              {day.services.map((service, serviceIndex) => (
                <li key={serviceIndex} className="flex items-center">
                  <span className="material-icons text-green-500 mr-2">check_circle</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItenaryCard;
