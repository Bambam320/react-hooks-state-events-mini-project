import React from "react";
import Task from "./Task"

function TaskList({onDeleteTask, tasks}) {

  const listTasks = tasks.map((task, index) => {
    return <Task 
      key={index} 
      category={task.category} 
      text={task.text} 
      onDeleteTask={onDeleteTask}
    />
  });
  
  return (
    <div className="tasks">
      {listTasks}
    </div>
  );
}

export default TaskList;
