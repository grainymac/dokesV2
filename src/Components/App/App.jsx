import { useState } from 'react'
import './App.sass'
import Jokes from '../../Containers/Jokes/Jokes'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App-container">
        <h1>Dokes V2</h1>
        <Jokes />
      </div>
    </>
  )
}

export default App
