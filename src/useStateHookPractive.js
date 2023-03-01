import React from "react";
import { useState } from "react";


import ThisComponentRecivedValueAsPropThroughUseState from "./ThisComponentRecivedValueAsPropThroughUseState";




export default function useStateHookPractive() {
  let [counts, setCount] = useState(9);
  return (
    <div>
      <ThisComponentRecivedValueAsPropThroughUseState countered={counts} />
      <br/>
       <h3>jkasdhsadasdasdasdasdasdasd</h3>
      <button onClick={() => setCount(counts + 1)}>Button Name</button>
    </div>
  );
}

// before functional coding
// U need to crete class and inside calass you can create or initialize variable
// now tou can also create variable in function
