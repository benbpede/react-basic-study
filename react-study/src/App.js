import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";

function App() {
  return (
    <>
      <MyComponent name="React" favoriteNumber={1}>
        children
      </MyComponent>
      <Counter></Counter>
      <Say></Say>
    </>
  );
}

export default App;
