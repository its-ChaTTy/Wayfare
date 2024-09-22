import React from 'react';
import { MdInfo, MdMap, MdPhoto, MdStar, MdEventNote } from "react-icons/md";
import Navbar from '../Navbar/Navbar';

const ItenaryTitle = () => {
  return (
    <>
    <Navbar />
    <div className="relative h-[500px] -mt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(travel1.jpg)', // Replace with your image path
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8">
        {/* Breadcrumb */}
        <p className="text-white text-lg mb-2">
          <span className="font-light">6D</span> · <span className="font-light">5N</span>
        </p>

        {/* Title */}
        <h1 className="text-5xl font-bold text-white max-w-lg leading-tight">
          A Sightseeing & trekking trip to Manali
        </h1>
      </div>

      {/* Tab Navigation */}
        <div className="relative z-10 -mt-10 bg-white py-4 px-8 flex justify-between items-center max-w-4xl mx-auto shadow-lg rounded-lg">
        <TabItem icon={MdInfo} label="Information" />
        <TabItem icon={MdEventNote} label="Tour Plan" />
        <TabItem icon={MdMap} label="Location" />
        <TabItem icon={MdPhoto} label="Gallery" />
      </div>
    </div>
    </>
  );
};

// TabItem Component for the tabs
interface TabItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const TabItem: React.FC<TabItemProps> = ({ icon: Icon, label }) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="text-xl mb-1" />
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  );
};

export default ItenaryTitle;