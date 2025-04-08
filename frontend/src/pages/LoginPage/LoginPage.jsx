import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Navbar from '../../Components/Navbar/Navbar';

const LoginPage = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [user, setUser] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { email: credentials.email, password: credentials.password };
    try {
      const response = await fetch(backendUrl+'get_user_profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const responseData = await response.json();
      if (responseData) {
        setUser(responseData);
        navigate("/", { state: { user_info: responseData } });
      } else {
        setUser({})
        alert("User Not Found");
      }
    } catch (error) {
      console.error(error);
      console.log('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Navbar user_info={user} />
      <div className="login-page">
        <div className="login-container">
          <h2>Welcome Back!</h2>
          <p>Please login to your account</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Email"
              className="login-input"
              required
            />
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Password"
              className="login-input"
              required
            />
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="login-footer">
            <p>Don't have an account? <a href="/signup" className="signup-link">Sign Up</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
