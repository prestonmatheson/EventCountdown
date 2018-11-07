import React, { Component } from 'react';
import {
  Row,
  Card,
  Col
} from 'reactstrap';

class CountdownForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: ''
    }
  }

  handleSubmit = function(props) {
    console.log(`value for date is: ${this.state[props.date]}`);
  }

  handleChange = function(props) {
    return console.log(`value for input is: ${event.target.value}`);
  }

  render(){
    this.inputData = [ 
      {prop: 'date', state: this.state.date}
      ]
  return (
    <form onSubmit={this.handleSubmit} id="event-form">
      <input type="date" id="date-selector" onChange={this.handleChange.bind(this)}></input>
      <input type="submit" className="generate-button" value="Generate Countdown"></input>
    </form>
    );
  }
}

export default CountdownForm;