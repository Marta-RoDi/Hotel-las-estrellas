import React, { Component } from "react";
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";


import './stylesheet/main.scss'
//Import components
import Navbar from "./components/navbar/Navbar";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import AuthService from "./pages/auth/AuthService";
import Content from "./components/contents/Content";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      loggedInUser: null
    }
    this.service = new AuthService();
    this.fetchUser()
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj,
    })
  }

  logout = () => {
    this.service.logout().then(() => {
      this.setState({loggedInUser: null})
    })
  }

  fetchUser() {
    return this.service
    .loggedin()
    .then(response => {
      this.setState({
        loggedInUser: response,
      })
    })
    .catch(err => {
      this.setState({
        loggedInUser: false,
      })
    })
  }

  render () {
    if(this.state.loggedInUser){
      return (
        <React.Fragment>
          <Redirect to ="/home" />
          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout}></Navbar>
              <Content></Content>
            </header>
          </div>
        </React.Fragment>
      )
    }else{
      return (
        <React.Fragment>
        <Redirect to="/home"></Redirect>
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout}></Navbar>
            <Switch>
              <Route exac path="/signup" render={() => <Signup getUser={this.getUser}></Signup>}></Route>
              <Route exac path="/login" render={() => <Login getUser={this.getUser}></Login>}></Route>
              <Route exac path="/home" render={() => <Home getUser={this.getUser}></Home>}></Route>
            </Switch>
          </header>
          <footer>
          <Footer></Footer>
          </footer>
        </div>
      </React.Fragment>
      )
    }
  }


}



export default App;
