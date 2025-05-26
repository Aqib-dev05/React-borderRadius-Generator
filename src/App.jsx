import "./App.css";
import Box from "./Components/Box.jsx";
import Input from "./Components/Input.jsx";

function App() {
  return (
    <div className="container">

        <h1>Border Radius Generator</h1>
      <div className="inner">

        <div className="inputs">

          <h2>Top Left Radius</h2>
          <Input />
          <h2>Top Right Radius</h2>
          <Input />
          <h2>Bottom Left Radius</h2>
          <Input />
          <h2>Bottom Right Radius</h2>
          <Input />
        </div>

       <div className="bb">

      <Box />
      <p>border-radius: </p>
       </div>
      </div>
    </div>
  );
}

export default App;
