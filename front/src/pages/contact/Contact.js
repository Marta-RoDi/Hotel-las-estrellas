import React, { Component } from "react";
import axios from "axios";
import Button from "../../components/button/Button";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      booking: "",
      message: "",
      alert: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_URL}/contact/send`,
      data: this.state
    })
      .then(response => {
        if (response.data.status === "success") {
          this.setState({
            ...this.state,
            alert: "Mensaje enviado satisfactoriamente",
            error: false
          });
          setTimeout(() => {
            this.setState({
              ...this.state,
              alert: ""
            });
          }, 4000);
          this.resetForm();
        } else if (response.data.status === "fail") {
          this.setState({
            alert: "No ha sido posible enviar el mensaje",
          });
        }
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  }

  resetForm() {
    this.setState({ name: "", email: "", booking: "", message: "" });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="contact">
        <div className="contact-form__container">
          <h3 className="contact-form__container__title">
            ¿Tienes alguna duda? Escríbenos
          </h3>
          <form
            className="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <input
              className="contact-form__input"
              name="name"
              placeholder="Nombre"
              type="text"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            ></input>
            <input
              className="contact-form__input"
              name="email"
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            ></input>
            <input
              className="contact-form__input"
              name="booking"
              placeholder="Número de reserva"
              type="text"
              value={this.state.booking}
              onChange={e => this.handleChange(e)}
            ></input>
            <textarea
              className="contact-form__textarea"
              name="message"
              placeholder="Mensaje"
              type="text"
              value={this.state.message}
              onChange={e => this.handleChange(e)}
            ></textarea>
            <Button
              className="contact-form__button"
              text="Enviar"
              value="Enviar"
            ></Button>
          </form>
          {this.state.alert && (
            <p className="contact-alert">{this.state.alert}</p>
          )}

          {this.state.error && (
            <p className="contact-error">Tiene que rellenar todos los campos</p>
          )}
        </div>
      </div>
    );
  }
}

export default Contact;
