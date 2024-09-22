import { NextApiRequest, NextApiResponse } from 'next';
import { Groq } from 'groq-sdk';

// Initialize the Groq Cloud client
const groqClient = new Groq({
  apiKey: process.env.GROQ_API_KEY, // Ensure your Groq API key is stored in the environment variables
});

const handleGenerateItinerary = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!process.env.GROQ_API_KEY) {
    return res.status(500).json({
      error: {
        message: "Groq API key not configured",
      },
    });
  }

  const { userPrompt, tripId } = req.body;

  if (!userPrompt.nodeType) {
    return res.status(400).json({ error: "Missing or incorrect nodeType" });
  }

  try {
    // Use Groq SDK to generate completion
    const prompt = generatePrompt(userPrompt);
    const completion = await groqClient.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a travel itinerary generator. Generate a detailed itinerary node based on the provided information.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      model: 'mixtral-8x7b-32768',
    });

    const aiData = JSON.parse(completion.choices[0].message.content); // Parse JSON response

    // Respond with AI-generated data to be passed to frontend components
    return res.status(200).json({
      nodeType: userPrompt.nodeType,
      origin: userPrompt.origin,
      destination: userPrompt.destination,
      activities: aiData.activities || "",
      description: aiData.description || "",
      startTime: aiData.startTime || new Date(),
      endTime: aiData.endTime || new Date(),
      notes: aiData.notes || "",
      budget: aiData.budget,
    });
  } catch (error) {
    console.error("Error generating itinerary node:", error);
    return res.status(500).json({ error: 'Failed to generate itinerary node' });
  }
};

export default handleGenerateItinerary;

// Utility function to generate prompts for Groq completion
function generatePrompt(userPrompt: any) {
  const nodeType = userPrompt.nodeType.toLowerCase();
  switch (nodeType) {
    case "accommodation":
      return `Visiting ${userPrompt.destination}. Provide a suggestion in JSON format:
      {
        "accommodation": "name of accommodation",
        "description": "short description and address",
        "budget": "cost",
        "startTime": "check-in time in ISO string",
        "endTime": "check-out time in ISO string",
        "notes": "two more nearby options"
      }`;
    case "travel":
      return `Traveling from ${userPrompt.origin} to ${userPrompt.destination}. Provide a suggestion in JSON format:
      {
        "mode": "method of travel",
        "description": "journey details",
        "budget": "cost",
        "startTime": "departure time",
        "endTime": "arrival time",
        "notes": "alternative travel modes"
      }`;
    case "activity":
      return `Visiting ${userPrompt.destination}. Provide a suggestion in JSON format:
      {
        "activity": "activity name",
        "description": "details and address",
        "budget": "cost per person",
        "startTime": "start time",
        "endTime": "end time",
        "notes": "two more options nearby"
      }`;
    case "meal":
      return `Visiting ${userPrompt.destination}. Provide a meal suggestion in JSON format:
      {
        "meal": "establishment name",
        "description": "meal description and address",
        "budget": "cost",
        "startTime": "meal start time",
        "endTime": "meal end time",
        "notes": "two more nearby options"
      }`;
    default:
      return `Unknown nodeType: ${nodeType}`;
  }
}
