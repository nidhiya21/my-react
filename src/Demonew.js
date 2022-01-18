import React, { Component } from "react";
class Demonew extends Component {
  // clickHandler() {
  //   alert("123");
  // }
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      enable: false,
      textcontent: "nothing",
    };
  }
  clickHandler = () => {
    alert("123");
  };
  increment = () => {
    this.setState((prev, props) => ({ counter: prev.counter + 1 }));
  };
  decrement = () => {
    this.setState((prev, props) => ({ counter: prev.counter - 1 }));
  };
  checkboxClicked = () => {
    this.setState((prev, props) => ({ enable: !prev.enable }));
  };
  textValue = (e) => {
    this.setState({ textcontent: e.target.value });
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <p>you have clicked {this.state.counter}times</p>
        <label>Enable</label>
        <input type="checkbox" onClick={this.checkboxClicked}></input>
        <p>{this.state.enable ? "enabled" : "disabled"}</p>
        <input type="text" onChange={this.textValue}></input>
        <p>{this.state.textcontent}</p>
        <br />
      </div>
    );
  }
}

export default Demonew;
