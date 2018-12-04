import React from 'react';

const Search = (props) => {
    return(
        <div className='search'>
            <form className='form' onSubmit={props.handleSubmit}>
                <input placeholder="Search for title..."
                onChange={props.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

}

export default Search;

//this page needs to return the title of a book and how many pages it has