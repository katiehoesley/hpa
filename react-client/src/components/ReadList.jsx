import React from 'react';

function ReadList(props) {
    const readList = props.books.map((book) => {
        return <li>{book}</li>
    });
    console.log(props);
    console.log(readList);
    return(
        <div className='previous'>
            <div className='words'>
                 Previously Read in {(new Date()).getFullYear()}:
            </div>
            <ul className='list'>{readList}</ul>
        </div>
    )
}

export default ReadList; 