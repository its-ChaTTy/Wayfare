import ItenaryCard from "../ItenaryCard/ItenaryCard";

interface ItenaryListProps {
  itinerary?: Array<{
    dayNumber: number;
    title: string;
    description: string;
    services: string[];
  }>;
}

const ItenaryList: React.FC<ItenaryListProps> = ({ itinerary = [] }) => {
  return (
    <div>
      <ItenaryCard itinerary={itinerary} />
    </div>
  );
};

export default ItenaryList;
