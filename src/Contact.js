import React from "react";
import "./Contact.css";
function Contact(props) {
  //console.log(props);
  var nm = props.name.toUpperCase();
  var st = { color: "blue", padding: 2, border: "solid 1px gray" };
  return (
    <div style={props.st}>
      <h2>{props.id[1]}</h2>
      <h2>{nm} Contact form</h2>
      <label className="emailad">Email Address</label>
      <input type="text" />
      <br />
      <label>Message</label>
      <textArea></textArea>
      <button>Send</button>
    </div>
  );
}

export default Contact;
