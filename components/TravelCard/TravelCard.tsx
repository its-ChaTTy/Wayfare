import React from 'react';

interface TravelCardProps {
  imageUrl: string;
  title: string;
  days: number;
  price: number;
}

const TravelCard: React.FC<TravelCardProps> = ({ imageUrl, title, days, price }) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg bg-white border border-gray-200">
      <div className="relative">
        {/* Image */}
        <img
          className="w-full h-48 object-cover"
          src={imageUrl}
          alt="Travel destination"
        />
      </div>
      <div className="px-6 py-4">
        {/* Title */}
        <div className="font-bold text-xl mb-2 text-gray-800">
          {title}
        </div>
        {/* Details */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-400 mr-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 7c-.415 0-.791.336-.791.75s.376.75.791.75h.792v1.5h-.792c-.415 0-.791.336-.791.75s.376.75.791.75h.792v1.5h-.792c-.415 0-.791.336-.791.75s.376.75.791.75h.792v1.5h-.792c-.415 0-.791.336-.791.75s.376.75.791.75h.792v1.5h-.792c-.415 0-.791.336-.791.75s.376.75.791.75h.792c.415 0 .791-.336.791-.75v-1.5h.792c.415 0 .791-.336.791-.75s-.376-.75-.791-.75h-.792v-1.5h.792c.415 0 .791-.336.791-.75s-.376-.75-.791-.75h-.792V7.75c0-.414-.376-.75-.791-.75h-.792zm0 9c-2.393 0-4.5-.715-4.5-1.5S9.607 13 12 13c2.393 0 4.5.715 4.5 1.5S14.393 16 12 16zm0-4c-1.657 0-3 .343-3 1 0 .657 1.343 1 3 1s3-.343 3-1c0-.657-1.343-1-3-1z" />
            </svg>
            {days}D-{days - 1}N
          </div>
          {/* Price */}
          <div className="flex items-center -ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-400 mr-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 18H8v-2h4v2zm4-4H8v-2h8v2zm0-4H8V8h8v4z" />
            </svg>
            ₹{price}
          </div>
        </div>
      </div>
      {/* CTA Button */}
      <div className="px-6 py-4">
        <a
          href="#"
          className="inline-block text-center w-full text-blue-600 hover:text-blue-700 font-semibold hover:underline"
        >
          Explore Now →
        </a>
      </div>
    </div>
  );
};

export default TravelCard;