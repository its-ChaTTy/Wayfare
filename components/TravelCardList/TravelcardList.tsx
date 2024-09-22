import React from 'react';
import TravelCard from '../TravelCard/TravelCard';

const travelData = [
  {
    imageUrl: 'taj-mahal.jpeg',
    title: 'Explore the Taj Mahal in Agra',
    days: 2,
    price: 200,
  },
  {
    imageUrl: 'Kerala_Backwaters.jpg',
    title: 'Backwaters of Kerala',
    days: 4,
    price: 350,
  },
  {
    imageUrl: 'desert-safari.jpg',
    title: 'Desert Safari in Rajasthan',
    days: 5,
    price: 450,
  },
  {
    imageUrl: 'manali-trek.jpeg',
    title: 'Himalayan Trekking in Himachal Pradesh',
    days: 7,
    price: 600,
  },
  {
    imageUrl: 'goa.jpg',
    title: 'Beach Vacation in Goa',
    days: 3,
    price: 300,
  },
  {
    imageUrl: 'varanasi.jpeg',
    title: 'Cultural Tour of Varanasi',
    days: 3,
    price: 250,
  },
  {
    imageUrl: 'corbet.jpeg',
    title: 'Wildlife Safari in Jim Corbett National Park',
    days: 4,
    price: 400,
  },
  {
    imageUrl: 'tamil.jpeg',
    title: 'Explore the Temples of Tamil Nadu',
    days: 6,
    price: 500,
  },
  // Add more travel data as needed
];

const TravelCardList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {travelData.map((travel, index) => (
          <TravelCard
            key={index}
            imageUrl={travel.imageUrl}
            title={travel.title}
            days={travel.days}
            price={travel.price}
          />
        ))}
      </div>
    </div>
  );
};

export default TravelCardList;