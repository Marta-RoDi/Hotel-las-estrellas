import React, { Component } from "react";
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";


import './stylesheet/main.scss'
//Import components
import Navbar from "./components/navbar/Navbar";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import AuthService from "./pages/auth/AuthService";
import Home from "./pages/home/Home";
import Offer from "./pages/offers/Offer";
import Panel from "./pages/panel/Panel";
import Booking from "./pages/booking/Booking";
import GalleryPhoto from "./pages/gallery/GalleryPhoto";
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
        <Redirect to="/home"></Redirect>
        <div className="App">
          <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout}></Navbar>
            <Switch>
              <Route exac path="/home" render={() => <Home getUser={this.getUser}></Home>}></Route>
              <Route exac path="/reservas" render={() => <Booking getUser={this.getUser}></Booking>}></Route>
              <Route exac path="/galeria" render={() => <GalleryPhoto getUser={this.getUser}></GalleryPhoto>}></Route>
              <Route exac path="/ofertas" render={() => <Offer getUser={this.getUser}></Offer>}></Route>
              <Route exac path="/panel" render={() => <Panel getUser={this.getUser}></Panel>}></Route>
            </Switch>
          </header>
          <footer>
          <Footer></Footer>
          </footer>
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
              <Route exac path="/home" render={() => <Home getUser={this.getUser}></Home>}></Route>
              <Route exac path="/reservas" render={() => <Booking getUser={this.getUser}></Booking>}></Route>
              <Route exac path="/galeria" render={() => <GalleryPhoto getUser={this.getUser}></GalleryPhoto>}></Route>
              <Route exac path="/signup" render={() => <Signup getUser={this.getUser}></Signup>}></Route>
              <Route exac path="/login" render={() => <Login getUser={this.getUser}></Login>}></Route>
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
