import React , {useContext} from 'react';
import Child from './Child';
import ContextName from './Context';
export default function Parent() {
  let ValueComefrom = useContext(ContextName)
  console.log(ValueComefrom)
  return (
    <div>
    <h1> This is {ValueComefrom[1] }</h1>
    </div>
  );
}
