import React from 'react';
import { MdInfo, MdMap, MdPhoto, MdStar, MdEventNote } from "react-icons/md";

interface ItenaryTitleProps {
  destination: string;
}

const ItenaryTitle: React.FC<ItenaryTitleProps> = ({ destination }) => {
  return (
    <div className="relative h-[500px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(travel1.jpg)',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8">
        {/* Breadcrumb */}
        <p className="text-white text-lg mb-2">
          <span className="font-light">Home</span> · <span className="font-light">Package Details</span>
        </p>

        {/* Title */}
        <h1 className="text-5xl font-bold text-white max-w-lg leading-tight">
          Your Journey to {destination}
        </h1>
      </div>

      {/* Tab Navigation */}
      <div className="relative z-10 -mt-10 bg-white py-4 px-8 flex justify-between items-center max-w-4xl mx-auto shadow-lg rounded-lg">
        <TabItem icon={MdInfo} label="Information" />
        <TabItem icon={MdEventNote} label="Tour Plan" />
        <TabItem icon={MdMap} label="Location" />
        <TabItem icon={MdPhoto} label="Gallery" />
        <TabItem icon={MdStar} label="Review" />
      </div>
    </div>
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