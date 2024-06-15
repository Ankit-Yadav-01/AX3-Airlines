import React, { useState } from 'react';
import './SignupPage.css';
import Navbar from '../../Components/Navbar/Navbar';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '', 
    username: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { 
      name: formData.name, 
      email: formData.email, 
      password: formData.password, 
      phone: formData.phoneNumber, 
      username: formData.username 
    };
    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if(response.ok){
        alert("User Registered Successfully")
        
      }
      if (!response.ok) {
        throw new Error("Response was NOT OK....");
      }

      const responseData = await response.text();
      setUser(responseData);
    } catch (error) {
      console.log("Error in SignUp: ", error);
    }
  };

  return (
    <>
      <Navbar user_info={user} />
      <div className="signup-page">
        <div className="signup-container">
          <h2>Create Your Account</h2>
          <p>Sign up to enjoy our exclusive services</p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="signup-input"
              required
            />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="signup-input"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="signup-input"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="signup-input"
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="signup-input"
              required
            />
            <button type="submit" className="signup-button">Sign Up</button>
            <p>Already have an account? <a href="/login" className="signup-link">login</a></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
