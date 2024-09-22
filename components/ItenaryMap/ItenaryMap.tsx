import dynamic from 'next/dynamic';
import React from 'react';
import 'leaflet/dist/leaflet.css';

// Dynamically import MapContainer and related components
const MapWithNoSSR = dynamic(() => import('./LeafletMap'), { 
  ssr: false, 
  loading: () => <p>Loading map...</p>, // Optional: a fallback while the map is loading
});

const ItineraryMap: React.FC = () => {
  return (
    <div className="p-8 max-w-screen-md mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Location</h1>
      <p className="text-center text-gray-500 mb-8">
        Get oriented with Manali and its surroundings.
      </p>

      {/* Render the map dynamically without SSR */}
      <MapWithNoSSR />
    </div>
  );
};

export default ItineraryMap;
