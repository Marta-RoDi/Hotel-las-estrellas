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
      <div className="offer">
          {this.state.offers.map((oneOffer, idx) => {
            return (
              <div className="offer-container" key={idx}>
                <p className="offer-container__title">{oneOffer.title}</p>
                <p className="offer-container__description">{oneOffer.description}</p>
                <p className="offer-container__code"><sup>*</sup>Código de descuento <span className="offer-container__code--bold">{oneOffer.code}</span></p>
                <p className="offer-container__legal"><sup>*</sup>Copia este código y pégalo en el proceso de reserva en la parte de código promocional.</p>
              </div>
            );
          })}
        </div>
        </div>
    );
  }
}

export default Offer;
