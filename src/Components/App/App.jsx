import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.sass'
import Jokes from '../../Containers/Jokes/Jokes'
import dadJoke from '../../assets/DADJOKE.png'

const App = () => {
  const [joke, setJoke] = useState('')
  const [count, setCount] = useState(0)
  const [e, setError] = useState('')

  const getAllDadJokes = async () => {
    let url = "https://icanhazdadjoke.com/";
    try {
      const response = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log(response.data)
      setJoke(response.data);
    } catch (e) {
      setError(e)
      console.log(e);
    }
  }

  useEffect(() => {
    getAllDadJokes()
  }, [])


  return (
    <>
      <h1>Welcome to Dokes!</h1>
      <div className="app-container">
        <Jokes error={e} joke={joke.joke} id={joke.id}/>
        <button className='dad-btn'><img src={dadJoke} alt='dad joke icon' /></button>
      </div>
    </>
  )
}

export default App
