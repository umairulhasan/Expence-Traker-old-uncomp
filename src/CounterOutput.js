import React from "react";

//This is the child component

export default function CounterOutput(props) {
  return (
    <>
      <h5>This is the child component Data</h5>
      Counter Value: {props.counter}
    </>
  );
}
