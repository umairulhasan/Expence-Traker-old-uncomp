// import React, { useState } from "react"; 
// import Context from './Context';
// import {Message} from './Message.js'


// function App() {
//   let [count, setCount] = useState(40)

//   count = 34 ;

//   //   return
//   // }
  
//   return (


// <div>
// <h5>
//   count = 4 ;
// {count}
// </h5>

// </div>



//     // <Context.Provider value={40}  >
//     // <div >
//     //   {/* <Message counter={count}/> */}
//     //   <h3>Hello the value of count is from app: {count}</h3>
//     //   <button  onClick={()=> setCount(++count)}>UP</button>
//     // </div>
//     // </Context.Provider>
    
//   )}

// export default App;
import React, { useState } from 'react';
import './CustomClass.css';
import CounterInput from './CounterInput';
import CounterOutput from './CounterOutput';
import Filterpractive from './Filterpractive';
import Prop from './propsPractice';
import UseStateHookPractive from './UseStateHookPractive';
import ThisComponentRecivedValueAsPropThroughUseState from './ThisComponentRecivedValueAsPropThroughUseState';
import Class4 from './Class4';
import Parent from './Parent'
function App() {
  

  return (
    


    //This is the parent component 
    <div >
      <Parent name= {"Umair"}/>
  
    </div>
  );
}

export default App;