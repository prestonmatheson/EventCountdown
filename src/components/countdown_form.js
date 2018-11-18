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
      completedForm: false,
      inputTitle: 'date field'
    }
  }

  handleSubmit = function(event) {
    // console.log(`value for date is: ${this.state.date}`);
    this.setState({completedForm: true});
    event.preventDefault();
  }.bind(this);

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
          <Row>
            <Col md="12">
              <div className="date-col">
                <input type="date" id="date-selector" onChange={this.handleChange({state: this.state.prop})}></input>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <div className="date-col">
                <input type="submit" className="generate-button" value="Generate Countdown"></input>
              </div>
            </Col>
          </Row>
          <Countdown data={this.state} />
        </form>
        <Countdown data={this.state} />
      </Card>
    </div>
    );
  }
}

export default CountdownForm;