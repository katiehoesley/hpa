import React from 'react';
import Clock from './Clock.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      goalDate: new Date(Date.UTC(2020, 11, 3, 0, 0, 0)).getTime(),
      now: '',
      difference: '',
      days: '',
      hours: '',
      minutes: '', 
      seconds: ''
    }
  }

  timer() {
      this.setState({
        now: new Date().getTime(),
        difference: this.state.goalDate - new Date().getTime(), 
        days: Math.floor((this.state.goalDate - new Date().getTime())/(1000*60*60*24)), 
        hours: Math.floor((this.state.goalDate - new Date().getTime())/(1000*60*60*24)) ,
        minutes: Math.floor(((this.state.goalDate - new Date().getTime()) % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor(((this.state.goalDate - new Date().getTime()) % (1000 * 60)) / 1000)
      });
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.timer(),
      1000
    );
  }


  render () {
    return (
    <div className='app'>
      <Clock days={this.state.days} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds} goalDate={this.state.goalDate}/>
    </div>)
  }
}

export default App; 