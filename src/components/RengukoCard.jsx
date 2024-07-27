import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import Image from '../HASHIRAS/Rengoku.png'; // Ensure the path is correct
import './RengukoCard.css'; // Import the CSS file

const RengukoCard = () => {
  const hashira = {
    name: 'Rengoku Kyojuro',
    imageSrc: Image,
    description: 'The Flame Hashira of the Demon Slayer Corps...',
    breathingTechnique: 'Flame Breathing',
    breathingForms: [
      {
        name: 'First Form: Unknowing Fire',
        imageSrc: Image,
        description: 'A technique that envelops the user in a fiery aura, creating a powerful and unpredictable attack.'
      },
      {
        name: 'Second Form: Rising Scorching Sun',
        imageSrc: Image,
        description: 'A powerful vertical slash that mimics the rays of the sun, scorching anything in its path.'
      },
      {
        name: 'Third Form: Blazing Universe',
        imageSrc: Image,
        description: 'A swirling attack that creates a fiery vortex around the user.'
      },
      {
        name: 'Fourth Form: Blooming Flame Undulation',
        imageSrc: Image,
        description: 'A wave-like attack that radiates outward in a circle of flame.'
      },
      {
        name: 'Fifth Form: Flame Tiger',
        imageSrc: Image,
        description: 'An attack that channels the power of a tiger engulfed in flames.'
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 max-w-5xl mx-auto px-5 ml-14 mt-20 border border-red-600 wavy-border">
      {/* Header Section */}
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-red-600">{hashira.name}</h1>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img
            src={hashira.imageSrc}
            alt={`${hashira.name} image`}
            className="rounded-lg object-cover w-full h-full border border-red-600 wavy-border"
          />
        </div>
        {/* Description Section */}
        <div className="md:w-2/3 md:pl-6">
          <h2 className="text-2xl font-semibold mb-2 text-red-500">Description</h2>
          <p className="text-gray-800 text-lg">{hashira.description}</p>
        </div>
      </div>

      {/* Breathing Technique Section */}
      <div className="mt-6 border-2 border-red-600 p-6 rounded-lg wavy-border">
        <h2 className="text-2xl font-semibold mb-2 flex items-center text-red-600">
          Breathing Technique
          <FontAwesomeIcon icon={faFire} className="ml-2 text-red-600" />
        </h2>
        <p className="text-gray-800 text-lg">{hashira.breathingTechnique}</p>
      </div>

      {/* Breathing Forms Section */}
      <div
        className="bg-white rounded-lg shadow-lg p-6 mt-6 max-w-5xl mx-auto px-5 relative overflow-hidden"
      >
        {hashira.breathingForms.map((form, index) => (
          <div
            key={index}
            className="mb-6 border rounded-lg p-6 border-red-600 wavy-border"
          >
            <div className="flex flex-col md:flex-row">
              {/* Form Image Section */}
              <div className="md:w-1/3 mb-4 md:mb-0">
                <img
                  src={form.imageSrc}
                  alt={`${form.name} image`}
                  className="rounded-lg object-cover w-full h-full border border-red-600 wavy-border"
                />
              </div>
              {/* Form Description Section */}
              <div className="md:w-2/3 md:pl-6">
                <h2 className="text-2xl font-semibold mb-2 text-red-500">{form.name}</h2>
                <p className="text-gray-800 text-lg">{form.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RengukoCard ;
