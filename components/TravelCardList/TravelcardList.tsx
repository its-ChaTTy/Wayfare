import React from 'react';
import TravelCard from '../TravelCard/TravelCard';

const travelData = [
  {
    imageUrl: 'travel1.jpg',
    title: 'Cusco & Salkantay Trekking To Machu',
    days: 3,
    price: 250,
  },
  {
    imageUrl: 'travel1.jpg',
    title: 'Explore the Great Wall of China',
    days: 5,
    price: 400,
  },
  {
    imageUrl: 'travel1.jpg',
    title: 'Safari Adventure in Kenya',
    days: 7,
    price: 600,
  },
  {
    imageUrl: 'travel1.jpg',
    title: 'Safari Adventure in Kenya',
    days: 7,
    price: 600,
  },
  {
    imageUrl: 'travel1.jpg',
    title: 'Safari Adventure in Kenya',
    days: 7,
    price: 600,
  },
  {
    imageUrl: 'travel1.jpg',
    title: 'Safari Adventure in Kenya',
    days: 7,
    price: 600,
  },
  {
    imageUrl: 'travel1.jpg',
    title: 'Safari Adventure in Kenya',
    days: 7,
    price: 600,
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