import React, { useEffect, useState } from "react";
import axios from "axios";

const ConsumerList = () => {
  const [consumers, setConsumers] = useState([]);

  useEffect(() => {
    const fetchConsumers = async () => {
      const response = await axios.get("http://localhost:3001/consumers");
      setConsumers(response.data);
    };
    fetchConsumers();
  }, []);

  return (
    <div>
      <h2>Consumers</h2>
      {consumers.map((consumer) => (
        <div key={consumer.id}>
          <h3>{consumer.name}</h3>
          <p>{consumer.email}</p>
          <p>{consumer.address}</p>
        </div>
      ))}
    </div>
  );
};

export default ConsumerList;