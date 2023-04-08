import React from 'react'
import './Jokes.sass'

const Jokes = ({ error, joke, id }) => {
  console.log(joke)
  return (
    <div className='joke-container'>
      <p className='joke'>{joke}</p>
    </div>
  )
}

export default Jokes