import React, { useState } from "react";
import axios from "axios";

const EventForm = () => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    startTime: "",
    endTime: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/events", event);
      alert("Event created successfully!");
      setEvent({ title: "", description: "", startTime: "", endTime: "" });
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create DR Event</h2>
      <input
        type="text"
        placeholder="Title"
        value={event.title}
        onChange={(e) => setEvent({ ...event, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={event.description}
        onChange={(e) => setEvent({ ...event, description: e.target.value })}
        required
      />
      <input
        type="datetime-local"
        value={event.startTime}
        onChange={(e) => setEvent({ ...event, startTime: e.target.value })}
        required
      />
      <input
        type="datetime-local"
        value={event.endTime}
        onChange={(e) => setEvent({ ...event, endTime: e.target.value })}
        required
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;