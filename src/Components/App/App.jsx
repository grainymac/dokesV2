import { useState } from 'react'
import './App.sass'

import snesController from '../../assets/supernintendo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App-container">
        <h1>Dokes V2.0</h1>
        <img src={snesController} alt='super nintendo controller' />
      </div>
    </>
  )
}

export default App
