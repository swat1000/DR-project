import React from "react";
import EventForm from "./components/EventForm";
import ConsumerForm from "./components/ConsumerForm";
import EventList from "./components/EventList";
import ConsumerList from "./components/ConsumerList";

const App = () => {
  return (
    <div>
      <h1>Demand Response Platform</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <EventForm />
          <EventList />
        </div>
        <div>
          <ConsumerForm />
          <ConsumerList />
        </div>
      </div>
    </div>
  );
};

export default App;