import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/events');
                setEvents(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchEvents();
    }, []);

    const createEvent = async (eventData) => {
        try {
            const res = await axios.post('http://localhost:5000/api/events', eventData);
            setEvents([...events, res.data]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <EventContext.Provider value={{ events, createEvent }}>
            {children}
        </EventContext.Provider>
    );
};

export default EventContext;
