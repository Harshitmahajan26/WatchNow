import React from 'react';
import './Hero.css';
import hand_image from '../Assets/hand_image.png'
import watch0 from '../Assets/watch0.png';
import arrow_icon from '../Assets/arrow_icon.png';


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_image} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
      <img src={watch0} alt="" />
      </div>
    </div>
  );
}

export default Hero;
