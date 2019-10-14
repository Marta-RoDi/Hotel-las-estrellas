import React, { Component } from 'react';
import Button from '../../components/button/Button'

class Booking extends Component{
render(){
  return (
    <div className="booking">
      <p className="booking-text">Para realizar una reserva, haga click en el botón de abajo y será redirigido a nuestra plataforma de reservas</p>
      <a target="_blank" href="https://booking.redforts.com/CMiwovo7"><Button className="booking-button" text="Hacer una reserva" value="Login"></Button></a>
      <img className="booking-image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571049626/phone-booking_d2q9vw.png"></img>
    </div>
  )
}
}


export default Booking;