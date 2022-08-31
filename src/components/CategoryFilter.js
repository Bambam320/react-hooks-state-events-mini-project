import React from "react";

function CategoryFilter({categories, setCategoryClass, categoryClass}) {
  

  function handleClick(e) {
    setCategoryClass(e.target.value)
  }

  const listCategory = categories.map((category) => {
    return (
      <button 
        className={categoryClass === category ? 'selected' : 'none'} 
        key={category}
        value={category}
        onClick={(e) => handleClick(e)}
        >{category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {listCategory}
    </div>
  );
}

export default CategoryFilter;
