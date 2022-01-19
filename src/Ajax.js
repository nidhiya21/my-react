import React, { Component } from "react";
import axios from "axios";
class Ajax extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
    });
  }

  render() {
    return <div>Ajax</div>;
  }
}

export default Ajax;
