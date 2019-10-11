import React, { Component } from 'react';

class Booking extends Component{
render(){
  return (
    <div className="booking">
        <form class="widget_redforts_com">
          <input class="arrival_redforts_com" />
          <input class="departure_redforts_com"/>
          <input type="submit" value="Mostrar disponibilidad"/>
        </form>
    </div>
  )
}
}

export default Booking;