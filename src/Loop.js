import React, { Component } from "react";
class Loop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["apple", "orange", "grape", "pista"],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((itm, k) => (
            <li key={k}>{itm}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Loop;
