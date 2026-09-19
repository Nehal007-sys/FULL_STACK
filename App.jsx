import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const clickButton = (value) => {
    setDisplay(display + value);
  };

  const clear = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">

      <h2>Calculator</h2>

      <input
        type="text"
        value={display}
        readOnly
      />

      <div className="buttons">

        {/* Row 1 */}
        <button onClick={clear} className="clear">C</button>
        <button onClick={() => clickButton("/")}>÷</button>
        <button onClick={() => clickButton("*")}>×</button>
        <button onClick={() => clickButton("-")}>−</button>

        {/* Row 2 */}
        <button onClick={() => clickButton("7")}>7</button>
        <button onClick={() => clickButton("8")}>8</button>
        <button onClick={() => clickButton("9")}>9</button>
        <button onClick={() => clickButton("+")}>+</button>

        {/* Row 3 */}
        <button onClick={() => clickButton("4")}>4</button>
        <button onClick={() => clickButton("5")}>5</button>
        <button onClick={() => clickButton("6")}>6</button>
        <button onClick={() => clickButton(".")}>.</button>

        {/* Row 4 */}
        <button onClick={() => clickButton("1")}>1</button>
        <button onClick={() => clickButton("2")}>2</button>
        <button onClick={() => clickButton("3")}>3</button>
        <button onClick={calculate} className="equal">=</button>

        {/* Row 5 */}
        <button
          onClick={() => clickButton("0")}
          className="zero"
        >
          0
        </button>

      </div>
    </div>
  );
}

export default App;