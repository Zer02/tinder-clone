// build component structure with "rfce"
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Steve Jobs',
      url: ''
    },
    {
      name: 'Mark Zuckerberg',
      url: ''
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

      {people.map(person => (
        <TinderCard>
          <div 
          style={{ backgroundImage: `url($person.url)` }}
          className="card">
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  )
}

export default TinderCards
