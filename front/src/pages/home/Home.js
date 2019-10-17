import React, { Component } from "react";
import Modal from "../../components/modal/Modal";

class Home extends Component {
  constructor(props){  
    super(props);  
    this.state = { 
      showPopup: true,
      urlImage: "https://res.cloudinary.com/dr71uffjo/image/upload/v1570898096/logo-home_xl1c9k.png"
     };  
    }  
    
      togglePopup() {  
        this.setState({  
         showPopup: !this.state.showPopup  
    });  
     } 

     componentDidMount(){
      setTimeout(() => {
        this.setState({
          ...this.state,
          urlImage: ""
        });
      }, 2000);
     }


  render() {
    return (
      <section className="home">
        <div className="home-grey">
        { <img
            className="home-grey__logo"
            src={this.state.urlImage}
          ></img>}
          </div>
        <div className="belt">
          <img
            className="home-bg"
            src="https://res.cloudinary.com/dr71uffjo/image/upload/v1570875887/bg-home_jxp455.jpg"
          ></img>
          <img
            className="home-key"
            src="https://res.cloudinary.com/dr71uffjo/image/upload/v1570875766/key-home_f6xmg1.png"
          ></img>
          <img
            className="home-bell"
            src="https://res.cloudinary.com/dr71uffjo/image/upload/v1570875766/bell-home_l2eqbn.png"
          ></img>
          <div className={
                        (this.state.showPopup ? "" : "close-pop-up")
                      }>
          {this.state.showPopup ? (
            <Modal
              closePopup={this.togglePopup.bind(this)}
            />
          ) : null}
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
