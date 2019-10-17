import React, { Component } from 'react';
import { Parallax } from 'rc-scroll-anim';

class Follow extends Component{

constructor(){
  super();
  this.state ={
    classFollow: 'absolut'
  }
}

handleAnimation = () => {       
  if (document.documentElement.scrollTop >= 340) {           
   this.setState({ classFollow: 'fixed' });  
 };
 
 if (document.documentElement.scrollTop <= 341) {           
  this.setState({ classFollow: 'absolut' });  
};
}

componentDidMount() {    
  window.onscroll = () => this.handleAnimation();  
 };
   

render(){
  return (
    <div className={"follow " + (this.state.classFollow)}>
      <p className="follow-text"><a className="follow-text__a" target="_blank" href="https://booking.redforts.com/CMiwovo7">RESERVAR</a></p>
    </div>
  )
}
}

export default Follow;