//import logo from "./logo.svg";
import "./App.css";
import React from "react";
//import { Header, Footer } from "./Home";
import Contact from "./Contact";
import Welcome from "./Welcome";
function greet(name) {
  return <p>{name}</p>;
}

function App() {
  // var x = React.createElement("p", { id: "test" }, "some text");
  // return x;
  //var name = "Rince";
  var age = 18;
  // return (
  //   <div>
  //     <p>{greet("nidhiya")}</p>
  //     <p>{greet("nidhiya1")}</p>
  //   </div>
  // );
  // return <p> you are{age >= 18 ? " eligible" : " not eligible"} for voting</p>;
  // return (
  //   <div>
  //     <p>
  //       <Contact st={{ color: "red" }} id={["Abi", 10]} name="teacher" />
  //     </p>

  //     <p>
  //       <Contact st={{ color: "blue" }} id={["tresa", 20]} name="student" />
  //     </p>
  //   </div>
  // );
  // return (
  //   <div>
  //     <p>
  //       <Welcome />
  //     </p>
  //   </div>
  // );
  return (
    <div>
      <p>
        <Welcome title="how are you" />
      </p>
    </div>
  );
}

export default App;
