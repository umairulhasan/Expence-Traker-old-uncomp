import React from "react";
import { useSelector } from "react-redux";
//This is the child component

export default function CounterOutput() {

    const counter = useSelector((state)=> state.counter);
  return (
    <>
      <h5>This is the child component Data</h5>
      Counter Value: {counter}
    </>
  );
}
