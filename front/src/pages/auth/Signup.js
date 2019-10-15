import React, { Component } from 'react';
import AuthService from './AuthService'
import Button from '../../components/button/Button'

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', photo: '' }
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const photo = this.state.photo;

    this.service.signup(username, password, photo)
    .then(response => {
      this.setState({
        username: "",
        password: "",
        photo:""
      })
      window.location = '/home'
      this.props.getUser(response.user)
    })
    .catch(error => {
      this.setState({
        username: username,
        password: password,
        photo: photo,
        error: true
      })
    })
  }

  handleChange = (event) =>{
    const {name, value} = event.target;
    this.setState({[name]: value})
  }


  render(){
    return(
      <div className="signup-container">
      <div className="signup-box-container">
      <div className="signup-picture"></div>
      <div className="signup">
        <h3 className="signup-title">Registrarse</h3>
        <form className="signup-form"  onSubmit={this.handleFormSubmit} content-type="multipart/form-data">
          <fieldset>
            {/* <label>Username:</label> */}
            <input className="signup-form__input" placeholder="Usuario" type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)}></input>
          </fieldset>
          <fieldset>
            {/* <label>Password:</label> */}
            <input className="signup-form__input" placeholder="Contraseña" type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}></input>
          </fieldset>
          {/* <fieldset>
            <label>Photo:</label>
            <input type="file" name="photo" id="user-photo" value={this.state.photo} onChange={e => this.handleChange(e)}></input>
          </fieldset> */}
          {/* <input type="submit" value="Sign up"></input> */}
          <Button className="signup-button" text="Registrarse" value="signup"></Button>
        </form>
        <p className="signup-error">{this.state.error ? 'Ha ocurrido un error, revise los campos.' : ''}</p>
      </div>
      </div>
      </div>
    )
  }
}

export default Signup;