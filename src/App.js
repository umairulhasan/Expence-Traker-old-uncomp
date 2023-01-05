import React, { useState } from "react"; 
import Context from './Context';
import {Message} from './Message.js'
import "./App.css";

function App() {
  let [count, setCount] = useState(0)

    //setCount(2)
  
  return (
    <Context.Provider value={40}>
    <div >
      <Message counter={count}/>
      <h3>Hello the value of count is from app: {count}</h3>
      <button  onClick={()=> setCount(++count)}>UP</button>
    </div>
    </Context.Provider>
    
  )}

export default App;
