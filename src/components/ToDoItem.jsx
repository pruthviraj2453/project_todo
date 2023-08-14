import React, { useState } from "react";

function ToDoItem(props) {
  const [checked, updatChecked] = useState(false);
  function handleClick() {
    updatChecked((prealue) => {
      return !prealue;
    });
  }

  return (
    <li
      style={{ textDecoration: checked ? "line-through" : null }}
      onClick={handleClick}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
