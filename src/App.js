import "./styles.css";

import { useState } from "react";

export default function App() {
  const [timeInc, setTimeInc] = useState(0);

  const handleIncre = (e) => {
    console.log("time", timeInc);
    setTimeInc((timeInc) => timeInc + 1);
  };
  const handleDecre = () => {
    console.log("dectime", timeInc);
    setTimeInc((timeInc) => timeInc - 1);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>{timeInc}</p>
      <button onClick={handleIncre}>Increment</button>
      <button onClick={handleDecre}>Decrement</button>
    </div>
  );
}
