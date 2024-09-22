# Personalized Travel Itinerary Generator

This project is a **Personalized Travel Itinerary Generator**, where users can log in with their credentials (or using Google OAuth), and generate personalized travel itineraries based on their preferences. The application is built using **Next.js**, **Tailwind CSS**, **Supabase**, **Prisma**, and supports **NextAuth** for authentication.

## Features

- **Email/Password & Google OAuth Authentication** via **NextAuth**.
- Users can generate personalized travel itineraries based on their preferences.
- Tailwind CSS for responsive and modern UI.
- Supabase as the backend for data storage and user management.
- Prisma ORM for database interactions.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Supabase, Prisma
- **Authentication**: NextAuth (with Email/Password and Google OAuth)
- **Database**: PostgreSQL (via Supabase)

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Supabase](https://supabase.io/) account
- [Prisma](https://www.prisma.io/)
- [NextAuth](https://next-auth.js.org/)

## Installation

### 1. Clone the repository:

- ```bash
- git clone https://github.com/your-username/travel-itinerary-generator.git
- cd travel-itinerary-generator

### 2. Install dependencies:

- npm install
- or
- yarn install
### 3. Set up environment variables:
- Create a .env.local file at the root of the project and add your environment variables:

- NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
- NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

- NEXTAUTH_URL=http://localhost:3000
- NEXTAUTH_SECRET=your-nextauth-secret

- GOOGLE_CLIENT_ID=your-google-client-id
- GOOGLE_CLIENT_SECRET=your-google-client-secret

### 4. Set up Prisma and Supabase:
- Make sure you have a Supabase project with PostgreSQL as your database. Then, set up Prisma:

- npx prisma generate
- npx prisma migrate dev

### 5. Run the application:

- npm run dev
-  or
- yarn dev

The app will be available at http://localhost:3000.

Usage
Sign In:

You can sign in using email/password or via Google OAuth.
Generate Itinerary:

After signing in, you'll be redirected to the travel itinerary dashboard, where you can generate personalized itineraries based on your input.
Explore Now Button:

The "Explore Now" button sticks to the bottom of the itinerary card, allowing users to easily start exploring their itinerary.
Deployment
To deploy this application, you can use services like Vercel or Netlify. Follow the instructions for deploying a Next.js application.

For Vercel:

vercel
Contributing
Feel free to open an issue or submit a pull request if you'd like to contribute to this project.

License
This project is licensed under the MIT License.

python
Copy code

This is the complete `README.md` code in the requested format.