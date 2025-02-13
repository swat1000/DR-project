import React, { useState } from "react";
import axios from "axios";

const ConsumerForm = () => {
  const [consumer, setConsumer] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/consumers", consumer);
      alert("Consumer added successfully!");
      setConsumer({ name: "", email: "", address: "" });
    } catch (error) {
      console.error("Error adding consumer:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Consumer</h2>
      <input
        type="text"
        placeholder="Name"
        value={consumer.name}
        onChange={(e) => setConsumer({ ...consumer, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={consumer.email}
        onChange={(e) => setConsumer({ ...consumer, email: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Address"
        value={consumer.address}
        onChange={(e) => setConsumer({ ...consumer, address: e.target.value })}
        required
      />
      <button type="submit">Add Consumer</button>
    </form>
  );
};

export default ConsumerForm;