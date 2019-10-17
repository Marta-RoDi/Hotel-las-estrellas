import React, { Component } from "react";
import OfferService from "../../tools/offerService";

class Offer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: []
    };

    this.service = new OfferService();
  }

  componentDidMount() {
    this.service.offers().then(response => {
      this.setState({
        offers: response
      });
    });
  }

  render() {
    return (
      <div className="belt">
      <ul className="offer">
          {this.state.offers.map((oneOffer, idx) => {
            return (
              <li className="offer-container" key={idx}>
                <p className="offer-container__title">{oneOffer.title}</p>
                <p className="offer-container__description">{oneOffer.description}</p>
                <p className="offer-container__code"><sup>*</sup>Código de descuento <span className="offer-container__code--bold">{oneOffer.code}</span></p>
                <p className="offer-container__legal"><sup>*</sup>Copia este código y pégalo en el proceso de reserva en la parte de código promocional.</p>
                <p className="offer-container__share">¡Comparte esta oferta en redes!</p>

<a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhotellasestrellas.herokuapp.com%2Fofertas" target="_blank" rel="noopener" aria-label="">
  <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--circle">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11.5"/><path d="M15.84 9.5H13.5V8.48c0-.53.35-.65.6-.65h1.4v-2.3h-2.35c-2.3 0-2.65 1.7-2.65 2.8V9.5h-2v2h2v7h3v-7h2.1l.24-2z"/></svg>
    </div>
  </div>
</a>
<a class="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Date%20prisa%20y%20disfruta%20de%20esta%20oferta%20en%20el%20Hotel%20Las%20Estrellas&amp;url=https%3A%2F%2Fhotellasestrellas.herokuapp.com%2Fofertas" target="_blank" rel="noopener" aria-label="">
  <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--circle">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.5 7.4l-2 .2c-.4-.5-1-.8-2-.8C13.3 6.8 12 8 12 9.4v.6c-2 0-4-1-5.4-2.7-.2.4-.3.8-.3 1.3 0 1 .4 1.7 1.2 2.2-.5 0-1 0-1.2-.3 0 1.3 1 2.3 2 2.6-.3.4-.7.4-1 0 .2 1.4 1.2 2 2.3 2-1 1-2.5 1.4-4 1 1.3 1 2.7 1.4 4.2 1.4 4.8 0 7.5-4 7.5-7.5v-.4c.5-.4.8-1.5 1.2-2z"/><circle cx="12" cy="12" r="11.5"/></svg>
    </div>
  </div>
</a>
<a class="resp-sharing-button__link" href="whatsapp://send?text=Date%20prisa%20y%20disfruta%20de%20esta%20oferta%20en%20el%20Hotel%20Las%20Estrellas%20https%3A%2F%2Fhotellasestrellas.herokuapp.com%2Fofertas" target="_blank" rel="noopener" aria-label="">
  <div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--circle">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle xmlns="http://www.w3.org/2000/svg" cx="12" cy="12" r="11.5"/><path stroke-width="1px" d="M17.6 6.2c-1.5-1.5-3.4-2.3-5.5-2.3-4.3 0-7.8 3.5-7.8 7.8 0 1.4.4 2.7 1 3.9l-1.1 4 4.1-1.1c1.1.6 2.4.9 3.7.9 4.3 0 7.8-3.5 7.8-7.8.1-2-.7-3.9-2.2-5.4zm-5.5 11.9c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2.4.6.7-2.4-.2-.2c-.6-1-1-2.2-1-3.4 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3.7 4.6 1.9 1.2 1.2 1.9 2.8 1.9 4.6-.1 3.5-3 6.4-6.6 6.4zm3.5-4.8c-.2-.1-1.1-.6-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.8-.1.1-.2.1-.4 0s-.8-.3-1.6-1c-.6-.5-1-1.2-1.1-1.3-.1-.2 0-.3.1-.4l.3-.3s.1-.2.2-.3c.1-.1 0-.2 0-.3s-.4-1.1-.6-1.4c-.2-.4-.3-.3-.4-.3h-.4s-.3 0-.5.2-.7.7-.7 1.6c0 1 .7 1.9.8 2s1.4 2.1 3.3 2.9c.5.2.8.3 1.1.4.5.1.9.1 1.2.1.4-.1 1.1-.5 1.3-.9.2-.5.2-.8.1-.9 0-.2-.2-.3-.4-.4z"/></svg>
    </div>
  </div>
</a>

              </li>
            );
          })}
        </ul>
        </div>
    );
  }
}

export default Offer;
