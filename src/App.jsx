import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCounter from "./hooks/useCounter";

function App() {
  debugger;
  const counter = useCounter();
  console.log("hi from app component");
  return <h1>Second Passed: {counter}</h1>;
}

export default App;
