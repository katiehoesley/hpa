import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './Search.jsx';
import ReadList from './ReadList.jsx';
import Preferences from './Preferences.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: ['hello', 'goodbye'],
      previous: ['To Kill A Mockingbird', 'Harry Potter']
    }
  }

//   componentDidMount() {
//     $.ajax({
//       url: '/items', 
//       success: (data) => {
//         this.setState({
//           items: data
//         })
//       },
//       error: (err) => {
//         console.log('err', err);
//       }
//     });
//   }

  render () {
    return (<div>
      <h1>Your {(new Date()).getFullYear()} Book Calendar</h1>
      <Search items={this.state.items} /> 
      <Preferences />
      <ReadList books={this.state.previous} />
    </div>)
  }
}

export default App; 