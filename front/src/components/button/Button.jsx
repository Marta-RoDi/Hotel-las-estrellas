import React, { Component } from 'react';

class Button extends Component{
  constructor(props){
    super(props);
  }
render(){
  return (
    <div>
      <button className={this.props.className}>{this.props.text}</button>
    </div>
  )
}
}

export default Button;