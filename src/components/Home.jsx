import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import main from "../HASHIRAS/mainpage.jpg";
import Hashira from '../HASHIRAS/allHashira.jpg';
import team from "../HASHIRAS/allhashi.jpg";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const sections = document.querySelectorAll('section');
      const currentSection = Array.from(sections).findIndex((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        return top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2;
      });

      if (deltaY > 0 && currentSection < sections.length - 1) {
        sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
      } else if (deltaY < 0 && currentSection > 0) {
        sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleNavVisibility = () => {
      const firstSection = document.querySelector('section');
      const { top } = firstSection.getBoundingClientRect();
      setShowNavbar(top >= 0);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('scroll', handleNavVisibility);
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('scroll', handleNavVisibility);
    };
  }, []);

  const sectionStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <div>
      {showNavbar && <Navbar />}
      <div>
        <div>
          {/* Full Background Image Section */}
          <section
            className="relative w-full h-screen"
            style={{ ...sectionStyle, backgroundImage: `url(${main})`, marginTop: showNavbar ? '64px' : '0' }} // Adjust the marginTop if your navbar height is different
          >
            <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
              <h1 className="text-white text-4xl md:text-6xl font-bold">Main Page</h1>
            </div>
          </section>
        </div>

        {/* Second Section */}
        <section 
          id="hashira" 
          className="relative w-full h-screen"
          style={{ ...sectionStyle, backgroundImage: `url(${Hashira})` }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold">Hashira Section</h2>
              <p className="mt-4 text-lg">Content about Hashira goes here.</p>
            </div>
          </div>
        </section>

        {/* Third Section */}
        <section 
          id="demon" 
          className="relative w-full h-screen"
          style={{ ...sectionStyle, backgroundImage: `url(${team})` }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold">Demon Section</h2>
              <p className="mt-4 text-lg">Content about Demon goes here.</p>
            </div>
          </div>
        </section>

        {/* Fourth Section */}
        <section 
          id="extra" 
          className="relative w-full h-screen"
          style={{ ...sectionStyle, backgroundImage: `url(${team})` }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold">Extra Section</h2>
              <p className="mt-4 text-lg">Additional content goes here.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
