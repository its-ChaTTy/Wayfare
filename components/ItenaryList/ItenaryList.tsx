import ItenaryCard from "../ItenaryCard/ItenaryCard";

const ItenaryList = () => {
  const itineraryData = [
    {
      dayNumber: 1,
      title: "Welcome to Edinburgh",
      description: "Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta scriptorem dissentiet, sensibus cotidieque.",
      services: [
        "Professional Tour Guide",
        "Transportation cost for carrying new materials/parts",
      ],
    },
    {
      dayNumber: 2,
      title: "Adventure Begins",
      description: "Qui ad idque soluta deterruisset, nec sale pertinax mandamus et. Eu mei soluta scriptorem dissentiet, sensibus cotidieque.",
      services: [
        "Transportation cost for carrying new materials/parts",
      ],
    },
    {
      dayNumber: 3,
      title: "Historical Tour",
      description: "Ne per malorum vivendum principes. Congue imperdiet cu vel.",
      services: [
        "3 Nights Accommodation",
        "2 Meals / day",
        "Breakfast",
      ],
    },
    {
      dayNumber: 4,
      title: "Return",
      description: "Eros reprimique mel id, no pri ration altera. At soluta fierent laboramus eum.",
      services: [],
    },
  ];

  return (
    <div>
      <ItenaryCard itinerary={itineraryData} />
    </div>
  );
};

export default ItenaryList;
