import React, { Component } from 'react';
import {
  Row,
  Card,
  Col
} from 'reactstrap';
class Countdown extends Component {
  render () {
    const data = this.props.data;
    console.log(data.date);
        // Set the date we're counting down to
    var countDownDate = new Date(data.date).getTime();
              // Update the count down every 1 second
    var x = setInterval(function() {
      // Get todays date and time
      var now = new Date().getTime();
      
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
      
      // If the count down is over, write some text 
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "Today is the day!";
      }
    }, 1000);
    return(
      <h1 id="demo" className={data.completedForm ? 'show-content' : 'hide-content'}></h1>
      );
  }
  
}
export default Countdown;