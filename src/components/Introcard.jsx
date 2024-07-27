import React from 'react';
import demonSlayerImage from '../HASHIRAS/Kimetsu_no_Yaiba.jpg'; // Adjust the path as necessary

const IntroCard = () => {
  return (
    <div className="absolute top-16 left-0 m-4 flex items-center justify-center">
      <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg  rounded-lg p-6 w-full max-w-2xl shadow-lg flex transition-all duration-300 ease-in-out hover:bg-opacity-90">
        <img
          src={demonSlayerImage}
          alt="Demon Slayer"
          className="w-1/3 h-auto object-cover rounded-2xl mr-6"
        />
        <div className="flex flex-col justify-center w-2/3">
          <h1 className="text-3xl font-bold mb-4">Demon Slayer</h1>
          <p className="text-base">
            Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
