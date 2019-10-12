import React, { Component } from 'react';

class Modal extends Component{
  constructor(props) {
    super(props);
    this.state = {
        render: false
    }
}


componentDidMount() {
  setTimeout(function() {
      this.setState({render: true})
  }.bind(this), 9000)
}


render() {
  let renderContainer = false
  if(this.state.render) { 
      renderContainer = 
      <div className="modal">
         <div className="modal-container">
        <button className="modal-button" onClick={this.props.closePopup}>X</button>  
        <p className="modal-text">Hay {Math.floor(Math.random() * 10) + 2} personas mirando esta página.</p>
        <p className="modal-text">¡Date prisa y reserva antes de que se acaben las habitaciones!</p>
        </div>
      </div>
  }
  return (
    renderContainer 
    
  )
}
}
export default Modal;