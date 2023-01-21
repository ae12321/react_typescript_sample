import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("marumaru");
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="App">
      <input type="text" onChange={handleOnChange} />
    </div>
  );
}

export default App;
