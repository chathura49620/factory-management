/* eslint-disable import/no-anonymous-default-export */


import React, { useRef, useState } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import AddEventModal from "../../components/Employee/Modals/AddEventModal";
import { ButtonToolbar } from 'react-bootstrap';
import axios from "axios";
import moment from "moment"
import "./styles.css"
import calendarpic from "../../pages/assets/calendarpic.jpg"


export default function () {
  
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] =useState([]);
  const calendarRef = useRef(null);

  const onEventAdded  = event => {
    let calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent({
      start: moment (event.start).toDate(),
      end: moment(event.end).toDate(),
      title: event.title
    });
  };

  async function handleEventAdd(data) {
    await axios.post('/api/calendar/create-event', data.event);
  }

  async function handleDataSet(data) {
    const response = await axios.get(
                                    '/api/calendar/get-events?start='+
                                    moment(data.start).toISOString() + 
                                    '&end=' +
                                    moment(data.end).toISOString());
    setEvents(response.data);
    
  }

  return (

    
    <section>
      <br></br>

      <h2 className="heading">My Events</h2>

        <div className="center">
            <img src={calendarpic} alt="calendarpic"/>
        </div>
     
    <br></br>
     <ButtonToolbar>
        <button 
            style={{ backgroundColor: "#7121AD", color: "white"}}
            className="btn btn-lg"
            type="button" 
            onClick={() => setModalOpen(true)}>
                Add an Event
        </button>
      </ButtonToolbar>

      <br></br>
        
        <div style={{position: "relative", zIndex: 0}}>
        <FullCalendar
            ref={calendarRef}
            events={events}
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            eventAdd={event => handleEventAdd(event)}
            dataSet={(date) => handleDataSet(date)}
        />
        </div>

      <AddEventModal 
      isOpen={modalOpen} 
      onClose={() => setModalOpen(false)} 
      onEventAdded={event => onEventAdded(event)}
      />


    </section>
  )

}

