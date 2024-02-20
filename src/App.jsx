import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  const changeCounter = ()=>{
    setCount(count+1);
  }

  return (
    <>
 <button onClick={changeCounter}> MasaNaser {count}</button> 
    </>
  )
}

export default App
