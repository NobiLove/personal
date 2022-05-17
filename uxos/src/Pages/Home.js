import React from 'react'
import Client from '../components/Client';
import Download from '../components/Download';
import Slider from '../components/Slider';
import Subscribe from '../components/Subscribe';

function Home() {
  return (
    <>
      <div className="hero_area">
        <Slider />
      </div>
      <br></br>
      <Download />
      <Subscribe />
      <Client />
    </>
  );
}

export default Home;

