
import React from 'react';
import RengokuImage from "../HASHIRAS/Rengoku.png"


const LCard = ({ imageSrc, title, description }) => {
  return (

    <section id="hashira" className="w-full h-screen flex items-center justify-start">
      <div className="max-w-7xl mt-12 bg-white shadow-2xl rounded-lg overflow-hidden flex h-[32rem] ml-4">
        <div className="w-5/12 p-2 mx-4 my-4 bg-gray-200 flex-shrink-0 rounded-lg">
          <img
            src={RengokuImage}
            alt="Card Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-2/3 p-12">
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="text-gray-700 text-xl">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default LCard;
