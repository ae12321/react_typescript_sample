import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type CounterTitleProps = { name: string; count: number };
type CounterProps = { name: string };

const CounterTitle = (props: CounterTitleProps) => {
  return (
    <h1>
      {props.name}'s count: {props.count}
    </h1>
  );
};
const CounterComponent = (props: CounterProps) => {
  const [count, setCount] = useState(0);
  const handleAdd = () => setCount((prev) => prev + 1);
  const handleMinus = () => setCount((prev) => prev - 1);
  const handleReset = () => setCount(0);

  return (
    <>
      <CounterTitle name={props.name} count={count}></CounterTitle>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleMinus}>minus</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <CounterComponent name="test1" />
      <CounterComponent name="test2" />
      <CounterComponent name="test3" />
    </div>
  );
}

export default App;
