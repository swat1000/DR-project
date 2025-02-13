import React, { useEffect, useState } from "react";
import axios from "axios";

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get("http://localhost:3001/events");
      setEvents(response.data);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>DR Events</h2>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>Start: {event.startTime}</p>
          <p>End: {event.endTime}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;