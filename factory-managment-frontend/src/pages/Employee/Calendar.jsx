import React, { Component } from "react";
import calendar from './calendar.png'

class Calendar extends Component {
  render(){
  return (
    
    <div className='home'>
      <img src={calendar} alt="calendar"/>
    </div>
  );
  }
};

export default Calendar;
