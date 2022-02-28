import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Info from "./components/Info";
import Average from "./components/Average";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Counter />
      <div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "숨기기" : "보이기"}
        </button>
        <hr />
        {visible && <Info />}
      </div>
      <Average />
    </>
  );
}

export default App;
