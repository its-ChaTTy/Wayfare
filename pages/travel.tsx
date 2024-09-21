import React from 'react';
import TravelCardList from '../components/TravelCardList/TravelcardList';
import HeroForm from '../components/HeroForm/HeroForm';

const App: React.FC = () => {

  return (
    <div className="App">
      <header className="bg-blue-600 text-white text-center py-4">
        <h1 className="text-2xl font-bold">Travel Destinations</h1>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <HeroForm />
        <TravelCardList />
      </main>
    </div>
  );
};

export default App;