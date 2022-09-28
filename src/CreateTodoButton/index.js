import React from "react";
import "./CreateButton.css";
const onClick = () => alert("OLAWAS");

function CreateTodoButton(props) {
  return (
    <button className="CreateTodoButton" onClick={onClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
