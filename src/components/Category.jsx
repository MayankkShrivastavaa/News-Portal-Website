import React from 'react'

const Category = ({category, setCategory}) => {

    let categories = ["general", "business", "sports", "technology", "health", "entertainment", "science"]


  return (
    <div>
      {categories.map((c) => (
        <button></button>
      ))}
    </div>
    
  )
}

export default Category
