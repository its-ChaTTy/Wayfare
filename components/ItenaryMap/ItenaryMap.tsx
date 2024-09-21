import { MapContainer, TileLayer, Marker, Popup, MarkerProps } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from 'react';

// Fix default icon issue with Leaflet in React
import "leaflet/dist/images/marker-shadow.png";

// Extend MarkerProps to include the icon property
interface CustomMarkerProps extends MarkerProps {
  icon?: L.Icon;
}

const ItenaryMap: React.FC = () => {
  const position = [52.2297, 21.0122]; // Latitude and Longitude for Warsaw, Poland
  
  // Custom marker icon
  const customIcon = L.icon({
    iconUrl: "marker_icon.png", // Place your custom icon in the /public/images/ folder
    shadowUrl: "leaflet/dist/images/marker-shadow.png",
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  });

  return (
    <div className="p-8 max-w-screen-md mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Location</h1>
      <p className="text-center text-gray-500 mb-8">
        Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices
        ex at erat pharetra, vitae viverra mauris condimentum.
      </p>

      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon as L.Icon}>
          <Popup>
            You are here: Warsaw, Poland.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default ItenaryMap;
