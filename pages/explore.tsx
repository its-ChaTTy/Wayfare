import React from 'react';
import ItenaryTitle from '../components/ItenaryTitle/ItenaryTitle';
import ItenaryDescription from '../components/ItenaryDescription/ItenaryDescription';
import ItenaryList from '@/components/ItenaryList/ItenaryList';
import ItenaryGallery from '@/components/ItenaryGallery/ItenaryGallery';
import ItenaryMap from '@/components/ItenaryMap/ItenaryMap';
import Footer from '@/components/Footer/Footer';

const Explore: React.FC = () => {
  return (
    <div className="Explore">
      <ItenaryTitle />
      <ItenaryDescription />
      <ItenaryList />   
      <ItenaryGallery />
      <ItenaryMap />
      <Footer />
    </div>
  );
};

export default Explore;