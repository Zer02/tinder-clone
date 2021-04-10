// build component structure with "rfce"
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Steve Jobs',
      url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
    },
    {
      name: 'Mark Zuckerberg',
      url: 'https://cdn.i-scmp.com/sites/default/files/styles/1920x1080/public/d8/images/methode/2020/02/03/7ffc02a0-432a-11ea-9fd9-ecfbb38a9743_image_hires_115830.jpeg?itok=E3rd9X6j&v=1580702317'
    }
  ]);

  // GOOD (Push to an array in React)
  setPeople([...people, 'sonny', 'qazi'])

  // BAD, but does the same thing in vanilla JS
  // const people = [];
  // people.push('sonny', 'qazi')

  return (
    <div>
      <h1>Tinder cards</h1>

      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div 
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  )
}

export default TinderCards
