/* eslint-disable import/no-anonymous-default-export */


import React, { useRef, useState } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import AddEventModal from "../../components/Employee/Modals/AddEventModal";
import { ButtonToolbar } from 'react-bootstrap';


export default function () {
  
  const [modalOpen, setModalOpen] = useState(false);

  const calendarRef = useRef(null);

  const onEventAdded  = event => {
    let calendarApi = calendarRef.current.getApi()
    calendarApi.addEvent(event);
  }

  return (

    
    <section>
     
      
     <ButtonToolbar>
        <button 
            style={{ backgroundColor: "#7121AD", color: "white" }}
            className="btn btn-lg"
            type="button" 
            onClick={() => setModalOpen(true)}>
                Add Event
        </button>
      </ButtonToolbar>
        
        <div style={{position: "relative", zIndex: 0}}>
        <FullCalendar
            ref={calendarRef}
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
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

