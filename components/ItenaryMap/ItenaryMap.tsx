import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from 'react';

interface ItenaryMapProps {
  location: {
    lat: number;
    lng: number;
    name: string;
  };
}

const ItenaryMap: React.FC<ItenaryMapProps> = ({ location }) => {
  const customIcon = L.icon({
    iconUrl: "marker_icon.png",
    shadowUrl: "leaflet/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className="p-8 max-w-screen-md mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Location</h1>
      <p className="text-center text-gray-500 mb-8">
        Explore the map to see where your adventure will take place.
      </p>

      <MapContainer center={[location.lat, location.lng]} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]} icon={customIcon as L.Icon}>
          <Popup>
            {location.name}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default ItenaryMap;
