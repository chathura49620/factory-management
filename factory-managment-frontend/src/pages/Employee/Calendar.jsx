import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (

    
    <section>

      
          <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />

    </section>
  )

}


