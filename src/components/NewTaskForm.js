import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text: '',
    category: 'Code',
  })

  const options = categories.slice(1).map((category) => {
    return <option key={category}>{category}</option>
  })

  function handleTextChange (event) {
    setFormData({...formData, text:event.target.value})
  }

  function handleCategoryChange (event) {
    setFormData({...formData, category:event.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit({text: formData.text, category: formData.category})
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange} value={formData.text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={formData.category}>
          {options}
        </select>
      </label>
      <input type="submit" value='Add task' />
    </form>
  );
}

export default NewTaskForm;
