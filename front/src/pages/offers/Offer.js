import React, { Component } from "react";
import OfferService from "../../tools/offerService";

class Offer extends Component {
  constructor(props){
    super(props);

    this.state ={
      offers: [],
    }

    this.service = new OfferService();
  }

  componentDidMount(){
    this.service.offers()
    .then(response => {
      this.setState({
       offers: response
      })
    })
  }

  render() {
    return (
      <div className="offer">
        <p>{this.state.title}</p>
            {this.state.offers.map((oneOffer, idx) => {
              return <div key={idx}>
                <p>Título: {oneOffer.title}</p>
                <p>Descripción: {oneOffer.description}</p>
                <p>Código: {oneOffer.code}</p>
                </div>
            })}
          </div>
    )
}
}


export default Offer;
