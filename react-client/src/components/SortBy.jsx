import React from 'react'; 

const SortBy = ( props ) => {

  const { handleSort } = props; 

  return (
      <form id="sort-by" onChange={ handleSort }>  
        <label>
          Sort By:
          <select id="select">
            <option value="blank"></option>
            <option value="price">Price (Low to High)</option>
            <option value="timestamp">Date Posted</option>
            <option value="title">Name</option>
          </select>
        </label>
      </form>
    );
}

export default SortBy;