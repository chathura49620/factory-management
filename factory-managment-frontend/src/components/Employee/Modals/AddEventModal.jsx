/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-undef */
import React, { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";

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

                
                <input placeholder="Title" value={title} onChange={ e => setTitle(e.target.value)}/>

                <div>
                     <label>Start Date</label>
                    <Datetime value={start} onChange={date => setStart(date)} />
                </div>

                <div>
                     <label>End Date</label>
                    <Datetime value={end} onChange={date => setEnd(date)} />
                </div>

                <div className="alert alert-info" role="alert">
                           Make sure to recheck your date values.  
                </div>

                <button type="submit">Add Event</button>


                
            </form>

        </Modal>
    )
}