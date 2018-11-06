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
    console.log(`value for date is: ${props.date}`);
  }

  render(){
  return (
    <form onSubmit={this.handleSubmit} id="event-form">
      <input type="date" id="date-selector"></input>
      <input type="submit" className="generate-button" value="Generate Countdown"></input>
    </form>
    );
  }
}

export default CountdownForm;