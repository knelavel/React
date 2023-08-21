//useState hook
import React , {useState} from 'react'

function App() {
  
  const [count, setCount]= useState(0)
  
  function increment(){
    setCount(count+1)
  }
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Click here</button>
      <p>This is text</p>
    </div>
  )
}

export default App
