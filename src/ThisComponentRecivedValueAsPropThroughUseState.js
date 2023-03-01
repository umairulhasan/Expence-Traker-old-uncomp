import React from 'react';

export default function ThisComponentRecivedValueAsPropThroughUseState(props) {
  return (
    <div>
      <h3>We recive this value through prop from useStateHookPractive component {props.counteredValue}  </h3>
    </div>
  );
}

