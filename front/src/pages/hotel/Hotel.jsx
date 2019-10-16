import React, { Component } from 'react';

class Hotel extends Component{
render(){
  return (
    <div className="hotel">
      <div className="belt">
        <h3 className="hotel-title">Nuestras habitaciones</h3>
      <ul className="rooms">
        <li className="rooms-item">
          <p className="rooms-item__title">HABITACIÓN DOBLE</p>
          <p className="rooms-item__description">Doble estándar disponen una cama de 1.35, dos camas de 0.90 o de dos camas de 1.05.</p>
          <ul className="rooms-features">
            <li className="rooms-features__item">Climatización independiente.</li>
            <li className="rooms-features__item">Conexión wifi gratis.</li>
            <li className="rooms-features__item">Baño privado completo con secador, espejo de aumento, bañera o plato de
            ducha, ducha multifunción, dispensador de champú y gel de baño.</li>
            <li className="rooms-features__item">Tv plasma de 32” con antena digital terrestre.</li>
            <li className="rooms-features__item">Armario empotrado con perchas y cajonera en su interior.</li>
            <li className="rooms-features__item">Maletero.</li>
            <li className="rooms-features__item">Mesilla de noche.</li>
            <li className="rooms-features__item">Mesa de trabajo y silla.</li>
            <li className="rooms-features__item">Algunas disponen de terraza.</li>
            <li className="rooms-features__item">Servicio de limpieza diario.</li>
            <li className="rooms-features__item">Cunas para bebes bajo petición con un suplemento de 15€ por noche.</li>
            <li className="rooms-features__item">Un menor de 2 años puede alojarse gratis si comparte cama con los adultos.</li>
          </ul>
        </li>
        <li className="rooms-item">
          <p className="rooms-item__title">HABITACIÓN TRIPLE</p>
          <p className="rooms-item__description">Disponen de 2 camas de 0.90 y una supletoria, o bien, 1 cama de matrimonio y una supletoria.</p>
          <ul className="rooms-features">
            <li className="rooms-features__item">Climatización independiente.</li>
            <li className="rooms-features__item">Conexión wifi gratis.</li>
            <li className="rooms-features__item">Baño privado completo con secador, espejo de aumento, bañera o plato de
            ducha, ducha multifunción, dispensador de champú y gel de baño.</li>
            <li className="rooms-features__item">Tv plasma de 32” con antena digital terrestre.</li>
            <li className="rooms-features__item">Armario empotrado con perchas y cajonera en su interior.</li>
            <li className="rooms-features__item">Maletero.</li>
            <li className="rooms-features__item">Mesilla de noche.</li>
            <li className="rooms-features__item">Mesa de trabajo y silla.</li>
            <li className="rooms-features__item">Algunas disponen de terraza.</li>
            <li className="rooms-features__item">Servicio de limpieza diario.</li>
            <li className="rooms-features__item">Cunas para bebes bajo petición con un suplemento de 15 € por noche.</li>
            <li className="rooms-features__item">Un menor de 2 años puede alojarse gratis si comparte cama con los adultos.</li>
          </ul>
        </li>
        <li className="rooms-item">
          <p className="rooms-item__title">HABITACIÓN CUÁDRUPLE</p>
          <p className="rooms-item__description">Disponen dos camas de matrimonio de 1.35, o bien, 1 cama de matrimonio de 1.35 más dos supletorias.</p>
          <ul className="rooms-features">
            <li className="rooms-features__item">Climatización independiente.</li>
            <li className="rooms-features__item">Conexión wifi gratis.</li>
            <li className="rooms-features__item">Baño privado completo con secador, espejo de aumento, bañera o plato de
            ducha, ducha multifunción, dispensador de champú y gel de baño.</li>
            <li className="rooms-features__item">Tv plasma de 32” con antena digital terrestre.</li>
            <li className="rooms-features__item">Armario empotrado con perchas y cajonera en su interior.</li>
            <li className="rooms-features__item">Maletero.</li>
            <li className="rooms-features__item">Mesilla de noche.</li>
            <li className="rooms-features__item">Mesa de trabajo y silla.</li>
            <li className="rooms-features__item">Algunas disponen de terraza.</li>
            <li className="rooms-features__item">Servicio de limpieza diario.</li>
            <li className="rooms-features__item">Cunas para bebes bajo petición con un suplemento de 15€ por noche.</li>
            <li className="rooms-features__item">Un menor de 2 años puede alojarse gratis si comparte cama con los adultos.</li>
          </ul>
        </li>
        <li className="rooms-item">
          <p className="rooms-item__title">HABITACIÓN QUINTUPLE</p>
          <p className="rooms-item__description">Disponen de dos camas de matrimonio de 1.35 y una supletoria.</p>
          <ul className="rooms-features">
            <li className="rooms-features__item">Climatización independiente.</li>
            <li className="rooms-features__item">Conexión wifi gratis.</li>
            <li className="rooms-features__item">Baño privado completo con secador, espejo de aumento, bañera o plato de
            ducha, ducha multifunción, dispensador de champú y gel de baño.</li>
            <li className="rooms-features__item">Tv plasma de 32” con antena digital terrestre.</li>
            <li className="rooms-features__item">Armario empotrado con perchas y cajonera en su interior.</li>
            <li className="rooms-features__item">Maletero.</li>
            <li className="rooms-features__item">Mesilla de noche.</li>
            <li className="rooms-features__item">Mesa de trabajo y silla.</li>
            <li className="rooms-features__item">Algunas disponen de terraza.</li>
            <li className="rooms-features__item">Servicio de limpieza diario.</li>
            <li className="rooms-features__item">Cunas para bebes bajo petición con un suplemento de 15€ por noche.</li>
            <li className="rooms-features__item">Un menor de 2 años puede alojarse gratis si comparte cama con los adultos.</li>
          </ul>
        </li>
      </ul>

      <h3 className="hotel-title">Servicios</h3>
      <ul className="service">
        <li className="service-item">
          <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237834/icon-restaurant_pjahjw.png" alt="Restaurante"></img>
          <div>
          <p className="service-item__title">Restaurante</p>
          <p className="service-item__description">con gran variedad en su carta, productos aptos para celiacos y vegetarianos.</p>
          </div>
        </li>
        <li className="service-item">
        <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237835/icon-terrace_pwxla6.png" alt="Terraza"></img>
        <div>
          <p className="service-item__title">Terraza de verano</p>
          <p className="service-item__description">En la que podrás disfrutar de nuestra amplia carta de cervezas y cocteles.</p>
          </div>
        </li>
        <li className="service-item">
        <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237834/icon-silla-ruedas_vcrzsw.png" alt="Zona adaptada"></img>
        <div>
          <p className="service-item__title">Zonas adaptadas para minusválidos</p>
          </div>
        </li>
        <li className="service-item">
        <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237834/icon-buffet_jley0h.png" alt="Desayuno buffet"></img>
        <div>
          <p className="service-item__title">Desayuno buffet</p>
          </div>
        </li>
        <li className="service-item">
        <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237834/icon-ascensor_i5ue52.png" alt="Acensor"></img>
        <div>
          <p className="service-item__title">Ascensor</p>
          </div>
        </li>
        <li className="service-item">
        <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237834/icon-entradas_v92nne.png" alt="Venta de entradas"></img>
        <div>
          <p className="service-item__title">Información turística y ventas de entradas</p>
          </div>
        </li>
        <li className="service-item">
        <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237835/icon-wifi_jo5r0k.png" alt="Wifi gratis"></img>
        <div>
          <p className="service-item__title">WIFI gratis en todo el hotel</p>
          </div>
        </li>
        <li className="service-item">
        <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237834/icon-limpieza_eluxyt.png" alt="Limpieza diaria"></img>
        <div>
          <p className="service-item__title">Limpieza diaria</p>
          </div>
        </li>
        <li className="service-item">
          <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237834/icon-equipaje_qa6q7c.png" alt="Consigna de equipajes"></img>
        <div>
          <p className="service-item__title">Consigna de equipajes gratuita</p>
          </div>
        </li>
        <li className="service-item">
        <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237834/icon-salon_wgc9na.png" alt="Sala de entretenimiento"></img>
        <div>
          <p className="service-item__title">Sala de entretenimiento</p>
          <p className="service-item__description">Una sala a disposición de nuestros clientes en la que podrán escoger leer un libro de nuestra biblioteca, juegos de mesa, o simplemente sintonizar el canal que desee en nuestra tv de 42”.</p>
          </div>
        </li>
        <li className="service-item">
        <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237834/icon-reuniones_eem4an.png" alt="Salón de reuniones"></img>
        <div>
          <p className="service-item__title">Salón de reuniones para empresas y eventos</p>
          <p className="service-item__description">Aforo 50-60 pax aproximadamente.</p>
          </div>
        </li>
        <li className="service-item">
        <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237834/icon-parking_hsadlv.png" alt="Parking"></img>
        <div>
          <p className="service-item__title">Parking privado con video-vigilancia</p>
          <p className="service-item__description">Consultar precios y disponibilidad</p>
          </div>
        </li>
        <li className="service-item">
        <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237834/icon-24_wrj3lf.png" alt="Recepción 24h"></img>
        <div>
          <p className="service-item__title">Recepción 24 horas</p>
          </div>
        </li>
        <li className="service-item">
        <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237834/icon-early-checkin_yzjkvv.png" alt="Early Check-in"></img>
        <div>
          <p className="service-item__title">Early Check-in sujeto a disponibilidad</p>
          </div>
        </li>
        <li className="service-item">
        <img className="service-item__image" src="https://res.cloudinary.com/dr71uffjo/image/upload/v1571237834/icon-checkin_klazcn.png" alt="Early Check-out"></img>
        <div>
          <p className="service-item__title">Early Check-out</p>
          </div>
        </li>
        
      </ul>

        
      </div>
    </div>
  )
}
}

export default Hotel;