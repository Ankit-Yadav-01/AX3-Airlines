import React, { useState } from 'react';
import './AddFlightPage.css';

const AddFlightPage = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [flightData, setFlightData] = useState({
    num: '',
    departcitycode: '',
    departcityname: '',
    departcityairport: '',
    arrivcitycode: '',
    arrivcityname: '',
    arrivcityairport: '',
    departdatetime: '',
    arrivdatetime: '',
    seats_count: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      num: flightData.num,
      departcitycode: flightData.departcitycode,
      departcityname: flightData.departcityname,
      departcityairport: flightData.departcityairport,
      arrivcitycode: flightData.arrivcitycode,
      arrivcityname: flightData.arrivcityname,
      arrivcityairport: flightData.arrivcityairport,
      depart_date: flightData.departdatetime.split('T')[0],
      depart_time: flightData.departdatetime.split('T')[1],
      arrive_date: flightData.arrivdatetime.split('T')[0],
      arrive_time: flightData.arrivdatetime.split('T')[1],
      seats_count: flightData.seats_count,
      price: flightData.price,
    };

    try {
      const response = await fetch(backendUrl+'add_flight', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      alert("Added Successfully");
      console.log('Flight added successfully:', data);
    } catch (error) {
      console.error('Error adding flight:', error);
    }
  };

  return (
    <div className="add-flight-page">
      <div className="form-container">
        
        <h1>Add Flight</h1>
        <form onSubmit={handleSubmit}>
          <div className="flight-form-grid">
            <div className="form-column">
              <input type="text" name="num" value={flightData.num} onChange={handleChange} placeholder="Flight Number" required />
              <input type="text" name="departcitycode" value={flightData.departcitycode} onChange={handleChange} placeholder="Departure City Code" required />
              <input type="text" name="departcityname" value={flightData.departcityname} onChange={handleChange} placeholder="Departure City Name" required />
              <input type="text" name="departcityairport" value={flightData.departcityairport} onChange={handleChange} placeholder="Departure City Airport" required />
            </div>
            <div className="form-column">
              <input type="datetime-local" name="departdatetime" value={flightData.departdatetime} onChange={handleChange} required />
              <input type="text" name="arrivcitycode" value={flightData.arrivcitycode} onChange={handleChange} placeholder="Arrival City Code" required />
              <input type="text" name="arrivcityname" value={flightData.arrivcityname} onChange={handleChange} placeholder="Arrival City Name" required />
              <input type="text" name="arrivcityairport" value={flightData.arrivcityairport} onChange={handleChange} placeholder="Arrival City Airport" required />
            </div>
            <div className="form-column">
              <input type="datetime-local" name="arrivdatetime" value={flightData.arrivdatetime} onChange={handleChange} required />
              <input type="number" name="seats_count" value={flightData.seats_count} onChange={handleChange} placeholder="Seats Count" required />
              <input type="number" name="price" value={flightData.price} onChange={handleChange} placeholder="Price" required />
              <button type="submit">Add Flight</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFlightPage;
