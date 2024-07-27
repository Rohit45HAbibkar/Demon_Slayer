import React from 'react';
import img from "../HASHIRAS/allHashira.jpg" // Adjust the path as necessary

const HashiraCard = () => {
  return (
    <div className="bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg p-6 w-full max-w-md shadow-lg flex flex-col items-center transition-all duration-300 ease-in-out hover:bg-opacity-80">
      <img
        src={img}
        alt="Hashira"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">Hashira</h2>
      <p className="text-base">
        Hashira are the highest-ranking members of the Demon Slayer Corps. Demon Slayer Corps Each Hashira has their own unique fighting style and specialization, providing guidance and leadership to other Demon Slayers.
      </p>
    </div>
  );
};

export default HashiraCard;
