import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions';

import Textarea from './components/Textarea/Textarea';
import ClickButton from './components/ClickButton/ClickButton';

class App extends Component {
  render() {
    return (<div className="App" >
      <Textarea />
      <ClickButton actionCount={this.props.addcount} actionName="+" />
      <ClickButton actionCount={this.props.deccount} actionName="-" />
            </div>

    );
  }
}
const mapDispatchToProps = dispatch => ({
  addcount: () => dispatch(increment()),
  deccount: () => dispatch(decrement()),
});
export default connect(null, mapDispatchToProps)(App);
