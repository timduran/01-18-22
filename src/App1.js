import { useState } from 'react'

// const names = ['John Doe', 'Jane Doe', 'Jack Doe', 'James Doe', 'Jared Doe']

const App = () => {

  const [countState, setCountState] = useState({
    count: 0
  })

  const handleIncrementCount = () => {
    setCountState({ count: countState.count + 1 })
  }

  return (
    <>
    {/* <ul>
      {names.map(name => <li>{name}</li>)}
    </ul> */}
    <h1>Count: {countState.count}</h1>
    <button onClick={handleIncrementCount}>Click Me</button>
    </>
  )
}

export default App
