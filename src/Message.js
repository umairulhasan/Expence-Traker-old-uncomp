import React,{ useState ,useContext } from 'react';  
import Context from './Context';
export  function Message(){


    let [count, setCount] = useState(9)
let checkvalue = useContext(Context);
console.log('For checking value' ,checkvalue)  //value I recive 40 from provider through prop
    return(
        <div>
            <h1>The value of counter variable is from message {count}</h1>
            <button onClick={()=> setCount(--count)}>Down</button>
        </div>
    )
}
