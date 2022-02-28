import "./App.css";
import { Component } from "react";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPractice from "./components/EventPractice";
import ValidationSample from "./components/ValidationSample";
import ScrollBox from "./components/ScrollBox";
import IterationSample from "./components/IterationSample";
import LifeCycleSample from "./components/LifeCycleSample";
import ErrorBoundary from "./components/ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
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
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
