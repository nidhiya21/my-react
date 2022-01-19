import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ["item1", "item2"],
      textContent: "",
    };
  }
  getText = (e) => {
    this.setState({ textContent: e.target.value });
  };
  addItem = (e) => {
    let currentText = this.state.textContent;
    let currentitem = this.state.item;

    currentitem.push(currentText);
    this.setState({ item: currentitem });
  };
  removeItem = (k) => {
    if (!window.confirm("Are you want to delete this item?")) {
      return;
    }
    let currentItem = this.state.item;
    currentItem.splice(k, 1);
    this.setState({ item: currentItem });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.getText}></input>
        <button onClick={this.addItem}>Add</button>
        <ul>
          {this.state.item.map((itm, k) => {
            return (
              <li>
                {itm}
                <button
                  onClick={() => {
                    this.removeItem(k);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
        <p>{this.state.textContent}</p>
      </div>
    );
  }
}

export default Todo;
