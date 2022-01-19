import React, { Component } from "react";
class Lifecylcle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log("constructor starts");
  }
  componentWillMount() {
    console.log("before component mount");
  }
  increment = () => {
    this.setState((prev, props) => ({ counter: prev.counter + 1 }));
  };
  shouldComponentUpdate() {
    return false;
    //console.log("before component update");
  }
  componentWillUpdate() {
    console.log("before component update");
  }
  render() {
    console.log("render starts");
    return (
      <div>
        <button onClick={this.increment}>Add</button>
        <p>you have clicked {this.state.counter} times</p>
      </div>
    );
  }
  componentDidUpdate() {
    console.log("after component update");
  }
  componentDidMount() {
    console.log("after component mount");
  }
}

export default Lifecylcle;
