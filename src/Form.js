import React, { Component } from "react";
import axios from "axios";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "name",
      password: "password",
      displayName: "display",
    };
  }
  inputSet = (e) => {
    console.log(e.target.name);

    this.setState({ [e.target.name]: e.target.value });
  };
  register = (e) => {
    e.preventDefault();
    var data = {
      username: this.state.username,
      password: this.state.password,
      displayName: this.state.displayName,
    };
    axios.post("http://localhost/react/api.php", data).then((response) => {
      // this.setState({ posts: response.data });
      //alert(response);
      if ((response.data = "success")) {
        alert("saved");
      } else {
        alert("error");
      }
    });
  };

  render() { 
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Registration</h2>
            <form>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  onChange={this.inputSet}
                  name="username"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  onChange={this.inputSet}
                  name="password"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Dispaly Name</label>
                <input
                  type="text"
                  onChange={this.inputSet}
                  name="displayName"
                  className="form-control"
                />
              </div>
              <div className="form-group  ">
                <button
                  onClick={this.register}
                  className=" pb5 btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
            <p>{this.state.username}</p>
            <p>{this.state.password}</p>
            <p>{this.state.displayName}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
