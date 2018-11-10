import React, { Component } from 'react';
import {
  Row,
  Card,
  Col
} from 'reactstrap';
import CountdownForm from './countdown_form';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Event Countdown</h1>
        <h2>React</h2>
        <CountdownForm />
      </div>
    );
  }
}
