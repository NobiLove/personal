import React from 'react'
import Client from '../Components/Client';
import Download from '../Components/Download';
import Slider from '../Components/Slider';
import Subscribe from '../Components/Subscribe';

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

