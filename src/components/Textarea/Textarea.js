import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { connect } from 'react-redux';

class Textarea extends Component {
  render() {
    return (
      <p> {this.props.text} </p>
    );
  }
}
const mapStateToProps = state => ({ text: state.counter.count });
export default connect(mapStateToProps, null)(Textarea);
