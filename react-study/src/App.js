import "./App.css";
import { Component } from "react";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPractice from "./components/EventPractice";
import ValidationSample from "./components/ValidationSample";
import ScrollBox from "./components/ScrollBox";
import IterationSample from "./components/IterationSample";

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent name="React" favoriteNumber={1}>
          children
        </MyComponent>
        <Counter></Counter>
        <Say></Say>
        <EventPractice></EventPractice>
        <ValidationSample />
        <ScrollBox
          ref={(ref) => {
            this.scrollBox = ref;
          }}
        />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <br />
        <IterationSample />
      </div>
    );
  }
}
export default App;
