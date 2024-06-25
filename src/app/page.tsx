'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Home = () => {
  // State to store the fetched cat fact
  const [catFact, setCatFact] = useState<string | null>(null);

  // Function to fetch a new cat fact from the API
  const fetchCatFact = async () => {
    try {
      const res = await fetch('/api/catfact'); // Call the custom API route
      const data = await res.json(); // Parse the response JSON
      setCatFact(data.fact); // Update the state with the new cat fact
    } catch (error) {
      console.error('Failed to fetch cat fact:', error); // Log any errors
    }
  };

  // Fetch a cat fact when the component mounts
  useEffect(() => {
    fetchCatFact(); // Initial fetch when the component loads
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-bg text-dark-text">
      <div className="text-center">
        {/* Display the rotating smiley image */}
        <div className="flex justify-center">
          <Image className="rotate" src="/smiley.png" alt="Smiley face" width={150} height={150} />
        </div>

        {/* Display the welcome message */}
        <h1 className="text-4xl font-bold mt-8">Welcome to My Portfolio</h1>
        <p className="text-xl mt-4">
          Ik ben 
          <span className='text-muted-yellow font-bold'> Mirac </span> 
          en ik een semester 6 media design student. Je kunt mijn
          <span className='text-muted-yellow font-bold'> projecten </span> 
          in de navigatiebalk hierboven vinden😁
        </p>

        {/* Conditionally render the cat fact if it exists */}
        {catFact && (
          <div className="mt-8 bg-dark-card p-6 rounded-lg">
            <p className="text-xl mb-2">Did you know?</p>
            <p className="text-xl font-bold">{catFact}</p>
          </div>
        )}

        {/* Button to fetch a new cat fact */}
        <button
          onClick={fetchCatFact}
          className="mt-4 px-4 py-2 bg-muted-yellow text-black rounded-lg hover:bg-white hover:text-black transition duration-300"
        >
          Fetch New Cat Fact
        </button>
      </div>
    </div>
  );
};

export default Home;
