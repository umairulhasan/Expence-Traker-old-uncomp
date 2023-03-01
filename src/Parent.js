import React from 'react';
import Child from './Child';

export default function Parent(props) {
  return (
    <div>
    <Child name= {props.name}/>
    </div>
  );
}
