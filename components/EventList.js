import React, { useContext } from 'react';
import EventContext from '../context/EventContext';

const EventList = () => {
    const { events } = useContext(EventContext);

    return (
        <div>
            <h2>Event List</h2>
            <ul>
                {events.map(event => (
                    <li key={event._id}>
                        <h3>{event.name}</h3>
                        <p>{event.description}</p>
                        <p>{new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}</p>
                        <p>Location: {event.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
