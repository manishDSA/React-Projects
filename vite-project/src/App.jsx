import React from 'react'
import './App.css'

function App() {
  
  let [count, setcount]=React.useState(0)
 function addValue (){
  if (count<=19) {
    setcount(++count)
  }

  
  
   
 }
 function removeValue (){
  if (count>=0) {
    setcount(count--)
  }

 }
  return (
    <>
      <h1>Counter Value:{count}</h1>
      <button onClick={addValue}>Increment</button>
      <br/>
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
