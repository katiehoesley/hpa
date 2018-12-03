import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
        }
    }

    handleInputChange(event){
        this.setState({
            query: event.search.value
        })
    }
    
    render() {
        return(
            <form>
                <input placeholder="Search for title..."
                ref={input => this.search = input}
                onChange={this.handleInputChange} />
                <p>{this.state.query}</p>
            </form>
        )
    }
}

export default Search;

//this page needs to return the title of a book and how many pages it has