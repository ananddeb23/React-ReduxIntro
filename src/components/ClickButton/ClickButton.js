import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class ClickButton extends Component {
  render() {
    return (
      <button onClick={this.props.actionCount}> {this.props.actionName} </button>
    );
  }
}

export default ClickButton;
