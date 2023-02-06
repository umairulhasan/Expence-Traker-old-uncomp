import React from 'react';

export default function CounterInput(props) {
  return (
    //this is the child component 
    <>
      <button  onClick={() => props.setCounter(props.counter + 1)}>+</button>  
      <button onClick={() => props.setCounter(props.counter - 1)}>-</button>
    </>
  );
}
