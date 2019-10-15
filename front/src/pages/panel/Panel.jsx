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
      code: "",
      message: ""
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
      this.setState({
        ...this.state,
        message: "Oferta creada satisfactoriamente"
      })
      setTimeout(() => {
        this.setState({
          ...this.state,
          message: ""
        })
      }, 4000);
     })
     .catch(() => {
      this.setState({
        message: "No ha sido posible crear la oferta"
      })
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
        <div className="panel-form__container">
          <h3 className="panel-form__container__title">Crea una nueva oferta</h3>
          <form className="panel-form">
            <div className="panel-form__fields">
            <div className="panel-form__left">
            <input placeholder="Título de la oferta" className="panel-form__input" name="title" type="text" value={this.state.title} onChange={e => this.handleChange(e)}></input>
            <input placeholder="Código de la oferta" className="panel-form__input" name="code" type="text" value={this.state.code} onChange={e => this.handleChange(e)}></input>
            </div>
            <div className="panel-form__right">
            <textarea placeholder="Descripción de la oferta" className="panel-form__textarea" name="description" type="text" value={this.state.description} onChange={e => this.handleChange(e)}></textarea>
            </div>
            </div>
            <Link to="/panel"><button className="panel-form__button" onClick={() => this.addNewOffer()}>Añadir oferta</button></Link>
          </form>
          {this.state.message && (
            <p className="panel-alert">{this.state.message}</p>
          )}
        </div>
        <h3 className="panel-form__offer__title">Ofertas activas</h3>
        <ul className="offer">
        {this.state.offers.map((oneOffer, idx) => {
          return (
            <li className="offer-container" key={idx}>
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
            </li>
          );
        })}
        </ul>
      </div>
      </div>
    );
  }
}

export default Panel;
