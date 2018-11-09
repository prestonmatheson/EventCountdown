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
      date: 'initial date',
      inputTitle: 'date field'
    }
  }

  handleSubmit = function(props) {
    console.log(`value for date is: ${this.state[props.date]}`);
  }

  handleChange = function(props) {
    return function(event) {
      console.log(`value for date is: ${this.state.date}`);
      this.setState({
        date: event.target.value
      });
      // console.log(`value for state ${this.state.date} is: ${event.target.value}`);
      console.log(`value for date is: ${this.state.date}`);
    }.bind(this);
  }

  render(){
    this.inputData = [ 
      {prop: 'date', state: this.state.date}
      ]
  return (
    <form onSubmit={this.handleSubmit} id="event-form">
      <input type="date" id="date-selector" onChange={this.handleChange({state: this.state.prop})}></input>
      <input type="submit" className="generate-button" value="Generate Countdown"></input>
    </form>
    );
  }
}

export default CountdownForm;