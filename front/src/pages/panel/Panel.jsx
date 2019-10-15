import React, { Component } from "react";
import { Link } from "react-router-dom";
import OfferService from "../../tools/offerService";

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offers: [],
      title: "",
      description: "",
      code: ""
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

  deleteOffer(offerDelete) {
    this.service.delete(offerDelete).then(response => {
      this.setState({
        offers: response
      });
    });
  }

  addNewOffer(){
    this.service.new(this.state.title, this.state.description, this.state.code).then(response => {
      this.setState({
        offers: response,
        title: "",
        description: "",
        code: ""
      })  
    })
    .then(() => {
      return  alert("Oferta creada con éxito :)")
      
     })
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="panel">
        <div className="belt">
        <div>
          <form>
            <input name="title" type="text" value={this.state.title} onChange={e => this.handleChange(e)}></input>
            <textarea name="description" type="text" value={this.state.description} onChange={e => this.handleChange(e)}></textarea>
            <input name="code" type="text" value={this.state.code} onChange={e => this.handleChange(e)}></input>
            <Link to="/panel"><button onClick={() => this.addNewOffer()}>Añadir oferta</button></Link>
          </form>
        </div>
        <div className="offer">
        {this.state.offers.map((oneOffer, idx) => {
          return (
            <div className="offer-container" key={idx}>
              <p className="offer-container__title">{oneOffer.title}</p>
              <p className="offer-container__description">{oneOffer.description}</p>
              <p className="offer-container__code"><sup>*</sup>Código de descuento <span className="offer-container__code--bold">{oneOffer.code}</span></p>
                <p className="offer-container__legal"><sup>*</sup>Copia este código y pégalo en el proceso de reserva en la parte de código promocional.</p>
              <button className="panel-delete"
                onClick={() => {
                  this.deleteOffer(oneOffer._id);
                }}
              >
                Eliminar esta oferta
              </button>
            </div>
          );
        })}
        </div>
      </div>
      </div>
    );
  }
}

export default Panel;
