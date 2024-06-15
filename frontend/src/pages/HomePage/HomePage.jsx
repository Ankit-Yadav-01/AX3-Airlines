import React from 'react';
import { useLocation } from 'react-router-dom';
import './HomePage.css';
import Navbar from '../../Components/Navbar/Navbar';

const HomePage = () => {
  const { state } = useLocation();
  let user_info = null;
  if (state) {
    user_info = state.user_info;
  }

  return (
    <>
      <Navbar user_info={user_info} />
      <div className="home-page">
        <div className="container">
          <h1>Welcome {user_info ? user_info.name : ''} to AX3-Airline</h1>
          <section className="introduction">
            <h2>About Us</h2>
            <p>AX3-Airline is dedicated to providing the best travel experience across India. With our modern fleet and exceptional service, we make your journey comfortable and memorable.</p>
          </section>
          <section className="features">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Modern and comfortable aircraft</li>
              <li>Exceptional customer service</li>
              <li>Affordable pricing</li>
              <li>Extensive network covering major cities in India</li>
            </ul>
          </section>
          <section className="destinations">
            <h2>Popular Destinations</h2>
            <div className="destination-cards">
              <div className="card">
                <h3>Mumbai</h3>
                <p>Experience the vibrant culture and bustling life of India’s financial capital.</p>
              </div>
              <div className="card">
                <h3>Delhi</h3>
                <p>Explore the rich history and modern marvels of the nation’s capital.</p>
              </div>
              <div className="card">
                <h3>Bangalore</h3>
                <p>Enjoy the pleasant weather and thriving tech scene in the Silicon Valley of India.</p>
              </div>
            </div>
          </section>
          <section className="reviews">
            <h2>What Our Customers Say</h2>
            <blockquote>"AX3-Airline offers the best travel experience within India. Highly recommended!" - Anjali Sharma</blockquote>
            <blockquote>"Excellent service and comfortable flights. Always my first choice!" - Raj Mehta</blockquote>
          </section>
          <section className="coverage">
            <h2>We Are All Over India</h2>
            <p>With a vast network covering all major cities and towns, AX3-Airline ensures you are always connected. Whether you are traveling for business or leisure, our extensive coverage makes it easy to reach your destination.</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;
