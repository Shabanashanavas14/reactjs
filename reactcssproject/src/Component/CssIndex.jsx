import React from 'react';
import paris from './paris.jpg'
import tokeyo from './tokeyo.jpg'
import newzeland from './newzland.jpg'
import './CssIndex.css'

export default function CssIndex() {
  return ( 
    <div>
      <section className="hero">
        <div className="container">
          <h1>Explore the World with Us</h1>
          <p>Your next adventure awaits! Book your dream vacation today.</p>
          <button className="btn-discover">Discover More</button>
        </div>
      </section>

      <section className="destinations">
        <div className="container">
          <div className="row">
            <div className="destination">
              <img src={paris} alt="Paris" width="200px" />
              <h5>Paris City</h5>
              <p>Join us for an unforgettable tour of Paris. Explore the iconic landmarks such as the Eiffel Tower, the Louvre, and Notre-Dame.</p>
              <ul>
                <li>Duration: 5 Days</li>
                <li>Highlights: Eiffel Tower</li>
                <li>Price: $1,200</li>
              </ul>
            </div>
            <div className="destination">
              <img src={tokeyo} alt="Tokyo" width="200px" />
              <h5>Tokyo City</h5>
              <p>Experience the blend of tradition and technology in Tokyo. Visit ancient temples, modern skyscrapers.</p>
              <ul>
                <li>Duration: 7 Days</li>
                <li>Highlights: Tokyo Tower</li>
                <li>Price: $1,500</li>
              </ul>
            </div>
            <div className="destination">
              <img src={newzeland} alt="New Zealand" width="200px" />
              <h5>New Zealand City</h5>
              <p>New Zealand's capital city is Wellington, and its most populous city is Auckland, including the Southern Alps.</p>
              <ul>
                <li>Duration: 9 Days</li>
                <li>Highlights: Auckland, Queenstown</li>
                <li>Price: $1,800</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
