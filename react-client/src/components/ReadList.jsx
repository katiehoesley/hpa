import React from 'react';

function ReadList(props) {
    const readList = props.books.map((book) => {
        <li>{book}</li>
    }); 
    
    return(
        <div className='previous'>
        Previously Read in {(new Date()).getFullYear()}:
        <ul>{readList}</ul>
        </div>
    )
}

export default ReadList; 