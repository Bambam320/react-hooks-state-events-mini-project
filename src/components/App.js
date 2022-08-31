import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  // eslint-disable-next-line
  const [categories, setCategories] = useState(CATEGORIES)
  const [categoryClass, setCategoryClass] = useState('All')


  function theseTasks(text) {
    setTasks(tasks.filter((task) => task.text !== text));
  }

  function handleSubmit(e) {
    setTasks([...tasks, e])
  }

  const newList = tasks.filter((task) => {
    if (categoryClass === 'All') return true 
    return (task.category === categoryClass) 
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} categoryClass={categoryClass} setCategoryClass={setCategoryClass}/>
      <NewTaskForm categories={categories} onTaskFormSubmit={handleSubmit} />
      <TaskList onDeleteTask={theseTasks} tasks={newList} categoryClass={categoryClass}/>
    </div>
  );
}

export default App;
