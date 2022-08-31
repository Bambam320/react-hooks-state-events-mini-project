import React from "react";

function Task({category, text, onDeleteTask}) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={(e) => onDeleteTask(text)}>X</button>
    </div>
  );
}

export default Task;
