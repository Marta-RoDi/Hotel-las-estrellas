import React, { Component } from "react";
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      booking: "",
      message: ""
    };
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:5000/contact/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name: '', email: '', booking: '', message: ''})
  }


  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="contact">
        <div>
          <form onSubmit={this.handleSubmit.bind(this)} method="POST">
            <input name="name" type="text" value={this.state.name} onChange={e => this.handleChange(e)}></input>
            <input name="email" type="text" value={this.state.email} onChange={e => this.handleChange(e)}></input>
            <input name="booking" type="text" value={this.state.booking} onChange={e => this.handleChange(e)}></input>
            <textarea name="message" type="text" value={this.state.message} onChange={e => this.handleChange(e)}></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
