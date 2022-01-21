import React from "react";
import Homenew from "./Homenew";
import About from "./About";
import Contactus from "./Contactus";
import Item from "./Item";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Routing extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/item/1">Item 1</Link>
            </li>
            <li>
              <Link to="/item/2">Item 2</Link>
            </li>
            <li>
              <Link to="/item/3">Item 3</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<Homenew />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contactus />} />
          <Route exact path="/item/:id" element={<Item />} />
        </Routes>
      </Router>
    );
  }
}

export default Routing;
