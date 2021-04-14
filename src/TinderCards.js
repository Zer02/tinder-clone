// build component structure with "rfce"
import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]);

  // Piece of code which runs based on a condition
  useEffect(() => {
    // this is where the code runs..
  
    database.collection('people').onSnapshot(snapshot => (
      setPeople(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  // GOOD (Push to an array in React)
  // setPeople([...people, 'sonny', 'qazi']);

  // BAD, but does the same thing in vanilla JS
  // const people = [];
  // people.push('sonny', 'qazi')

  return (
    <div>
      <h1>Tinder cards</h1>

      <div className="tinderCards__cardContainer">
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
    </div>
  )
}

export default TinderCards;
