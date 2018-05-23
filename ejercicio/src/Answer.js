import React, { Component } from 'react';
import './App.css';

class Answer extends Component {

  
  render() {
    const item = this.props.item
    return (
    <div>
      <h3> {item.answer} </h3>
      <h3> {item.author} </h3>
    </div>
    );
  }
}

export default Answer;
