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
      console.log(response)
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.title}</p>
            {this.state.offers.map((oneOffer, idx) => {
              return <div key={idx}>
                <p>Tagline: {oneOffer.title}</p>
                </div>
            })}

            holiiiiiiii
          </div>
    )
}
}


export default Offer;
