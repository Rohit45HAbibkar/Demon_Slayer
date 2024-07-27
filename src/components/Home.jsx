import React from 'react';
import Navbar from './Navbar';
import main from "../HASHIRAS/mainpage.jpg";
import img from "../HASHIRAS/main2.jpg"; // Import your new background image
import IntroCard from "./Introcard";
import HashiraCard from "./HashiraCard"; // Ensure this component is correctly created
import DemonCard from "./DemonCard"; // Ensure this component is correctly created
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector('.snap-y');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', () => {
        // Perform actions on scroll if needed
      });
    }
  }, []);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <Navbar />
      <div className="relative h-screen snap-start">
        {/* Full Background Image Section */}
        <div
          className="relative w-full h-full bg-cover"
          style={{ backgroundImage: `url(${main})`, marginTop: '64px' }}
        >
          <IntroCard />
        </div>
      </div>

      <div
        className="relative h-screen snap-start bg-cover flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="w-full max-w-4xl p-8 flex flex-col md:flex-row justify-around items-center gap-8">
          <HashiraCard />
          <DemonCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
