import React from 'react'
import paris from './paris.jpg'
import tokeyo from './tokeyo.jpg'

export default function Html_pro() {
  return (
    <div>
        
        <section>
          <div>
            <h2><u><b>Paris</b></u></h2>
            <p>Join us for an unforgettable tour of Paris. Explore the iconic landmarks such as the Eiffel Tower, the Louvre, and Notre-Dame</p>
            <img src={paris} alt="paris" width="400px" />
            <ul >
              <li>Duration: 5 Days</li>
              <li>Highlights: Eiffel Tower</li>
              <li>Price: $1,200</li>
            </ul>
          </div>
        </section>

        <section>
          <div>
            <h2><b><u>Tokyo</u></b></h2>
            <p>Experience the blend of tradition and technology in Tokyo. Visit ancient temples, modern skyscrapers, and the famous Shibuya crossing</p>
            <img src={tokeyo} alt="Tokyo" width="400px" />
            <ul >
              <li>Duration: 7 Days</li>
              <li>Highlights: Tokyo Tower</li>
              <li>Price: $1,500</li>
            </ul>
          </div>
        </section>


    </div>
  )
}

