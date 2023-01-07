import React, {useState} from 'react'
import { data } from '../constants/data'


function BirthdayCard({people, setPeople}) {
   
    
    

   const clearPeople = () => {
         setPeople([])
         console.log(people)
    }
    const getPeople = () => {

        setPeople(people)
        console.log(people)
    }
  return (
    <div className='container'>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
  <div className=''>
     <button onClick={clearPeople} className='clear-btn'>Clear all</button> <br/>
  </div>

    </div>
  )
}

export default BirthdayCard