import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decreasementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Increse</button>
      <button onClick={decreasementItem}>descrese</button>
    </div>
  );
};

// compare

class AppUgly extends React.Component {
  state = {
    item: 1
  };

  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.incrementItem}>Increse</button>
        <button onClick={this.decreasementItem}>descrese</button>
      </div>
    );
  }

  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1
      };
    });
  };
  decreasementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1
      };
    });
  };
}

export default App;
