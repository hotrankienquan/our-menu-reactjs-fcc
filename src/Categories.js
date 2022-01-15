import React from 'react';

const Categories = ({ filterItems,categories }) => {
  
  return <div className='btn-container'>
    {categories.map((cate, index) => {
      return (
        <button type='button' className='filter-btn' key={index}
        onClick={() => filterItems(cate)}
        >
          {cate}
      </button>
    )
  })}
  </div>;
};

export default Categories;
