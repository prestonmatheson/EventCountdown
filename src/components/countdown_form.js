import React, { Component } from 'react';
import {
  Row,
  Card,
  Col
} from 'reactstrap';
import Countdown from './countdown';


class CountdownForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date().getTime(),
      inputTitle: 'date field'
    }
  }

  handleSubmit = function(props) {
    console.log(`value for date is: ${this.state[props.date]}`);
  }

  handleChange = function(props) {
    return function(event) {
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
    <div className="card-wrapper" >
      <Card>
        <form onSubmit={this.handleSubmit} id="event-form">
          <input type="date" id="date-selector" onChange={this.handleChange({state: this.state.prop})}></input>
          <input type="submit" className="generate-button" value="Generate Countdown"></input>
          <Countdown data={this.state} />
        </form>
        <Countdown data={this.state} />
      </Card>
    </div>
    );
  }
}

export default CountdownForm;