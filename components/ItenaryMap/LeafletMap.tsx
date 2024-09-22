import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import React from 'react';

// Fix default icon issue with Leaflet in React
import "leaflet/dist/images/marker-shadow.png";

// Define the LatLngExpression type for the position
const LeafletMap: React.FC = () => {
  const position: LatLngExpression = [32.2396, 77.1887]; // Latitude and Longitude for Warsaw, Poland

  // Custom marker icon
  const customIcon = L.icon({
    iconUrl: "marker_icon.png", // Place your custom icon in the /public/images/ folder
    shadowUrl: "leaflet/dist/images/marker-shadow.png",
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  });

  return (
    <MapContainer
      center={position}  // Ensure center is typed correctly
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon as L.Icon}>
        <Popup>You are here: Manali, India.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
