import React, { Component } from "react";
class Loop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["apple", "orange", "grape", "pista"],
      users: [
        { name: "appu", age: 20 },
        { name: "karuna", age: 30 },
        { name: "nithin", age: 27 },
      ],
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
        <table>
          <tr>
            <td>Name</td>
            <td>Age</td>
          </tr>
          {this.state.users.map((itm, k) => {
            return (
              <tr>
                <td> {itm.name}</td>
                <td> {itm.age}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
export default Loop;
