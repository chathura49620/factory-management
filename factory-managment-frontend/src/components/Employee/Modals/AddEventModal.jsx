/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import React, { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import { ButtonToolbar } from 'react-bootstrap';


export default function ({isOpen, onClose, onEventAdded}) {

    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());

    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded ({
            title,
            start,
            end
        })
        onClose();
    }


    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>

                <div>
                    <h2 class="font-weight-bold">
                        Add an Event to your Calendar 
                    </h2>
                </div>



                <div>
                    <label>Event Name</label>
                    <input className="form-control" type="text" placeholder="Your Event Title" name="title" value={title} required onChange={ e => setTitle(e.target.value)}/>
                </div>

                <br></br>

                <div>
                     <label>Start Date</label>
                    <Datetime value={start} name="start" required onChange={date => setStart(date)} />
                </div>

                <br></br>

                <div>
                     <label>End Date</label>
                    <Datetime value={end} name="end" required onChange={date => setEnd(date)} />
                </div>

                <br></br>

                <div className="alert alert-info" role="alert">
                           Make sure to recheck your event values.  
                </div>

                <ButtonToolbar>
                    <button 
                        type="submit"
                        style={{ backgroundColor: "#7121AD", color: "white" }}
                        className="btn btn-lg">
                            Add Event
                    </button>
                </ButtonToolbar>

                
            </form>

        </Modal>
    )
}