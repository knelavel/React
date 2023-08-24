import React, {useState} from 'react'
import data from './data'
import './App.css';
import List from './List.js'


const App = () => {
const[people, setPeople] = useState(data)


const handleClick= (e) =>{
   e.preventDefault()
   setPeople([])
}
  return (
    <div className="Container">
      <h2>{people.length} Birthdays today</h2>
      <List people={people} />
      <button className="btn" onClick={handleClick}>Clear All</button>
    
    </div>
  )
}

export default App
