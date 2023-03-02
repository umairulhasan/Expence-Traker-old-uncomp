import React , {useReducer} from 'react';
import ReducerPractice from './ReducerPractice';
export default function ForReducer() {

let [just , dispatch] = useReducer(ReducerPractice , 10);


  return (
    <div>
      <h1>This is reducer value {just}</h1>
      <button  onClick={()=>dispatch('INCREMENT')}>PRESS</button>
    </div>
  );
}
