import React, { Component } from 'react';
import CountdownForm from './countdown_form';
import Countdown from './countdown';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Event Countdown</h1>
        <h2>React</h2>
        <CountdownForm />
        <Countdown />
        <p id="demo"></p>
      </div>
    );
  }
}
