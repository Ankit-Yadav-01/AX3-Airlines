import React, { useEffect, useState } from 'react';
import './ListFlightsPage.css';

const ListFlightsPage = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch('http://localhost:3001/get_flights');
        const data = await response.json();
        setFlights(data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    fetchFlights();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/delete_flight/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setFlights(flights.filter(flight => flight._id !== id));
    } catch (error) {
      console.error('Error deleting flight:', error);
    }
  };

  return (
    <div className="list-flights-page">
      <h1>List Flights</h1>
      <ul className="flight-list">
        {flights.map((flight) => (
          <li key={flight._id} className="flight-item">
            <div className="flight-details">
              <p><strong>Flight Number:</strong> {flight.num}</p>
              <p><strong>Departure City:</strong> {flight.Departure_City_Name} ({flight.Departure_City_Code})</p>
              <p><strong>Departure Airport:</strong> {flight.Departure_City_Airport}</p>
              <p><strong>Departure Date:</strong> {flight.Departure_Date}</p>
              <p><strong>Departure Time:</strong> {flight.Departure_Time}</p>
              <p><strong>Arrival City:</strong> {flight.Arrival_City_Name} ({flight.Arrival_City_Code})</p>
              <p><strong>Arrival Airport:</strong> {flight.Arrival_City_Airport}</p>
              <p><strong>Arrival Date:</strong> {flight.Arrival_Date}</p>
              <p><strong>Arrival Time:</strong> {flight.Arrival_Time}</p>
              <p><strong>Price:</strong> ${flight.Price}</p>
            </div>
            <button onClick={() => handleDelete(flight._id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListFlightsPage;
