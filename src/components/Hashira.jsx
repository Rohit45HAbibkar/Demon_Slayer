import React, { useEffect, useRef } from 'react';
import LCard from './LCard';
import RCard from './Rcard';

const Hashira = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const sections = sectionsRef.current;
      const currentSection = sections.findIndex((section) => {
        const { top, bottom } = section.getBoundingClientRect();
        return top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2;
      });

      if (deltaY > 0 && currentSection < sections.length - 1) {
        sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
      } else if (deltaY < 0 && currentSection > 0) {
        sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <>
      <style>
        {`
          .snap-container {
            height: 100vh;
            width: 100%;
            overflow-y: hidden; /* Disable vertical scrolling for the container */
          }

          .snap-section {
            height: 100vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            color: white; /* Ensure text color is visible */
          }

          .snap-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5); /* Add overlay for better text contrast */
            z-index: 0;
          }

          .snap-section > * {
            position: relative;
            z-index: 1;
          }y
        `}
      </style>
      <div className="snap-container">
        <section
          ref={(ref) => (sectionsRef.current[0] = ref)}
          className="snap-section"
          style={{ backgroundImage: 'url(https://images3.alphacoders.com/132/1328547.png)' }}
        >
          <LCard />
        </section>
        <section
          ref={(ref) => (sectionsRef.current[1] = ref)}
          className="snap-section"
          style={{ backgroundImage: 'url(https://mrwallpaper.com/images/hd/zenitsu-chuntaro-sparrow-xbd3xa12b8zea1i5-2.jpg)' }}
        >
          <RCard />
        </section>
        <section
          ref={(ref) => (sectionsRef.current[2] = ref)}
          className="snap-section"
          style={{ backgroundImage: 'url(https://images3.alphacoders.com/132/1328547.png)' }}
        >
          <LCard />
        </section>
        <section
          ref={(ref) => (sectionsRef.current[3] = ref)}
          className="snap-section"
          style={{ backgroundImage: 'url(https://images3.alphacoders.com/132/1328547.png)' }}
        >
          <RCard />
        </section>
        <section
          ref={(ref) => (sectionsRef.current[4] = ref)}
          className="snap-section"
          style={{ backgroundImage: 'url(https://images3.alphacoders.com/132/1328547.png)' }}
        >
          <LCard />
        </section>
        <section
          ref={(ref) => (sectionsRef.current[5] = ref)}
          className="snap-section"
          style={{ backgroundImage: 'url(https://images3.alphacoders.com/132/1328547.png)' }}
        >
          <RCard />
        </section>
      </div>
    </>
  );
};

export default Hashira;
