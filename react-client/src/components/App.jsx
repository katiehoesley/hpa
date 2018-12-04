import React from 'react';
import Search from './Search.jsx';
import ReadList from './ReadList.jsx';
import Preferences from './Preferences.jsx';
// import Calendar from './Calendar.jsx'
//api key for google books: AIzaSyALTwiKEYt0U-s7CJ_EPQ9H1izosAfn6L0

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      previous: ['To Kill A Mockingbird', 'Girl With The Dragon Tattoo', 'Sapiens', 'This Was A Call'],
      title: '____', 
      pageNum: 0,
      daysToRead: 0,
      pagesPerNight: 100,
      startDate: '____',
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      title: event.target.value
    });
  }

  handleSubmit(event) {
    fetch('/books', {
      method: 'POST',
      body: { title: this.state.title }
    })
      .then(response => {
        console.log(response.body.toString())
        response.json()
        // console.log(response.body)
      })
      .then((data) => 
        this.setState({
        pageNum: 457
        }))
      event.preventDefault(); 
  }

  handleSelect(event) {
    event.preventDefault(); 
    console.log(event.target.value)
    this.setState({
      pagesPerNight: parseInt(event.target.value)
    })
  }

  handleSelectTwo(event) {
    event.preventDefault(); 
    this.setState({
      startDate: event.target.value
    })
  }
  

  render () {
    return (
    <div className="container">
      <div className="title">{(new Date()).getFullYear()} Book Calendar</div>
      <Search handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/> 
      <Preferences handleSelectTwo={this.handleSelectTwo.bind(this)} startDate={this.state.startDate} pagesPerNight={parseInt(this.state.pagesPerNight)} pageNum={this.state.pageNum} handleSelect={this.handleSelect.bind(this)} title={this.state.title}/>
      <ReadList books={this.state.previous} />
    </div>)
  }
}

export default App; 