import PropTypes from "prop-types";
import { Component } from "react";

// const MyComponent = ({ name, children, favoriteNumber }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       children 값은 {children} 입니다. <br />\ 제가 제일 좋아하는 숫자는{" "}
//       {favoriteNumber}입니다.
//     </div>
//   );
// };

// function MyComponent(props) {
//   return <div>나의 새롭고 멋진 {props.content}</div>;
// }

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, children, favoriteNumber } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children} 입니다. <br />
        제가 제일 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// MyComponent.defaultProps = {
//   name: "기본 이름",
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponent;
