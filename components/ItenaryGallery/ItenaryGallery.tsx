import React from "react";

interface ImageData {
  src: string;
  alt: string;
}

// Replace with actual image URLs related to Manali
const images: ImageData[] = [
  { 
    src: "manali1.jpeg",
    alt: "Breathtaking landscape view of Manali valley" 
  },
  { 
    src: "manali2.jpeg",
    alt: "The serene Hadimba Devi Temple amidst cedar trees" 
  },
  { 
    src: "manali3.jpeg",
    alt: "Tourists enjoying paragliding in Solang Valley" 
  },
  { 
    src: "manali4.jpeg",
    alt: "Hikers on the trail to Jogini Falls" 
  },
  { 
    src: "manali5.jpeg",
    alt: "Panoramic view of snow-covered Rohtang Pass" 
  },
  { 
    src: "manali6.jpeg",
    alt: "Colorful local market in Manali" 
  },
];

const ItenaryGallery: React.FC = () => {
  return (
    <div className="mt-10 max-w-screen-md mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Gallery</h1>
      <p className="text-center text-gray-500 mb-8">
        Get a glimpse of the beauty that awaits you in Manali!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItenaryGallery;
