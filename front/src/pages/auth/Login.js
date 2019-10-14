import React, { Component } from 'react';
import AuthService from './AuthService'
import Button from '../../components/button/Button'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
    .then(response => {
      this.setState({
        username: username,
        password: password,
        error: false
      })
      window.location = '/home'
      this.props.getUser(response)
    })
    .catch(error => {
      this.setState({
        username: username,
        password: password,
        error: true
      })
    })
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value })
  }

  render(){
    return (
      <div className="login-container">
      <div className="login-box-container">
      <div className="login-picture"></div>
      <div className="login">
        <h3 className="login-title">Iniciar sesión</h3>
        <form className="login-form" onSubmit={this.handleFormSubmit}>
          <fieldset>
            {/* <label className="login-form__label">Username:</label> */}
            <input className="login-form__input" type="text" name="username" placeholder="Usuario" value={this.state.username} onChange={e => this.handleChange(e)}></input>
          </fieldset>

          <fieldset>
            {/* <label className="login-form__label">Password:</label> */}
            <input className="login-form__input" type="password" name="password" placeholder="Contraseña" value={this.state.password} onChange={e => this.handleChange(e)}></input>
          </fieldset>
          <Button className="login-button" text="Iniciar sesión" value="Login"></Button>
          {/* <input className="login-form__button" type="submit" value="Login"></input> */}
        </form>

        <p className="login-error">{this.state.error ? 'Ha ocurrido un error, revise los campos.' : ''}</p>
      </div>
      </div>
      </div>
    )
  }
}

export default Login;