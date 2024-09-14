import React, { useState, useContext } from 'react';
import EventContext from '../context/EventContext';

const EventForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [location, setLocation] = useState('');
    const { createEvent } = useContext(EventContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createEvent({ name, description, startDate, endDate, location });
    };

    return (
        <div>
            <h2>Create Event</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Event Name" />
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default EventForm;
