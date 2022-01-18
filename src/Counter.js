import React from "react";

var count = 0;
function Counter() {
  count++;
  return <div>{count}</div>;
}

export default Counter;
