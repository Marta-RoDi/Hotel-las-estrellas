import React, { Component } from 'react';
import AuthService from './AuthService'

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
      <div className="signup">
        <h3>Sign up</h3>
        <form onSubmit={this.handleFormSubmit} enctype="multipart/form-data">
          <fieldset>
            <label>Username:</label>
            <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)}></input>
          </fieldset>
          <fieldset>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)}></input>
          </fieldset>
          <fieldset>
            <label>Photo:</label>
            <input type="file" name="userPhoto" id="user-photo" value={this.state.photo} onChange={e => this.handleChange(e)}></input>
          </fieldset>
          <input type="submit" value="Sign up"></input>
        </form>
        <p>{this.state.error ? 'Error' : ''}</p>
      </div>
    )
  }
}

export default Signup;