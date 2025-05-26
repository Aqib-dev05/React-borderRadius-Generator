import "./App.css";
import Box from "./Components/Box.jsx";
import Input from "./Components/Input.jsx";
import { useState } from "react";

function App() {
  const [val, setVal] = useState({
    tl:0,
    tr:0,
    bl:0,
    br:0,
  });

  function handleInput(e) {
    setVal({
      ...val,
      [e.target.name]: parseInt(e.target.value) || 0,
    });
  }

  return (
    <div className="container">
      <h1>Border Radius Generator</h1>
      <div className="inner">
        <div className="inputs">
          <h2>Top Left Radius</h2>
          <Input func={handleInput} val={val.tl} name={"tl"} />
          <h2>Top Right Radius</h2>
          <Input func={handleInput} val={val.tr} name={"tr"} />
          <h2>Bottom Left Radius</h2>
          <Input func={handleInput} val={val.bl} name={"bl"} />
          <h2>Bottom Right Radius</h2>
          <Input func={handleInput} val={val.br} name={"br"} />
        </div>

        <div className="bb">
          <Box values={val} />
          <p>
            border-radius: {val.tl}% {val.tr}% {val.br}% {val.bl}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
