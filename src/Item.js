import React from "react";
import { useParams } from "react-router-dom";

export default function Item() {
  let { id } = useParams();
  return (
    <div>
      <p>Item {id}</p>
    </div>
  );
}
