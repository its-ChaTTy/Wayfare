import React from 'react';
import ItenaryTitle from '../components/ItenaryTitle/ItenaryTitle';
import ItenaryDescription from '../components/ItenaryDescription/ItenaryDescription';
import ItenaryList from '@/components/ItenaryList/ItenaryList';
import ItenaryGallery from '@/components/ItenaryGallery/ItenaryGallery';
import ItenaryMap from '@/components/ItenaryMap/ItenaryMap';
import Footer from '@/components/Footer/Footer';
import { useRouter } from 'next/router'

const Explore: React.FC = () => {
  const router = useRouter()
  const { itinerary } = router.query

  const parsedItinerary = itinerary ? JSON.parse(itinerary as string) : null

  return (
    <div className="Explore">
      <ItenaryTitle title={parsedItinerary?.title} />
      <ItenaryDescription description={parsedItinerary?.description} />
      <ItenaryList activities={parsedItinerary?.activities} />   
      <ItenaryGallery images={parsedItinerary?.images} />
      {/* <ItenaryMap locations={parsedItinerary?.locations} /> */}
      <Footer />
    </div>
  )
}

export default Explore;