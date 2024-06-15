import React from 'react'
import { Link } from 'react-router-dom';
import './FlightCard.css'

import plane_logo from '../../assets/FlightCardPics/plane.svg';
import rupee from '../../assets/FlightCardPics/rupee.svg';

const FlightCard = ({items , user_info}) => {

  return ( 
    <div>
   
      <div className='Flight_Card_Parent'>

        <div className='Flight_Card_From_To'>
          <div className='Flight_Card_Location'>
            <div className='Flight_Card_Time'>{items.Departure_Time}</div>
            <div className='Flight_Card_City'>
            <span>{items.Departure_City_Code}</span>
            <span>{items.Departure_City_Name}</span>
            </div>
            <div className='Flight_Card_Airport'>{items.Departure_City_Airport}</div>
          </div>


          <div className='Flight_Card_Pic'>
          <div className='Fligh_Card_Duration'>duration will set later</div>
          <div className='Flight_Card_Single_Line'></div>
          <div><img className='Flight_Card_Little_Plane' width={20} src="https://cdn.iconscout.com/icon/free/png-512/free-airplane-12-84063.png?f=webp&w=256" alt="" /></div>
          </div>
          
          
          <div className='Flight_Card_Location'>
            <div className='Flight_Card_Time'>{items.Arrival_Time}</div>
            <div className='Flight_Card_City'>
            <span>{items.Arrival_City_Code} &nbsp;</span>
            <span>{items.Arrival_City_Name}</span>
            </div> 
            <div className='Flight_Card_Airport'>{items.Arrival_City_Airport}</div>
          </div>
        </div>



      <div className='Flight_Amount_Num'>

        <div className='Flight_Card_Number'>
          <div className='Flight_Card_Flight_Num'><div className="Flight_Card_plane_pic"><img src={plane_logo} alt="" /></div> &ensp;<span>{items.Num}</span></div>
        </div>



  
        <div className='Flight_Card_Price'>
          <div className="Flight_Card_Amount"><img src={rupee} alt="" />{items.Price}</div>
          <Link to='/booknow' state = {{pass_items : items , pass_user_info : user_info}}><div className="Flight_Card_Book">Book Now</div></Link>
        </div>
      </div>

      </div>

    </div>
  )
}

export default FlightCard
 