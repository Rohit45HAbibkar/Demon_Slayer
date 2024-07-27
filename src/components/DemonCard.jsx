import React from 'react';
import img from "../HASHIRAS/DemonCard.jpg"  // Adjust the path as necessary

const DemonCard = () => {
  return (
    <div className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg p-6 w-full max-w-md shadow-lg flex flex-col items-center transition-all duration-300 ease-in-out hover:bg-opacity-80">
      <img
        src={img}
        alt="Demon"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">Demon</h2>
      <p className="text-base">
        Demons are malevolent supernatural entities that feed on humans. They possess incredible strength and regenerative abilities, making them formidable opponents for the Demon Slayer Corps.
      </p>
    </div>
  );
};

export default DemonCard;
