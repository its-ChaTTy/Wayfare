import React from 'react';
import TravelCardList from '../components/TravelCardList/TravelcardList';
import HeroForm from '../components/HeroForm/HeroForm';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const App: React.FC = () => {

  return (
    <div className="App">
      <Navbar />
      <h2 className="text-3xl font-bold text-center mt-8 -mb-8">Itinerary Generator</h2>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <HeroForm />
         {/* New Heading for "Must Try Trips" */}
      <h2 className="text-3xl font-bold text-center mt-8 mb-4">Must Try Trips</h2>
        <TravelCardList />
      </main>
      <Footer />
    </div>
  );
};

export default App;