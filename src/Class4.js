import React, {useState} from 'react';
import './CustomClass.css';
export default function Class4() {



let [Morning , setMorning] = useState(true)

  return (
    <div className= {`box ${Morning ? 'day' : 'night'}`}>
      


<h1>If this is morning {Morning ? 'Morning' : 'Night' } </h1>



<button  onClick ={()=> setMorning(!Morning)}>
Set Morning

</button>

    </div>
  );
}
