import ItenaryCard from "../ItenaryCard/ItenaryCard";

const ItenaryList = () => {
  const itineraryData = [
    {
      dayNumber: 1,
      title: "Arrival & Manali Town Exploration",
      description: "Touch down at Bhuntar Airport and take a scenic bus ride to Manali. Once you've settled into your accommodation, take a walk around town.  The Hadimba Devi Temple is a must-visit, nestled in a peaceful cedar forest. Later, wander down Mall Road - you'll find unique local crafts and great places to eat.",
      services: [
        "Consider pre-booking a taxi from Bhuntar Airport",
        "Recommended: Try a traditional Himachali meal near Mall Road"
      ],
    },
    {
      dayNumber: 2,
      title: "Adventure in Solang Valley",
      description: "Get ready for an action-packed day! Solang Valley is famous for its stunning views and adventure sports. Try paragliding or zorbing for an adrenaline rush. If you prefer a more relaxed pace, simply enjoy the views of the snow-capped peaks.",
      services: [
        "Local buses are available to Solang Valley",
        "Tip: Bargain for the best prices on activities"
      ],
    },
    {
      dayNumber: 3,
      title: "Hike to Jogini Falls",
      description: "Today, lace up your hiking boots and trek to the beautiful Jogini Falls. The trail is a moderate difficulty level, winding through lush forests and offering incredible views. Pack a picnic to enjoy near the falls - it's the perfect spot to relax and soak in the scenery.",
      services: [
        "Start your hike early for the best experience",
        "Don't forget water and snacks for the trail"
      ],
    },
    {
      dayNumber: 4,
      title: "Rohtang Pass (Weather Permitting)",
      description: "If the weather cooperates and the pass is open, a trip to Rohtang Pass is a must! The drive itself is an adventure, taking you through stunning mountain passes. Be prepared for snow and dress warmly. You can enjoy snow activities at the top, but be sure to check the conditions.",
      services: [
        "Check permit requirements and road conditions before heading out",
        "You can hire a taxi or shared jeep for the day"
      ],
    },
    {
      dayNumber: 5,
      title: "Your Choice - Relax or Explore",
      description: "It's your day to choose your own adventure! Spend some time browsing the local markets for souvenirs, treat yourself to a relaxing massage, or simply unwind at a café and enjoy the mountain views. ",
      services: [
        "Old Manali is a great area to find unique souvenirs",
        "Many cafes offer stunning views - find your favorite!"
      ],
    },
    {
      dayNumber: 6,
      title: "Time to Say Goodbye",
      description: "Enjoy a leisurely breakfast and a final cup of chai as you reminisce about your Manali adventure.  Catch your transport back to Bhuntar Airport for your onward journey, taking with you unforgettable memories of the Himalayas.",
      services: [
        "Allow ample time to reach the airport"
      ],
    },
  ];

  return (
    <div>
      <ItenaryCard itinerary={itineraryData} />
    </div>
  );
};

export default ItenaryList;
