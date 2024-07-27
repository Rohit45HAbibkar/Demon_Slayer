import React from 'react';
import LCard from './LCard';
import RCard from './Rcard';
import Navbar from './Navbar';

const Hashira = () => {
  return (
    <>
      <Navbar />
      <div>
        <div
          style={{ backgroundImage: 'url(https://images3.alphacoders.com/132/1328547.png)' }}
        >
          <a href="/">
            <LCard />
          </a>
        </div>
        <div
          style={{ backgroundImage: 'url(https://mrwallpaper.com/images/hd/zenitsu-chuntaro-sparrow-xbd3xa12b8zea1i5-2.jpg)' }}
        >
          <RCard />
        </div>
        <div
        
          style={{ backgroundImage: 'url(https://images3.alphacoders.com/132/1328547.png)' }}
        >
          <LCard />
        </div>
        <div
          
          style={{ backgroundImage: 'url(https://images3.alphacoders.com/132/1328547.png)' }}
        >
          <RCard />
        </div>
        <div
          
          style={{ backgroundImage: 'url(https://images3.alphacoders.com/132/1328547.png)' }}
        >
          <LCard />
        </div>
        <div
      
          style={{ backgroundImage: 'url(https://images3.alphacoders.com/132/1328547.png)' }}
        >
          <RCard />
        </div>
      </div>
    </>
  );
};

export default Hashira;
