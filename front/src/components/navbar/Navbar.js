import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state = {loggedInUser: null};
    this.service= new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      loggedInUser: nextProps["userInSession"]
    })
  }

  handleLogout = e => {
    this.props.logout();
  }

  render () {
    if(this.state.loggedInUser){
      return(
        <nav>
          <ul>
            <li>
              <a href="#1" onClick={this.handleLogout}>Logout</a>
            </li>
          </ul>
  
          <div>
            <p>Hola {this.state.loggedInUser.username}</p>
          </div>
        </nav>
      )
    }else{
      return (
        <nav>
          <ul>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      )
    }
  }
}

export default Navbar;