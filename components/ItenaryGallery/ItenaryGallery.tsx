import React from "react";

interface ImageData {
  src: string;
  alt: string;
}

const images: ImageData[] = [
  { src: "travel1.jpg", alt: "Beautiful landscape" },
  { src: "travel1.jpg", alt: "Night cityscape" },
  { src: "travel1.jpg", alt: "Lake view" },
  { src: "travel1.jpg", alt: "Mountain adventure" },
  { src: "travel1.jpg", alt: "Photography day" },
  { src: "travel1.jpg", alt: "Sunset surfing" },
];

const ItenaryGallery: React.FC = () => {
  return (
    <div className="mt-10 max-w-screen-md mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Gallery</h1>
      <p className="text-center text-gray-500 mb-8">
        Duis id interdum ex, eu accumsan massa. Fusce vel nibh diam. Nulla ultrices
        ex at erat pharetra, vitae viverra mauris condimentum.
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
